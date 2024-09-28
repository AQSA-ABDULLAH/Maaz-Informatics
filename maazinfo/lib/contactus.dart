import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ContactUsPage extends StatefulWidget {
  @override
  _ContactUsPageState createState() => _ContactUsPageState();
}

class _ContactUsPageState extends State<ContactUsPage> {
  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneNumberController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();

  //  send data to the backend
  Future<void> _sendMessage() async {
    final String apiUrl = 'http://localhost:5000/api/contactus/send-message'; // Change to your actual backend URL

    // collect data
    final Map<String, dynamic> data = {
      'name': '${_firstNameController.text} ${_lastNameController.text}',
      'email': _emailController.text,
      'phoneno': _phoneNumberController.text,
      'message': _messageController.text,
      'country': 'YourCountry', // Add a country field, or modify this part as needed
    };

    try {
      // send pOST request
      final response = await http.post(
        Uri.parse(apiUrl),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(data),
      );

      // check response
      if (response.statusCode == 201) {
        final responseData = jsonDecode(response.body);
        print('Message saved: ${responseData['message']}');
        _showSuccessDialog('Message sent successfully!');
      } else {
        print('Failed to send message: ${response.body}');
        _showErrorDialog('Failed to send message. Please try again.');
      }
    } catch (e) {
      print('Error: $e');
      _showErrorDialog('An error occurred. Please try again.');
    }
  }

  // Success dialog
  void _showSuccessDialog(String message) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Success', style: TextStyle(fontWeight: FontWeight.bold)),
        content: Text(message, style: TextStyle(fontWeight: FontWeight.bold)),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text('OK', style: TextStyle(fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }

  // Error dialog
  void _showErrorDialog(String message) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Error', style: TextStyle(fontWeight: FontWeight.bold)),
        content: Text(message, style: TextStyle(fontWeight: FontWeight.bold)),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text('OK', style: TextStyle(fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final TextStyle boldTextStyle = TextStyle(fontWeight: FontWeight.bold);

    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Header Section with Back Button and Title
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                      icon: Icon(Icons.arrow_back, color: Colors.purple),
                      onPressed: () {
                        Navigator.pop(context);
                      },
                    ),
                    Text(
                      'Contact Us',
                      style: boldTextStyle.copyWith(
                        fontSize: 20,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(width: 48), // Placeholder for alignment
                  ],
                ),
                SizedBox(height: 20),

                // Contact Information Section
                Card(
                  color: Colors.purple[50],
                  elevation: 4,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      children: [
                        Text(
                          'Contact Information',
                          style: boldTextStyle.copyWith(fontSize: 18),
                        ),
                        SizedBox(height: 10),
                        Row(
                          children: [
                            Icon(Icons.phone, color: Colors.purple),
                            SizedBox(width: 10),
                            Text('+012 3456 789', style: boldTextStyle),
                          ],
                        ),
                        SizedBox(height: 10),
                        Row(
                          children: [
                            Icon(Icons.email, color: Colors.purple),
                            SizedBox(width: 10),
                            Text('maazinformatics@gmail.com', style: boldTextStyle),
                          ],
                        ),
                        SizedBox(height: 10),
                        Row(
                          children: [
                            Icon(Icons.location_on, color: Colors.purple),
                            SizedBox(width: 10),
                            Expanded(
                              child: Text(
                                '132 Dartmouth Street Boston, Massachusetts 02156 United States',
                                style: boldTextStyle,
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 20),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(Icons.facebook, color: Colors.purple),
                            SizedBox(width: 10),
                            Icon(Icons.chat, color: Colors.purple),
                            SizedBox(width: 10),
                            Icon(Icons.facebook, color: Colors.purple), // Example of Twitter icon
                            SizedBox(width: 10),
                            Icon(Icons.chat, color: Colors.purple), // Example of Instagram icon
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 20),

                // Form Section
                TextField(
                  controller: _firstNameController,
                  decoration: InputDecoration(
                    labelText: 'First Name',
                    border: OutlineInputBorder(),
                  ),
                  style: boldTextStyle,
                ),
                SizedBox(height: 10),
                TextField(
                  controller: _lastNameController,
                  decoration: InputDecoration(
                    labelText: 'Last Name',
                    border: OutlineInputBorder(),
                  ),
                  style: boldTextStyle,
                ),
                SizedBox(height: 10),
                TextField(
                  controller: _emailController,
                  decoration: InputDecoration(
                    labelText: 'Email',
                    border: OutlineInputBorder(),
                  ),
                  style: boldTextStyle,
                ),
                SizedBox(height: 10),
                TextField(
                  controller: _phoneNumberController,
                  decoration: InputDecoration(
                    labelText: 'Phone Number',
                    border: OutlineInputBorder(),
                  ),
                  style: boldTextStyle,
                ),
                SizedBox(height: 10),
                TextField(
                  controller: _messageController,
                  maxLines: 5,
                  decoration: InputDecoration(
                    labelText: 'Write your message...',
                    border: OutlineInputBorder(),
                  ),
                  style: boldTextStyle,
                ),
                SizedBox(height: 20),

                // Submit Button
                ElevatedButton(
                  onPressed: _sendMessage,
                  child: Text('Send Message', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.purple, // Button color
                    padding: EdgeInsets.symmetric(vertical: 15),
                  ),
                ),
                SizedBox(height: 20),

                // Footer Section
                Container(
                  color: Colors.blue,
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    children: [
                      Text(
                        'MAAZ INFORMATICS',
                        style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 10),
                      Row(
                        children: [
                          Icon(Icons.phone, color: Colors.white),
                          SizedBox(width: 10),
                          Text('+012 3456 789', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        ],
                      ),
                      SizedBox(height: 10),
                      Row(
                        children: [
                          Icon(Icons.email, color: Colors.white),
                          SizedBox(width: 10),
                          Text('maazinformatics@gmail.com', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        ],
                      ),
                      SizedBox(height: 10),
                      Row(
                        children: [
                          Icon(Icons.location_on, color: Colors.white),
                          SizedBox(width: 10),
                          Expanded(
                            child: Text(
                              '132 Dartmouth Street Boston, Massachusetts 02156 United States',
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Text('Privacy Policy', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                          Text('Terms of Use', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                          Text('Refund Policy', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        ],
                      ),
                      SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () {

                        },
                        child: Text('Join Our Newsletter', style: TextStyle(fontWeight: FontWeight.bold)),
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.blue,
                          backgroundColor: Colors.white, // Text color
                          padding: EdgeInsets.symmetric(vertical: 15),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
