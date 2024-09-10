import 'package:flutter/material.dart';
import 'package:maazinfo/HomeScreen.dart';

class NicknameScreen extends StatefulWidget {
  @override
  _NicknameScreenState createState() => _NicknameScreenState();
}

class _NicknameScreenState extends State<NicknameScreen> {
  final TextEditingController _nicknameController = TextEditingController();
  bool _isChecked = false; // Checkbox value for terms and conditions

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Background circles with gradient
          Positioned(
            top: -20,
            right: -20,
            child: Container(
              width: 100,
              height: 100,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    Colors.purple.withOpacity(0.6),
                    Colors.blue.withOpacity(0.4),
                  ],
                  center: Alignment.topRight,
                  radius: 1.2,
                ),
              ),
            ),
          ),
          Positioned(
            top: 60,
            right: -30,
            child: Container(
              width: 70,
              height: 70,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    Colors.purple.withOpacity(0.6),
                    Colors.blue.withOpacity(0.4),
                  ],
                  center: Alignment.topCenter,
                  radius: 1.2,
                ),
              ),
            ),
          ),
          // Center content
          Center(
            child: Padding(
              padding: const EdgeInsets.all(32.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Image added here
                  Image.asset(
                    'assets/play.png', // Path to your image
                    width: 150, // Adjust width according to your needs
                    height: 150, // Adjust height according to your needs
                  ),
                  SizedBox(height: 16), // Add spacing between the image and text

                  Text(
                    'Welcome to',
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 20,
                      color: Colors.purple,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'MAAZ INFORMATICS',
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 24,
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'We are excited to have you here. Choose a nickname..',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 18,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: 8),

                  // Gradient border container for TextField
                  Container(
                    padding: EdgeInsets.all(2), // Border width
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Colors.purple, Colors.blue], // Gradient border colors
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(8), // Border radius
                    ),
                    child: Container(
                      padding: EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white, // Background color of the TextField
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: TextField(
                        controller: _nicknameController,
                        decoration: InputDecoration(
                          hintText: 'Choose a nickname...',
                          hintStyle: TextStyle(fontFamily: 'Itim-Regular'),
                          border: InputBorder.none, // Removing the default border
                        ),
                      ),
                    ),
                  ),

                  SizedBox(height: 16),

                  // Checkbox with Terms of Service
                  Row(
                    children: [
                      Checkbox(
                        value: _isChecked,
                        onChanged: (bool? value) {
                          setState(() {
                            _isChecked = value ?? false;
                          });
                        },
                      ),
                      Expanded(
                        child: Text(
                          'I agree to our Terms of Service and Privacy Policy.',
                          style: TextStyle(fontSize: 14, fontFamily: 'Itim-Regular'),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 32),

                  // Continue Button
                  ElevatedButton(
                    onPressed: () {
                      if (_nicknameController.text.isNotEmpty && _isChecked) {
                        // Navigate to DashboardScreen if nickname is entered and checkbox is checked
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => DashboardScreen(
                              nickname: _nicknameController.text,
                            ),
                          ),
                        );
                      } else if (!_isChecked) {
                        // Show error if checkbox is not checked
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text(
                              'Please agree to the Terms of Service',
                              style: TextStyle(fontFamily: 'Itim-Regular'),
                            ),
                          ),
                        );
                      } else {
                        // Show error if nickname is not entered
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text(
                              'Please enter a nickname',
                              style: TextStyle(fontFamily: 'Itim-Regular'),
                            ),
                          ),
                        );
                      }
                    },
                    child: Text(
                      'Continue',
                      style: TextStyle(fontFamily: 'Itim-Regular'),
                    ),
                    style: ElevatedButton.styleFrom(
                      padding: EdgeInsets.symmetric(
                        horizontal: 50,
                        vertical: 15,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
