import 'package:flutter/material.dart';


class TherapistScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 40.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  'THERAPIST',
                  style: TextStyle(
                    fontFamily: 'Itim-Regular',
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.purple,
                  ),
                ),
                SizedBox(height: 8),
                Container(
                  width: 100,
                  height: 2,
                  color: Colors.white,
                ),
                SizedBox(height: 20),
                Text(
                  'WELCOME TO HAVEN!',
                  style: TextStyle(fontSize: 24,fontFamily: 'Itim-Regular'),
                ),
                SizedBox(height: 20),
                Center(
                  child: Image.asset(
                    'assets/couch.jpg', // Replace with your image path
                    height: 100,
                  ),
                ),
                SizedBox(height: 20),
                Center(
                  child: ElevatedButton(
                    onPressed: () {

                    },
                    child: Text('Therapy'),
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

void main() {
  runApp(MaterialApp(
    home: TherapistScreen(),
  ));
}
