import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:maazinfo/chat.dart';
import 'package:maazinfo/contactus.dart';
import 'package:maazinfo/nav.dart';
import 'package:maazinfo/selfcare.dart';
import 'package:maazinfo/settings.dart';
import 'package:maazinfo/therapist.dart';
import 'package:maazinfo/url.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'dart:convert';

import 'dashboard.dart';

class ProfileScreen extends StatefulWidget {
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  String _username = '';
  String _country = '';
  String _profileImageUrl = '';
  bool isLoading = false;
  String userId = "";
  int _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _fetchUserData();
  }

  Future<void> _fetchUserData() async {
    setState(() {
      isLoading = true;
    });

    try {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      String? token = prefs.getString('token');

      if (token != null) {
        // Decode the token to get the userId
        Map<String, dynamic> decodedToken = JwtDecoder.decode(token);
        userId = decodedToken['userId'];

        // Fetch user data from the server
        final response = await http.get(
          Uri.parse('$baseUrl/get-user-profile/$userId'),
          headers: {'Authorization': 'Bearer $token'},
        );

        // Printresponse for debugging
        print("Response Status Code: ${response.statusCode}");
        print("Response Body: ${response.body}");

        if (response.statusCode == 200) {
          var userData = jsonDecode(response.body)['data'];

          // get the profilePicture URL from the userData
          String profileImageUrl = userData['profilePicture'] != null
              ? userData['profilePicture']
              : '';

          setState(() {
            _username = userData['userName'] ?? '';
            _country = userData['country'] ?? '';
            _profileImageUrl = profileImageUrl;

            // // Debugging: Print the fetched image URL
            // print('Profile Image URL: $_profileImageUrl');
          });
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Failed to fetch user data')),
          );
        }
      }
    } catch (error) {
      // Error handling
      print("Error fetching user data: $error");
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error fetching user data')),
      );
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }


  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    // Navigation logic
    switch (index) {
      case 0:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => DashScreen()),
        );
        break;
      case 1:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => SelfCareScreen()),
        );
        break;
      case 2:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => TherapistScreen()),
        );
        break;
      case 3:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => ProfileScreen()),
        );
        break;
      default:
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Navigation for this item is not yet implemented')),
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
        child: Column(
          children: [
            // Profilimage & info
            Container(
              height: MediaQuery.of(context).size.height * 0.3,
              child: Stack(
                children: [
                  Container(
                    height: 200,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(20),
                        bottomRight: Radius.circular(20),
                      ),
                    ),
                  ),
                  Positioned(
                    top: 90,
                    left: 0,
                    right: 0,
                    child: Center(
                      child: CircleAvatar(
                        radius: 60,
                        backgroundColor: Colors.grey[300],
                        child: ClipOval(
                          child: _profileImageUrl.isNotEmpty
                              ? Image.network(
                            _profileImageUrl,
                            fit: BoxFit.cover,
                            width: 120,
                            height: 120,
                            errorBuilder: (context, error, stackTrace) {
                              // Error handling for image loading
                              return Icon(Icons.person, size: 60, color: Colors.grey);
                            },
                          )
                              : Icon(Icons.person, size: 60, color: Colors.grey),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
            // Username and Country
            Container(
              height: MediaQuery.of(context).size.height * 0.2,
              child: Stack(
                children: [
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.blue,
                      borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(20),
                        bottomRight: Radius.circular(20),
                      ),
                    ),
                  ),
                  Positioned(
                    top: 30,
                    left: 0,
                    right: 0,
                    child: Center(
                      child: Column(
                        children: [
                          Text(
                            _username,
                            style: TextStyle(
                              fontSize: 26,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                          Text(
                            _country,
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 24,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
            // Inbox, Notification Section
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Card(
                color: Colors.purple,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          _buildIconCard(
                            Icons.inbox,
                            'Inbox',
                            Colors.white,
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => ChatScreen()),
                              );
                            },
                          ),
                          _buildIconCard(
                            Icons.notifications,
                            'Notification',
                            Colors.white,
                            notificationCount: 1,
                            onTap: () {
                              // Handle Notification tap event
                            },
                          ),
                        ],
                      ),
                      SizedBox(height: 20),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          _buildIconCard(
                            Icons.email,
                            'Contact Us',
                            Colors.white,
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) =>
                                        ContactUsPage()),
                              );
                            },
                          ),
                          _buildIconCard(
                            Icons.settings,
                            'Settings',
                            Colors.white,
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) =>
                                        SettingsScreen()),
                              );
                            },
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: CustomBottomNavBar(
        selectedIndex: _selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }

  Widget _buildIconCard(
      IconData icon,
      String label,
      Color iconColor, {
        int notificationCount = 0,
        void Function()? onTap,
      }) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          Stack(
            children: [
              Icon(
                icon,
                size: 40,
                color: iconColor,
              ),
              if (notificationCount > 0)
                Positioned(
                  right: 0,
                  child: Container(
                    padding: EdgeInsets.all(4),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Colors.red,
                    ),
                    child: Text(
                      '$notificationCount',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                      ),
                    ),
                  ),
                ),
            ],
          ),
          SizedBox(height: 8),
          Text(
            label,
            style: TextStyle(
              color: iconColor,
              fontSize: 16,
            ),
          ),
        ],
      ),
    );
  }
}
