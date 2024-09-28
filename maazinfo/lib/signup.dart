import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:maazinfo/email.dart';
import 'package:maazinfo/stack.dart';
import 'dart:convert';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:maazinfo/url.dart';
import 'package:maazinfo/validation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SignUpApp extends StatefulWidget {
  final String nickname;

  SignUpApp({required this.nickname});

  @override
  _SignUpAppState createState() => _SignUpAppState();
}

class _SignUpAppState extends State<SignUpApp> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController confirmPasswordController = TextEditingController();
  final TextEditingController countryController = TextEditingController();
  final _formKey = GlobalKey<FormState>();
  bool isLoading = false;

  // State variables for toggling password visibility
  bool _isPasswordVisible = false;
  bool _isConfirmPasswordVisible = false;

  Future<void> signUpUser() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    final String email = emailController.text.trim();
    final String password = passwordController.text.trim();
    final String cpassword = confirmPasswordController.text.trim();
    final String country = countryController.text.trim();
    final String nickname = widget.nickname;

    setState(() {
      isLoading = true;
    });

    final Map<String, dynamic> dataToSend = {
      'email': email,
      'password': password,
      'confirmPassword': cpassword,
      'country': country,
      'userName': nickname,
    };

    try {
      final response = await http.post(
        Uri.parse('$baseUrl/user_signUp'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(dataToSend),
      );

      final responseData = jsonDecode(response.body);

      print("Status Code: ${response.statusCode}");
      print("Response Data: ${response.body}");

      if (response.statusCode == 201) {
        final String token = responseData['token'];

        // Store the token
        SharedPreferences prefs = await SharedPreferences.getInstance();
        await prefs.setString('token', token);

        // Decode the token to get the user ID
        final decodedToken = JwtDecoder.decode(token);
        final String userId = decodedToken['userId'];

        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => EmailScreen(
              email: email,
              userId: userId,
            ),
          ),
        );
      } else {
        String message = responseData['message'] ?? 'Signup failed';
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(message)),
        );
        print("Error: $message");
      }
    } catch (error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('An error occurred. Please try again later.')),
      );
      print("Error occurred: $error");
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    var mediaQuery = MediaQuery.of(context);
    var screenHeight = mediaQuery.size.height;
    var screenWidth = mediaQuery.size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: LayoutBuilder(
        builder: (context, constraints) {
          return Stack(
            children: [
              CustomStackWidget(),
              Center(
                child: SingleChildScrollView(
                  padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.1),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.asset(
                          'assets/heart.png',
                          width: screenWidth * 0.5,
                          height: screenHeight * 0.25,
                        ),
                        SizedBox(height: screenHeight * 0.03),
                        TextFormField(
                          controller: emailController,
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          decoration: InputDecoration(
                            prefixIcon: Icon(Icons.email, color: Colors.grey),
                            labelText: "Enter your Email",
                            labelStyle: TextStyle(
                              fontFamily: 'Poppins-SemiBold',
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                              borderSide: BorderSide(color: Colors.purple),
                            ),
                          ),
                          validator: (value) => validateEmail(value),
                        ),
                        SizedBox(height: screenHeight * 0.02),
                        TextFormField(
                          controller: passwordController,
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          obscureText: !_isPasswordVisible, // Toggle obscure text based on visibility
                          decoration: InputDecoration(
                            prefixIcon: Icon(Icons.lock, color: Colors.grey),
                            labelText: "Enter your password",
                            labelStyle: TextStyle(
                              fontFamily: 'Poppins-SemiBold',
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                              borderSide: BorderSide(color: Colors.purple),
                            ),
                            suffixIcon: IconButton(
                              icon: Icon(
                                _isPasswordVisible ? Icons.visibility : Icons.visibility_off,
                                color: Colors.grey,
                              ),
                              onPressed: () {
                                setState(() {
                                  _isPasswordVisible = !_isPasswordVisible;
                                });
                              },
                            ),
                          ),
                          validator: (value) => validatePassword(value),
                        ),
                        SizedBox(height: screenHeight * 0.02),
                        TextFormField(
                          controller: confirmPasswordController,
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          obscureText: !_isConfirmPasswordVisible,
                          decoration: InputDecoration(
                            prefixIcon: Icon(Icons.lock, color: Colors.grey),
                            labelText: "Confirm your password",
                            labelStyle: TextStyle(
                              fontFamily: 'Poppins-SemiBold',
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                              borderSide: BorderSide(color: Colors.purple),
                            ),
                            suffixIcon: IconButton(
                              icon: Icon(
                                _isConfirmPasswordVisible ? Icons.visibility : Icons.visibility_off,
                                color: Colors.grey,
                              ),
                              onPressed: () {
                                setState(() {
                                  _isConfirmPasswordVisible = !_isConfirmPasswordVisible;
                                });
                              },
                            ),
                          ),
                          validator: (value) =>
                              validateConfirmPassword(passwordController.text, value),
                        ),
                        SizedBox(height: screenHeight * 0.02),
                        TextFormField(
                          controller: countryController,
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          decoration: InputDecoration(
                            prefixIcon: Icon(Icons.flag, color: Colors.grey),
                            labelText: "Enter your Country",
                            labelStyle: TextStyle(
                              fontFamily: 'Poppins-SemiBold',
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30.0),
                              borderSide: BorderSide(color: Colors.purple),
                            ),
                          ),
                          validator: (value) => validateCountry(value),
                        ),
                        SizedBox(height: screenHeight * 0.03),
                        isLoading
                            ? CircularProgressIndicator()
                            : ElevatedButton(
                          onPressed: signUpUser,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.purple,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(25),
                            ),
                            padding: EdgeInsets.symmetric(
                              vertical: screenHeight * 0.01,
                              horizontal: screenWidth * 0.1,
                            ),
                          ),
                          child: Text(
                            "Sign Up",
                            style: TextStyle(
                              fontFamily: 'Poppins-SemiBold',
                              fontSize: screenHeight * 0.025,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        SizedBox(height: screenHeight * 0.03),
                        Wrap(
                          alignment: WrapAlignment.center,
                          children: [
                            Text(
                              "Already have an account? ",
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: screenHeight * 0.02,
                                fontFamily: 'Poppins-SemiBold',
                              ),
                            ),
                            GestureDetector(
                              onTap: () {
                                Navigator.pop(context);
                              },
                              child: Text(
                                "LOGIN",
                                style: TextStyle(
                                  fontSize: screenHeight * 0.025,
                                  color: Colors.blue,
                                  fontWeight: FontWeight.bold,
                                  fontFamily: 'Poppins-SemiBold',
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
