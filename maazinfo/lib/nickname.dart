import 'package:flutter/material.dart';
import 'package:maazinfo/signup.dart';
import 'package:maazinfo/stack.dart';

class NicknameScreen extends StatefulWidget {
  @override
  _NicknameScreenState createState() => _NicknameScreenState();
}

class _NicknameScreenState extends State<NicknameScreen> {
  final TextEditingController _nicknameController = TextEditingController();
  bool _isChecked = false; // Checkbox value for terms and conditions

  void _handleNextButton() {
    final String nickname = _nicknameController.text.trim();
    print('Nickname: $nickname');

    if (nickname.isEmpty || !_isChecked) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Please enter a nickname and agree to the Terms of Service',
            style: TextStyle(fontFamily: 'Itim-Regular'),
          ),
        ),
      );
      return;
    }

    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => SignUpApp(nickname: nickname), // Pass nickname
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          CustomStackWidget(),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(32.0),
              child: SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.asset(
                      'assets/play.png',
                      width: 120,
                      height: 120,
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Welcome to',
                      style: TextStyle(
                        fontFamily: "Itim-Regular",
                        fontSize: 20,
                        color: Colors.purple,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      'MAAZ INFORMATICS',
                      style: TextStyle(
                        fontFamily: "Itim-Regular",
                        fontSize: 24,
                        color: Colors.blue,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text(
                      'We are excited to have\nyou here. Choose a nickname..',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontFamily: "Itim-Regular",
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 12),
                    Container(
                      padding: EdgeInsets.all(2),
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.blue, width: 2),
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      child: TextField(

                        controller: _nicknameController,

                        decoration: InputDecoration(
                          hintText: 'Choose a nickname...',
                          hintStyle: TextStyle(fontFamily: "Itim-Regular", fontSize: 16),
                          border: InputBorder.none,
                          contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                        ),
                      ),
                    ),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Checkbox(
                          value: _isChecked,
                          onChanged: (bool? value) {
                            setState(() {
                              _isChecked = value ?? false;
                            });
                          },
                        ),
                        Expanded(
                          child: Text(
                            'I agree to our Terms of Service and Privacy Policy.',
                            style: TextStyle(
                              fontSize: 16,
                              fontFamily: "Itim-Regular",
                              fontWeight: FontWeight.bold,
                            ),
                            softWrap: true, // Ensures text wraps correctly
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 32),
                    ElevatedButton(
                      onPressed: _handleNextButton,
                      child: Text(
                        'Next',
                        style: TextStyle(fontFamily: "Poppins-SemiBold", color: Colors.white),
                      ),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.purple,
                        padding: EdgeInsets.symmetric(horizontal: 40, vertical: 15),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30.0),
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
