import 'package:flutter/material.dart';
import 'package:maazinfo/reset%20password.dart';
import 'package:maazinfo/stack.dart';

class VerificationScreen extends StatefulWidget {
  final String email;

  VerificationScreen({required this.email});

  @override
  _VerificationScreenState createState() => _VerificationScreenState();
}

class _VerificationScreenState extends State<VerificationScreen> {
  final _otpControllers = List.generate(4, (_) => TextEditingController());

  @override
  void dispose() {
    for (var controller in _otpControllers) {
      controller.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    var mediaQuery = MediaQuery.of(context);
    var screenHeight = mediaQuery.size.height;
    var screenWidth = mediaQuery.size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          CustomStackWidget(),

          // Back arrow on top-left
          Positioned(
            top: screenHeight * 0.1,
            left: screenWidth * 0.05,
            child: IconButton(
              icon: Icon(Icons.arrow_back, color: Colors.black),
              onPressed: () {
                Navigator.pop(context);
              },
            ),
          ),

          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.1),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Check your Email",
                    style: TextStyle(
                      fontFamily: "Poppins-SemiBold",
                      fontSize: screenHeight * 0.03,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.03),

                  // Subtitle: "Enter the 4 digit code..."
                  Text(
                    "Enter the 4 digit code sent to your email",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: "Poppins-SemiBold",
                      fontSize: screenHeight * 0.025,
                      color: Colors.purple,
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.06),

                  // 4-digit OTP input boxes
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: List.generate(4, (index) {
                      return otpBox(
                        controller: _otpControllers[index],
                        screenHeight: screenHeight,
                        screenWidth: screenWidth,
                      );
                    }),
                  ),
                  SizedBox(height: screenHeight * 0.08),

                  // Continue Button
                  ElevatedButton(
                    onPressed: () {
                      // Collect OTP values
                      String otp = _otpControllers.map((controller) => controller.text).join();
                      print("Entered OTP: $otp");

                      // Navigate to ResetPasswordScreen, pass both email and otp
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => ResetPasswordScreen(
                            email: widget.email,
                            otp: otp,
                          ),
                        ),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.purple,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30),
                      ),
                      padding: EdgeInsets.symmetric(
                        vertical: screenHeight * 0.02,
                        horizontal: screenWidth * 0.1,
                      ),
                    ),
                    child: Text(
                      "Continue",
                      style: TextStyle(
                        fontSize: screenHeight * 0.025,
                        color: Colors.white,
                        fontFamily: 'Poppins-SemiBold',
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

  // Function  create OTP box
  Widget otpBox({required TextEditingController controller, required double screenHeight, required double screenWidth}) {
    return Container(
      width: screenWidth * 0.15,
      height: screenHeight * 0.08,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(8.0),
        border: Border.all(
          width: 2.0,
          color: Colors.transparent,
        ),
        gradient: LinearGradient(
          colors: [Colors.blue, Colors.purple],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(2.0),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(6.0),
          ),
          child: Center(
            child: TextField(
              controller: controller,
              textAlign: TextAlign.center,
              keyboardType: TextInputType.number,
              maxLength: 1,
              style: TextStyle(
                fontSize: screenHeight * 0.03,
                fontWeight: FontWeight.bold,
              ),
              decoration: InputDecoration(
                counterText: "", // Remove the character counter
                border: InputBorder.none,
              ),
              onChanged: (value) {
                // Move focus to next field if value is entered
                if (value.length == 1 && controller != _otpControllers.last) {
                  FocusScope.of(context).nextFocus();
                }
              },
            ),
          ),
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
      home: VerificationScreen(email: "email"),
    );
  }
}
