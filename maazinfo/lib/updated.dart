import 'package:flutter/material.dart';
import 'package:maazinfo/login.dart';
import 'package:maazinfo/stack.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SuccessScreen(),
    );
  }
}

class SuccessScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          CustomStackWidget(),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Title: Password Reset
                Text(
                  'Password Reset',
                  style: TextStyle(
                    fontSize: 24,
                    fontFamily: 'Poppins-SemiBold',
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'Your Password has been successfully\nreset',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 16,
                    fontFamily: 'Poppins-SemiBold',
                    color: Colors.purple,
                  ),
                ),
                SizedBox(height: 30),

                // Success icon
                Container(
                  width: 100,
                  height: 100,
                  child: Image.asset('assets/verified.png'),
                ),
                SizedBox(height: 30),

                // Next button
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => LoginScreen(),
                      ),
                    );// Action for Next button
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.purple,
                    padding:
                    EdgeInsets.symmetric(horizontal: 40, vertical: 15),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30.0),
                    ),
                  ),
                  child: Text(
                    'continue',
                    style: TextStyle(
                      fontSize: 18,
                      fontFamily: 'Poppins-SemiBold',
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
