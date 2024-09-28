import 'package:flutter/material.dart';
import 'package:maazinfo/contactus.dart';
import 'package:maazinfo/dashboard.dart';
import 'package:maazinfo/editprofile.dart';
import 'package:maazinfo/email.dart';
import 'package:maazinfo/login.dart';
import 'package:maazinfo/nickname.dart';
import 'package:maazinfo/profile.dart';
import 'package:maazinfo/selfcare.dart';
import 'package:maazinfo/settings.dart';
import 'package:maazinfo/stack.dart';

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

    // Initialize animationcntroller
    _controller = AnimationController(
      duration: Duration(seconds: 3),
      vsync: this,
    );

    //  fade-in animation
    _controller.forward();

    // Set opacity to 1.0 after the animation starts
    Future.delayed(Duration(milliseconds: 500), () {
      setState(() {
        _opacity = 1.0;
      });
    });

    // Navigate to Login screen after 3 seconds
    Future.delayed(Duration(seconds: 3), () {
      Navigator.of(context).pushReplacement(
         //MaterialPageRoute(builder: (context) => EmailScreen (email: '',)),
          MaterialPageRoute(builder: (context) =>LoginScreen()),
         //MaterialPageRoute(builder: (context) =>DashScreen(nickname: '',)),
       // MaterialPageRoute(builder: (context) =>NicknameScreen()),

        //MaterialPageRoute(builder: (context) => SelfCareScreen()),
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
      backgroundColor: Colors.white,
      body: Center(
        child: Stack(
          children: [
            CustomStackWidget(),
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  AnimatedOpacity(
                    opacity: _opacity,
                    duration: Duration(seconds: 2),
                    child: Image.asset(
                      'assets/splash.png',
                      height: 100,
                    ),
                  ),
                  SizedBox(height:35),
                  Column(
                    children: [
                      Text.rich(
                        TextSpan(
                          children: [
                            TextSpan(
                              text: "Hi I'am ",
                              style: TextStyle(
                                fontFamily: 'Itim-Regular',
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                              ),
                            ),
                            TextSpan(
                              text: "MAAZ INFORMATICS",
                              style: TextStyle(
                                fontFamily: 'Itim-Regular',
                                fontSize: 20,
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
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 100),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
