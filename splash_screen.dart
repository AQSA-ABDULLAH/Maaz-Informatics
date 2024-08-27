import 'package:flutter/material.dart';

import 'nickname.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white, // Background color of the splash screen
      body: Center(
        child: Stack(
          children: [
            // Background 1st circle with gradient
            Positioned(
              top: -10,
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
                    center: Alignment.topCenter, // Purple at the top
                    radius: 1.2,
                  ),
                ),
              ),
            ),
            // Second circle with gradient
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
                    center: Alignment.topCenter, // Purple at the top
                    radius: 1.2,
                  ),
                ),
              ),
            ),
            // Main content
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Image.asset(
                    'assets/maaz-logo.png', // Your logo asset path
                    height: 100,
                  ),
                  SizedBox(height: 20), // Adds spacing between the logo and the text
                  Column(
                    children: [
                      Text.rich(
                        TextSpan(
                          children: [
                            TextSpan(
                              text: "Hi I'am ",
                              style: TextStyle(
                                fontSize: 16,
                                color: Colors.grey,
                              ),
                            ),
                            TextSpan(
                              text: "MAAZ INFORMATICS",
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                                color: Colors.purple,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Text(
                        "JOURNEY TO A HEALTHIER YOU!",
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 120), // Adds spacing between the text and the button
                  Container(
                    width: 40, // Circle size
                    height: 40,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Colors.blue, // Circle color
                    ),
                    child: IconButton(
                      icon: Icon(Icons.arrow_forward, color: Colors.white), // White arrow
                      onPressed: () {
                        // Navigate to NicknameScreen when the arrow is pressed
                        Navigator.of(context).pushReplacement(
                          MaterialPageRoute(builder: (context) => NicknameScreen()),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
