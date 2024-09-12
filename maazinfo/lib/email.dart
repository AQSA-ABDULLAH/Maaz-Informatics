import 'package:flutter/material.dart';
import 'package:maazinfo/login.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: EmailScreen(),
    );
  }
}

class EmailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Gradient Circles
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

          SafeArea(
            child: Center(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 30),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Placeholder for background image (mail icon)
                    Stack(
                      children: [
                        Align(
                          alignment: Alignment.center,
                          child: Opacity(
                            opacity: 0.2,
                            child: Image.network(
                              'assets/maaz-logo.jpg', // Replace with your actual background image URL
                              width: 150,
                              height: 150,
                            ),
                          ),
                        ),
                      ],
                    ),

                    SizedBox(height: 50),

                    // Email TextField
                    TextField(
                      decoration: InputDecoration(
                        labelText: 'Enter Email',
                        labelStyle: TextStyle(
                          color: Colors.purple.shade300,
                          fontSize: 16,
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(
                            color: Colors.purple.shade300,
                            width: 2,
                          ),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(
                            color: Colors.purple.shade500,
                            width: 2,
                          ),
                        ),
                      ),
                    ),

                    SizedBox(height: 30),

                    // Continue Button
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => LoginScreen(),
                          ),
                        );
                        // Handle button press
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.blue, // Background color
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        padding: EdgeInsets.symmetric(
                            horizontal: 50, vertical: 15),
                      ),
                      child: Text(
                        'Continue',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
