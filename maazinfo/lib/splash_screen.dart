import 'package:flutter/material.dart';
import 'package:maazinfo/login.dart';
//import 'package:maazinfo/email.dart';
import 'package:maazinfo/signup.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  double _opacity = 0.0; // Initial opacity value
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();

    // Initialize the AnimationController
    _controller = AnimationController(
      duration: Duration(seconds: 3),
      vsync: this,
    );

    // Start the fade-in animation
    _controller.forward();

    // Set opacity to 1.0 after the animation starts
    Future.delayed(Duration(milliseconds: 500), () {
      setState(() {
        _opacity = 1.0;
      });
    });

    // Navigate to SignUp screen after 3 seconds
    Future.delayed(Duration(seconds: 3), () {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => LoginScreen()),
          //MaterialPageRoute(builder: (context) => EmailScreen()),
      );
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

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
                  AnimatedOpacity(
                    opacity: _opacity,
                    duration: Duration(seconds: 2),
                    child: Image.asset(
                      'assets/maaz-logo.jpg', // Your logo asset path
                      height: 100,
                    ),
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
                                fontFamily: 'Itim-Regular',
                                fontSize: 16,

                                color: Colors.black,
                              ),
                            ),
                            TextSpan(
                              text: "MAAZ INFORMATICS",
                              style: TextStyle(
                                fontFamily: 'Itim-Regular',
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
                          fontFamily: 'Itim-Regular',
                          fontSize: 16,
                          color: Colors.black,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 120), // Adds spacing at the bottom
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
