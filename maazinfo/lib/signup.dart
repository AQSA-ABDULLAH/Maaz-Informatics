import 'package:flutter/material.dart';
import 'package:maazinfo/login.dart';

void main() {
  runApp(SignUpApp());
}

class SignUpApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SignUpScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class SignUpScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Getting the size of the screen
    var mediaQuery = MediaQuery.of(context);
    var screenHeight = mediaQuery.size.height;
    var screenWidth = mediaQuery.size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Background Circles using Stack and RadialGradient
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

          // Form Content
          Center(
            child: Container(
              padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.1),
              height: screenHeight * 0.5,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "SIGN UP",
                    style: TextStyle(
                      fontSize: screenHeight * 0.04, // Responsive font size
                      fontWeight: FontWeight.bold,
                      color: Colors.purple,
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.05),
                  TextField(
                    decoration: InputDecoration(
                      labelText: "Email ID",
                      labelStyle: TextStyle(color: Colors.grey),
                      border: OutlineInputBorder(),
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.03),
                  TextField(
                    decoration: InputDecoration(
                      labelText: "Password",
                      labelStyle: TextStyle(color: Colors.grey),
                      border: OutlineInputBorder(),
                    ),
                    obscureText: true,
                  ),
                  SizedBox(height: screenHeight * 0.05),
                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginScreen()),
                      );
                    },
                    child: Text(
                      'LOGIN',
                      style: TextStyle(
                        fontSize: screenHeight * 0.025,
                        color: Colors.purple,
                        fontFamily: 'Arial',
                      ),
                    ),
                  ),
                  Text(
                    'if you have an account already',
                    style: TextStyle(
                      fontSize: screenHeight * 0.025,
                      color: Colors.grey,
                      fontFamily: 'Arial',
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
