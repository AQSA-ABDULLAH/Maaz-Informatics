import 'package:flutter/material.dart';
import 'package:maazinfo/login.dart';
import 'package:maazinfo/signup.dart';

class TherapistScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(''),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: Stack(
        children: [
          // Background gradient circles
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
          // Main content of the screen
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'THERAPIST',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.purple,
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'WELCOME TO HAVEN!',
                  style: TextStyle(fontSize: 24),
                ),
                SizedBox(height: 20),
                Image.asset(
                  'assets/couch.jpg', // Replace with your image path
                  height: 100,
                ),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {
                    // Navigate to LoginScreen when the button is pressed
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (context) => SignUpApp()),
                    );
                  },
                  child: Text('Therapy'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: TherapistScreen(),
  ));
}
