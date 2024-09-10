import 'package:flutter/material.dart';
import 'package:maazinfo/HomeScreen.dart';
import 'package:maazinfo/nickname.dart';
import 'package:maazinfo/signup.dart'; // Assuming you have a signup.dart file

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var mediaQuery = MediaQuery.of(context);
    var screenHeight = mediaQuery.size.height;
    var screenWidth = mediaQuery.size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Positioned circles for decoration
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

          Center(
            child: SingleChildScrollView(
              padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.1),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Add the top image here
                  Image.asset(
                    'assets/login.png', // Path to the image you added
                    width: screenWidth * 0.5,
                    height: screenHeight * 0.25,
                  ),
                  SizedBox(height: screenHeight * 0.03),

                  // Text for "Email"
                  TextField(
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.email),
                      labelText: "Email",
                      labelStyle: TextStyle(
                        color: Colors.black,
                        fontFamily: 'Itim-Regular',
                      ),
                      border: OutlineInputBorder(),
                    ),
                  ),

                  SizedBox(height: screenHeight * 0.02),

                  // Text for "Password"
                  TextField(
                    obscureText: true,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.lock),
                      labelText: "Password",
                      labelStyle: TextStyle(
                        color: Colors.black,
                        fontFamily: 'Itim-Regular',
                      ),
                      border: OutlineInputBorder(),
                    ),
                  ),

                  // Forgot Password link
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton(
                      onPressed: () {
                        // Handle Forgot Password press
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => ForgotPasswordScreen(), // Create this screen
                          ),
                        );
                      },
                      child: Text(
                        "Forgot Password?",
                        style: TextStyle(
                          color: Colors.grey,
                          fontFamily: 'Itim-Regular',
                        ),
                      ),
                    ),
                  ),

                  SizedBox(height: screenHeight * 0.03),

                  // Login Button
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to DashboardScreen
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => DashboardScreen(nickname: '',),
                        ),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue, // Background color similar to the sign-up button
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(25), // Rounded corners
                      ),
                      padding: EdgeInsets.symmetric(
                        vertical: screenHeight * 0.02, // Vertical padding
                        horizontal: screenWidth * 0.3, // Horizontal padding to expand button
                      ),
                    ),
                    child: Text(
                      "Login",
                      style: TextStyle(
                        fontSize: screenHeight * 0.025, // Adjust font size
                        fontFamily: 'Itim-Regular',
                        color: Colors.white, // Font color white to match sign-up button
                      ),
                    ),
                  ),

                  SizedBox(height: screenHeight * 0.03),

                  // Sign Up Section
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Don't have an account? ",
                        style: TextStyle(
                          fontFamily: 'Itim-Regular',
                          color: Colors.black,
                          fontSize: screenHeight * 0.025,
                        ),
                      ),
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => SignUpApp(),
                            ),
                          );
                        },
                        child: Text(
                          "SIGN UP",
                          style: TextStyle(
                            fontFamily: 'Itim-Regular',
                            fontSize: screenHeight * 0.025,
                            color: Colors.blue,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
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

// Placeholder for Forgot Password Screen
class ForgotPasswordScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Forgot Password')),
      body: Center(
        child: Text(
          'Forgot Password Screen',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LoginScreen(),
    );
  }
}
