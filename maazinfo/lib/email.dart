import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:maazinfo/dashboard.dart';
import 'package:maazinfo/stack.dart';
import 'dart:convert';
import 'package:maazinfo/url.dart';

class EmailScreen extends StatelessWidget {
  final String email;
  final String userId;

  // Create list of 4 OTP boxes
  final List<TextEditingController> otpControllers = List.generate(4, (_) => TextEditingController());

  // Create a list of FocusNode
  final List<FocusNode> focusNodes = List.generate(4, (_) => FocusNode());

  EmailScreen({required this.email, required this.userId});  // Updated constructor

  Future<void> verifyOTP(BuildContext context) async {
    // Combine the OTP digits from all controllers into a single string
    final String otpString = otpControllers.map((controller) => controller.text.trim()).join();
    int? otpNumber;

    try {
      otpNumber = int.parse(otpString);  // Pass combined OTP
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid OTP format')),
      );
      return;
    }

    try {
      final response = await http.post(
        Uri.parse('$baseUrl/send-otp'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'email': email,
          'otp': otpNumber,
        }),
      );

      final responseData = jsonDecode(response.body);

      if (response.statusCode == 200) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => DashScreen(),
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(responseData['message'] ?? 'OTP verification failed')),
        );
      }
    } catch (error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('An error occurred during OTP verification')),
      );
    }
  }

  // Function to create the OTP box widget
  Widget otpBox(double screenHeight, double screenWidth, TextEditingController controller, FocusNode focusNode, int index, BuildContext context) {
    return Container(
      width: screenWidth * 0.15,
      height: screenHeight * 0.08,
      decoration: BoxDecoration(
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
          child: TextField(
            controller: controller,
            focusNode: focusNode,
            keyboardType: TextInputType.number,
            textAlign: TextAlign.center,
            maxLength: 1,  //  single digit in box
            decoration: InputDecoration(
              counterText: '', // Hides character counter below the TextField
              border: InputBorder.none,
            ),
            style: TextStyle(fontSize: 20, color: Colors.black),
            onChanged: (value) {
              // Move focus to the next field if a value is entered
              if (value.length == 1 && index < otpControllers.length - 1) {
                FocusScope.of(context).requestFocus(focusNodes[index + 1]);
              }
            },
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          CustomStackWidget(),
          Positioned(
            top: 120,
            left: 20,
            child: IconButton(
              icon: Icon(Icons.arrow_back, color: Colors.black),
              onPressed: () {
                Navigator.pop(context);
              },
            ),
          ),
          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Check your Email",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    "Enter the 4-digit OTP sent to your email",
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.purple,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 40),

                  // Create a Row for OTPbox
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: List.generate(4, (index) {
                      return otpBox(screenHeight, screenWidth, otpControllers[index], focusNodes[index], index, context);
                    }),
                  ),

                  SizedBox(height: 40),

                  ElevatedButton(
                    onPressed: () => verifyOTP(context),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.purple,
                      padding: EdgeInsets.symmetric(horizontal: 80, vertical: 12),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(25),
                      ),
                    ),
                    child: Text(
                      "Continue",
                      style: TextStyle(color: Colors.white, fontSize: 18),
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
