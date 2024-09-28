import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:maazinfo/url.dart';
import 'dart:io';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:jwt_decoder/jwt_decoder.dart';

class EditProfileScreen extends StatefulWidget {
  @override
  _EditProfileScreenState createState() => _EditProfileScreenState();
}

class _EditProfileScreenState extends State<EditProfileScreen> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneNumberController = TextEditingController();
  String _selectedRegion = "pakistan";
  XFile? _imageFile;
  final ImagePicker _picker = ImagePicker();
  bool isLoading = false;
  String userId = "";
  var userData = {}; // store userdata

  @override
  void initState() {
    super.initState();
    _loadUserProfile(); // Load user profile
  }

  Future<void> _loadUserProfile() async {
    setState(() {
      isLoading = true;
    });

    try {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      String? token = prefs.getString('token');

      if (token != null) {
        Map<String, dynamic> decodedToken = JwtDecoder.decode(token);
        userId = decodedToken['userId'];

        final response = await http.get(
          Uri.parse('$baseUrl/get-user-profile/$userId'),
          headers: {'Authorization': 'Bearer $token'},
        );

        //  Print the response on console
        print("Response Status Code: ${response.statusCode}");
        print("Response Body: ${response.body}");

        if (response.statusCode == 200) {
          userData = jsonDecode(response.body)['data'];

          //  Print the fetche use data
          print("Fetched User Data: $userData");

          _nameController.text = userData['userName'] ?? '';
          _emailController.text = userData['email'] ?? '';
          _selectedRegion = userData['country'] ?? 'pakistan'; // Default value
          _phoneNumberController.text = userData['phoneNumber'] ?? '';
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Failed to load profile data')),
          );
        }
      }
    } catch (error) {
      print("Error loading profile: $error");
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error loading profile')),
      );
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  Future<void> _pickImage() async {
    try {
      final XFile? pickedFile = await _picker.pickImage(source: ImageSource.gallery);
      if (pickedFile != null) {
        setState(() {
          _imageFile = pickedFile;
        });
      } else {
        print("No image selected.");
      }
    } catch (e) {
      print("Error picking image: $e");
    }
  }

  Future<String> _uploadImageToFirebase() async {
    try {
      if (_imageFile == null) {
        throw Exception("No image selected");
      }

      FirebaseStorage storage = FirebaseStorage.instance;
      Reference ref = storage.ref().child("profile_pictures/${_imageFile!.name}");
      UploadTask uploadTask = ref.putFile(File(_imageFile!.path));

      TaskSnapshot snapshot = await uploadTask;
      String downloadURL = await snapshot.ref.getDownloadURL();
      print("Image uploaded to Firebase: $downloadURL");
      return downloadURL;
    } catch (e) {
      print("Error uploading image to Firebase: $e");
      throw e;
    }
  }

  Future<void> _updateUserProfile() async {
    setState(() {
      isLoading = true;
    });

    try {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      String? token = prefs.getString('token');

      if (token != null) {
        // Upload image to Firebase and get URL
        String? profilePictureUrl;
        if (_imageFile != null) {
          profilePictureUrl = await _uploadImageToFirebase();
        } else {
          profilePictureUrl = userData['profilePicture'];
        }

        // Updated user data
        var updatedUserData = {
          "userName": _nameController.text,
          "email": _emailController.text,
          "country": _selectedRegion,
          "phoneNumber": _phoneNumberController.text,
          "profilePicture": profilePictureUrl, // Send the Firebase image URL
        };

        print("Updated User Data: $updatedUserData");

        // Send PATCH request
        final response = await http.patch(
          Uri.parse('$baseUrl/update-profile/$userId'),
          headers: {
            'Authorization': 'Bearer $token',
            'Content-Type': 'application/json',
          },
          body: jsonEncode(updatedUserData), // Convert data to JSON
        );

        // Check response
        if (response.statusCode == 200) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Profile updated successfully')),
          );
        } else {
          print("Failed to update profile. Status code: ${response.statusCode}");
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Failed to update profile')),
          );
        }
      }
    } catch (error) {
      print("Error updating profile: $error");
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error updating profile')),
      );
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: Text(
          "Edit Profile",
          style: TextStyle(
            color: Colors.black,
            fontFamily: "Poppins-SemiBold",
            fontWeight: FontWeight.w600,
          ),
        ),
        centerTitle: true,
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 20),
              Center(
                child: Stack(
                  children: [
                    CircleAvatar(
                      radius: 50,
                      backgroundColor: Colors.grey[300],
                      backgroundImage: _imageFile != null
                          ? FileImage(File(_imageFile!.path))
                          : userData['profilePicture'] != null
                          ? NetworkImage(userData['profilePicture']) as ImageProvider<Object>?
                          : null,
                      child: _imageFile == null && userData['profilePicture'] == null
                          ? Icon(
                        Icons.person,
                        size: 50,
                        color: Colors.grey[600],
                      )
                          : null,
                    ),
                    Positioned(
                      bottom: 0,
                      right: 0,
                      child: Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                        ),
                        child: IconButton(
                          icon: Icon(Icons.camera_alt, color: Colors.black),
                          onPressed: _pickImage,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 30),
              _buildTextField("Name", _nameController),
              SizedBox(height: 20),
              _buildTextField("Email", _emailController),
              SizedBox(height: 20),
              _buildDropdown(),
              SizedBox(height: 20),
              _buildTextField("Phone Number", _phoneNumberController),
              SizedBox(height: 40),
              SizedBox(
                width: double.infinity,
                height: 50,
                child: ElevatedButton(
                  onPressed: _updateUserProfile,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.purple,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                  ),
                  child: Text(
                    'Save changes',
                    style: TextStyle(
                      fontSize: 18,
                      fontFamily: 'Poppins-SemiBold',
                      color: Colors.white,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(String label, TextEditingController controller) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: TextStyle(
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
          ),
        ),
        SizedBox(height: 8),
        TextField(
          controller: controller,
          decoration: InputDecoration(
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildDropdown() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          "Country",
          style: TextStyle(
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
          ),
        ),
        SizedBox(height: 8),
        DropdownButtonFormField<String>(
          value: _selectedRegion,
          items: <String>['pakistan', 'usa', 'uk', 'canada', 'australia']
              .map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value),
            );
          }).toList(),
          onChanged: (String? newValue) {
            setState(() {
              _selectedRegion = newValue!;
            });
          },
          decoration: InputDecoration(
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
            ),
          ),
        ),
      ],
    );
  }
}
