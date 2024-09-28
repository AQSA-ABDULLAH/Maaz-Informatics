import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:maazinfo/dashboard.dart';
import 'package:maazinfo/forget%20password.dart';
import 'package:maazinfo/nickname.dart';
import 'package:maazinfo/url.dart';
import 'package:maazinfo/stack.dart';
import 'package:maazinfo/validation.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();
  bool isLoading = false;
  bool _isPasswordVisible = false; // for password visibility

  @override
  void initState() {
    super.initState();
    _checkLoginStatus(); // Check login
  }

  // Function to check  user already logged in
  Future<void> _checkLoginStatus() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? token = prefs.getString('token');

    if (token != null && !JwtDecoder.isExpired(token)) {
      final decodedToken = JwtDecoder.decode(token);
      final String userId = decodedToken['userId']; // userId


      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => DashScreen(),
        ),
      );
    }
  }

  // Function to store token using SharedPreferences
  Future<void> _storeToken(String token) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('token', token); // Store token
  }

  Future<void> loginUser() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    final String email = emailController.text.trim();
    final String password = passwordController.text.trim();

    setState(() {
      isLoading = true;
    });

    try {
      final response = await http.post(
        Uri.parse('$baseUrl/user_signIn'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'email': email,
          'password': password,
        }),
      );

      final responseData = jsonDecode(response.body);

      if (response.statusCode == 200) {
        final String token = responseData['token'];

        final decodedToken = JwtDecoder.decode(token);
        final String userId = decodedToken['userId'];

        // Store token for later
        await _storeToken(token);
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => DashScreen(),
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(responseData['message'] ?? 'Login failed')),
        );
      }
    } catch (error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('An error occurred. Please try again later.')),
      );
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
                          'assets/login.png',
                          width: screenWidth * 0.5,
                          height: constraints.maxHeight * 0.25,
                        ),
                        SizedBox(height: constraints.maxHeight * 0.03),
                        TextFormField(
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
                          ),
                          validator: (value) => validateEmail(value),
                        ),
                        SizedBox(height: constraints.maxHeight * 0.02),
                        TextFormField(
                          controller: passwordController,
                          obscureText: !_isPasswordVisible,
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          decoration: InputDecoration(
                            prefixIcon: Icon(Icons.lock, color: Colors.grey),
                            suffixIcon: IconButton(
                              icon: Icon(
                                _isPasswordVisible
                                    ? Icons.visibility
                                    : Icons.visibility_off,
                                color: Colors.grey,
                              ),
                              onPressed: () {
                                setState(() {
                                  _isPasswordVisible = !_isPasswordVisible;
                                });
                              },
                            ),
                            labelText: "Enter your password",
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
                          ),
                          validator: (value) => validatePassword(value),
                        ),
                        Align(
                          alignment: Alignment.centerRight,
                          child: TextButton(
                            onPressed: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => ForgotPasswordScreen(),
                                ),
                              );
                            },
                            child: Text(
                              "Forgot Password?",
                              style: TextStyle(
                                color: Colors.grey,
                                fontSize: 14,
                                fontFamily: 'Poppins-SemiBold',
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: constraints.maxHeight * 0.03),
                        isLoading
                            ? CircularProgressIndicator()
                            : ElevatedButton(
                          onPressed: loginUser,
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
                            "Login",
                            style: TextStyle(
                              fontFamily: 'Poppins-SemiBold',
                              fontSize: constraints.maxHeight * 0.025,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        SizedBox(height: constraints.maxHeight * 0.03),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Flexible(
                              child: Text(
                                "Don't have an account? ",
                                style: TextStyle(
                                  color: Colors.black,
                                  fontSize: constraints.maxHeight * 0.02,
                                  fontFamily: 'Poppins-SemiBold',
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                            GestureDetector(
                              onTap: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => NicknameScreen(),
                                  ),
                                );
                              },
                              child: Text(
                                "SIGN UP",
                                style: TextStyle(
                                  fontSize: constraints.maxHeight * 0.02,
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
