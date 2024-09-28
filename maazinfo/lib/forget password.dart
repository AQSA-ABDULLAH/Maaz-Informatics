import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:maazinfo/otp.dart';
import 'dart:convert';
import 'package:maazinfo/stack.dart';
import 'package:maazinfo/url.dart';
import 'package:maazinfo/validation.dart';

class ForgotPasswordScreen extends StatefulWidget {
  @override
  _ForgotPasswordScreenState createState() => _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends State<ForgotPasswordScreen> {
  final TextEditingController emailController = TextEditingController();

  Future<void> sendOtp(String email) async {
    final response = await http.post(
      Uri.parse('$baseUrl/forget-password'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email}),
    );

    if (response.statusCode == 200) {
      // Navigate to the verification screen and pass the email
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => VerificationScreen(email: email), // Pass email
        ),
      );
    } else {
      // Handle error response
      final responseBody = jsonDecode(response.body);
      final errorMessage = responseBody['message'] ?? 'Failed to send OTP.';
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text('Error'),
          content: Text(errorMessage),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('OK'),
            ),
          ],
        ),
      );
    }
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
          Positioned(
            top: 120,
            left: 20,
            child: IconButton(
              icon: Icon(Icons.arrow_back, color: Colors.black),
              onPressed: () {
                Navigator.pop(context); // Back button
              },
            ),
          ),
          Center(
            child: SingleChildScrollView(
              padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.1),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "Forgot Password",
                    style: TextStyle(
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: screenHeight * 0.03,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.01),
                  Text(
                    "Please Enter your email to reset the\npassword",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: screenHeight * 0.03,
                      color: Colors.purple,
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.03),
                  Align(
                    alignment: Alignment.center,
                    child: Text(
                      "Your Email",
                      style: TextStyle(
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: screenHeight * 0.03,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.04),
                  Container(
                    child: TextFormField(
                      controller: emailController,
                      autovalidateMode: AutovalidateMode.onUserInteraction,
                      decoration: InputDecoration(
                        prefixIcon: Icon(Icons.email, color: Colors.grey),
                        labelText: "Enter your Email",
                        labelStyle: TextStyle(
                          fontFamily: 'Poppins-SemiBold',
                          fontWeight: FontWeight.bold,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide(color: Colors.purple),
                        ),
                        errorBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide(
                            color: Colors.red,
                          ),
                        ),
                        focusedErrorBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide(
                            color: Colors.red,
                          ),
                        ),
                      ),
                      validator: (value) => validateEmail(value),
                    ),

                  ),
                  SizedBox(height: screenHeight * 0.05),
                  ElevatedButton(
                    onPressed: () {
                      final email = emailController.text.trim();
                      if (email.isNotEmpty) {
                        sendOtp(email); // Pass email to sendOtp function
                      } else {
                        // Show error if email field is empty
                        showDialog(
                          context: context,
                          builder: (context) => AlertDialog(
                            title: Text('Error'),
                            content: Text('Please enter your email.'),
                            actions: [
                              TextButton(
                                onPressed: () => Navigator.pop(context),
                                child: Text('OK'),
                              ),
                            ],
                          ),
                        );
                      }
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.purple,
                      padding: EdgeInsets.symmetric(
                        vertical: screenHeight * 0.01,
                        horizontal: screenWidth * 0.1,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(25),
                      ),
                    ),
                    child: Text(
                      "Reset Password",
                      style: TextStyle(
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: screenHeight * 0.023,
                        color: Colors.white,
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
}
