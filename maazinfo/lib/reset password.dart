import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:maazinfo/updated.dart';
import 'package:maazinfo/url.dart';
import 'package:maazinfo/validation.dart';

class ResetPasswordScreen extends StatefulWidget {
  final String email;
  final String otp;

  ResetPasswordScreen({required this.email, required this.otp});

  @override
  _ResetPasswordScreenState createState() => _ResetPasswordScreenState();
}

class _ResetPasswordScreenState extends State<ResetPasswordScreen> {
  TextEditingController passwordController = TextEditingController();
  TextEditingController confirmPasswordController = TextEditingController();

  bool otpVerified = false;
  bool _obscurePassword = true;
  bool _obscureConfirmPassword = true;

  // Function to verify OTP
  Future<void> verifyOTP() async {
    final response = await http.post(
      Uri.parse('$baseUrl/forget-password'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': widget.email,
        'otp': widget.otp,
      }),
    );

    if (response.statusCode == 200) {
      setState(() {
        otpVerified = true;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('OTP verified successfully!')),
      );
    } else {
      print('OTP verification failed: ${response.body}');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to verify OTP: ${response.body}')),
      );
    }
  }

  // Function to updatepass
  Future<void> updatePassword() async {
    if (passwordController.text != confirmPasswordController.text) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Passwords do not match!')),
      );
      return;
    }

    final response = await http.patch(
      Uri.parse('$baseUrl/update-password'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': widget.email,
        'password': passwordController.text,
        'confirmPassword': confirmPasswordController.text,
      }),
    );

    if (response.statusCode == 200) {
      print('Password updated successfully: ${response.body}');
      print('Password updated successfully: ${passwordController.text}');
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => SuccessScreen(),
        ),
      );
    } else {
      print('Failed to update password: ${response.body}');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to update password')),
      );
    }
  }

  @override
  void initState() {
    super.initState();
        verifyOTP();
  }

  @override
  Widget build(BuildContext context) {
    var screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: 50),
              // Back button
              Align(
                alignment: Alignment.centerLeft,
                child: IconButton(
                  icon: Icon(Icons.arrow_back),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                ),
              ),
              SizedBox(height: 20),
              // Title
              Text(
                'Set a new password',
                style: TextStyle(
                  fontSize: 24,
                  fontFamily: 'Poppins-SemiBold',
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 10),
              // Subtitle
              Text(
                'Create a new password. Ensure it differs from previous ones for security',
                style: TextStyle(
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                  color: Colors.purple,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 30),

              // Password field (disabled if OTP is not verified)
              Container(
                width: screenWidth * 0.9,
                child: TextFormField(
                  controller: passwordController,
                  autovalidateMode: AutovalidateMode.onUserInteraction,
                  obscureText: _obscurePassword,
                  enabled: otpVerified, // Disable input if OTP is not verified
                  decoration: InputDecoration(
                    labelText: 'Enter your new password',
                    labelStyle: TextStyle(
                      color: otpVerified ? Colors.grey : Colors.grey.shade400,
                      fontFamily: 'Poppins-SemiBold',
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(30.0),
                    ),
                    suffixIcon: IconButton(
                      icon: Icon(
                        _obscurePassword ? Icons.visibility_off : Icons.visibility,
                      ),
                      onPressed: () {
                        setState(() {
                          _obscurePassword = !_obscurePassword;
                        });
                      },
                    ),
                  ),
                  validator: (value) => validatePassword(value),
                ),
              ),
              SizedBox(height: 20),

              // Repassword field (disabled if OTP is not verified)
              Container(
                width: screenWidth * 0.9,
                child: TextFormField(
                  controller: confirmPasswordController,
                  obscureText: _obscureConfirmPassword,
                  enabled: otpVerified,
                  autovalidateMode: AutovalidateMode.onUserInteraction,
                  decoration: InputDecoration(
                    labelText: 'Re-enter password',
                    labelStyle: TextStyle(
                      color: otpVerified ? Colors.grey : Colors.grey.shade400,
                      fontFamily: 'Poppins-SemiBold',
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(30.0),
                    ),
                    suffixIcon: IconButton(
                      icon: Icon(
                        _obscureConfirmPassword ? Icons.visibility_off : Icons.visibility,
                      ),
                      onPressed: () {
                        setState(() {
                          _obscureConfirmPassword = !_obscureConfirmPassword;
                        });
                      },
                    ),
                  ),
                  validator: (value) =>
                      validateConfirmPassword(passwordController.text, value),
                ),
              ),
              SizedBox(height: 40),

              // Update button(disabled if OTP not verified)
              ElevatedButton(
                onPressed: otpVerified
                    ? () {
                  updatePassword();
                }
                    : null, // Disable button if OTP is not verified
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.purple,
                  padding: EdgeInsets.symmetric(horizontal: 40, vertical: 15),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30.0),
                  ),
                ),
                child: Text(
                  'Update Password',
                  style: TextStyle(
                    fontFamily: 'Poppins-SemiBold',
                    color: Colors.white,
                    fontSize: 18,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
