import 'package:flutter/material.dart';
import 'package:maazinfo/login.dart';
import 'package:maazinfo/nickname.dart';
import 'package:maazinfo/otp.dart';

void main() {
  runApp(SignUpApp());
}

class SignUpApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SignUpScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class SignUpScreen extends StatefulWidget {
  @override
  _SignUpScreenState createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController nameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController countryController = TextEditingController();

  String? nameErrorText;
  String? emailErrorText;
  String? passwordErrorText;
  String? countryErrorText;

  @override
  void dispose() {
    nameController.dispose();
    emailController.dispose();
    passwordController.dispose();
    countryController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Getting the size of the screen
    var mediaQuery = MediaQuery.of(context);
    var screenHeight = mediaQuery.size.height;
    var screenWidth = mediaQuery.size.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Background Circles using Stack and RadialGradient
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

          // Form Content wrapped in SingleChildScrollView
          SingleChildScrollView(
            child: Center(
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.1),
                child: Form(
                  key: _formKey, // Form key for validation
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // Image/Icon on top (placeholder or custom)
                      Padding(
                        padding: const EdgeInsets.only(top: 90),
                        child: Image.network(
                          'assets/heart.png', // Add your image URL here
                          height: screenHeight * 0.25,
                        ),
                      ),
                      /*SizedBox(height: screenHeight * 0.03),

                      // Name TextField with validation
                      TextFormField(
                        controller: nameController,
                        decoration: InputDecoration(
                          prefixIcon: Icon(Icons.person),
                          labelText: "Name",
                          errorText: nameErrorText,
                          border: OutlineInputBorder(),
                        ),
                      ),*/
                      SizedBox(height: screenHeight * 0.02),

                      // Email TextField with validation
                      TextFormField(
                        controller: emailController,
                        decoration: InputDecoration(
                          prefixIcon: Icon(Icons.email),
                          labelText: "Email",
                          errorText: emailErrorText,
                          border: OutlineInputBorder(),
                        ),
                      ),
                      SizedBox(height: screenHeight * 0.02),

                      // Password TextField with validation
                      TextFormField(
                        controller: passwordController,
                        obscureText: true,
                        decoration: InputDecoration(
                          prefixIcon: Icon(Icons.lock),
                          labelText: "Password",
                          errorText: passwordErrorText,
                          border: OutlineInputBorder(),
                        ),
                      ),
                      SizedBox(height: screenHeight * 0.02),

                      // Country TextField (optional, no validation added)
                      TextFormField(
                        controller: countryController,
                        decoration: InputDecoration(
                          prefixIcon: Icon(Icons.map),
                          labelText: "Country",
                          errorText: countryErrorText,
                          border: OutlineInputBorder(),
                        ),
                      ),
                      SizedBox(height: screenHeight * 0.03),

                      // Sign Up Button with validation logic
                      SizedBox(
                        width: double.infinity,
                        height: screenHeight * 0.07,
                        child: ElevatedButton(
                          onPressed: () {
                            setState(() {
                              nameErrorText = nameController.text.isEmpty ? "The username cannot be empty!" : null;
                              emailErrorText = emailController.text.isEmpty ? "Email cannot be empty!" : null;
                              passwordErrorText = passwordController.text.isEmpty ? "Password cannot be empty!" : null;
                              countryErrorText = countryController.text.isEmpty ? "This field cannot be empty!" : null;
                            });

                            if (nameErrorText == null &&
                                emailErrorText == null &&
                                passwordErrorText == null &&
                                countryErrorText == null) {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => VerificationScreen(),
                                ),
                              );
                            }
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.blue, // Background color
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(25),
                            ),
                          ),
                          child: Text(
                            'Sign Up',
                            style: TextStyle(
                              fontSize: screenHeight * 0.025,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ),
                      SizedBox(height: screenHeight * 0.02),

                      // Already have an account
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'Already have an account? ',
                            style: TextStyle(
                              fontSize: screenHeight * 0.02,
                              color: Colors.black,
                            ),
                          ),
                          GestureDetector(
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => LoginScreen(),
                                ),
                              );
                            },
                            child: Text(
                              'LOGIN',
                              style: TextStyle(
                                fontSize: screenHeight * 0.02,
                                color: Colors.blue,
                                fontWeight: FontWeight.bold,
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
          ),
        ],
      ),
    );
  }
}
