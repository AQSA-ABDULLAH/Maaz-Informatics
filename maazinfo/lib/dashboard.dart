import 'package:flutter/material.dart';
import 'package:maazinfo/chatbot.dart';
import 'dart:convert';
import 'package:maazinfo/profile.dart';
import 'package:maazinfo/selfcare.dart';
import 'package:maazinfo/therapist.dart';
import 'package:http/http.dart' as http;
import 'package:maazinfo/url.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'nav.dart';
import 'stack.dart';

class DashScreen extends StatefulWidget {
  @override
  _DashScreenState createState() => _DashScreenState();
}

class _DashScreenState extends State<DashScreen> {
  String userId = '';
  String nickname = '';
  int _selectedIndex = 0;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    _getUserIdFromToken();
  }

  Future<void> _getUserIdFromToken() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? token = prefs.getString('token');

    if (token != null) {
      try {
        // Split the token to get the payload part
        List<String> tokenParts = token.split('.');
        if (tokenParts.length == 3) {
          // Decode the payload (the 2nd part of the JWT)
          String payload = tokenParts[1];
          String normalizedPayload = base64Url.normalize(payload); // Normalize the payload
          Map<String, dynamic> decodedToken = jsonDecode(utf8.decode(base64Url.decode(normalizedPayload)));
          userId = decodedToken['userId'];
          _fetchUserData();
        } else {
          print("Invalid token format");
          setState(() {
            isLoading = false;
          });
        }
      } catch (e) {
        print("Error decoding token: $e");
        setState(() {
          isLoading = false;
        });
      }
    } else {
      print("Token is null");
      setState(() {
        isLoading = false;
      });
    }
  }

  Future<void> _fetchUserData() async {
    if (userId.isEmpty) {
      print("User ID is empty");
      setState(() {
        isLoading = false;
      });
      return;
    }

    final url = Uri.parse('$baseUrl/get-user-profile/$userId');
    print("Fetching user data from URL: $url");

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final responseData = jsonDecode(response.body);
        setState(() {
          nickname = responseData["data"]['userName'];
          isLoading = false;
        });
      } else {
        setState(() {
          isLoading = false;
        });
        print("Error Status Code: ${response.statusCode}");
        print("Response Data: ${response.body}");
      }
    } catch (e) {
      setState(() {
        isLoading = false;
      });
      print("Exception occurred: $e");
    }
  }

  void _onItemTapped(int index) {
    switch (index) {
      case 0:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => DashScreen()),
        );
        break;
      case 1:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => SelfCareScreen()),
        );
        break;
      case 2:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => TherapistScreen()),
        );
        break;
      case 3:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => ProfileScreen()),
        );
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          CustomStackWidget(),
          Positioned(
            top: 40,
            left: 20,
            child: Text(
              isLoading ? 'Loading...' : 'Welcome $nickname',
              style: TextStyle(
                fontFamily: 'Itim-Regular',
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.grey[800],
              ),
            ),
          ),
          SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height: 100),
                  Text(
                    'SELF CARE',
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.grey[600],
                    ),
                  ),
                  SizedBox(height: 10),
                  _buildSelfCareScroll(),
                  SizedBox(height: 20),
                  _buildMyTherapistSection(),
                  SizedBox(height: 20),
                  _buildRecommendedExerciseSection(),
                  SizedBox(height: 20),
                  _buildContinueChatSection(),
                  SizedBox(height: 20),
                ],
              ),
            ),
          ),
        ],
      ),
      bottomNavigationBar: CustomBottomNavBar(
        selectedIndex: _selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }

  // Self-Care section
  Widget _buildSelfCareScroll() {
    return Container(
      height: 120,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          _selfCareCard('Hurt', Icons.healing, ChatbotScreen()),
          _selfCareCard('Happiness', Icons.emoji_emotions, ChatbotScreen()),
          _selfCareCard('Stress', Icons.self_improvement, ChatbotScreen()),
          _selfCareCard('Sleep', Icons.bedtime, ChatbotScreen()),
          _selfCareCard('Calmness', Icons.spa, ChatbotScreen()),
          _selfCareCard('Anger', Icons.whatshot, ChatbotScreen()),
          _selfCareCard('Energizing', Icons.flash_on, ChatbotScreen()),
        ],
      ),
    );
  }

  Widget _selfCareCard(String title, IconData icon, Widget screen) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => screen),
        );
      },
      child: Padding(
        padding: const EdgeInsets.all(7.0),
        child: Container(
          width: MediaQuery.of(context).size.width / 3 - 16,
          child: Column(
            children: [
              CircleAvatar(
                radius: 30,
                backgroundColor: Colors.purple,
                child: Icon(icon, color: Colors.white, size: 35),
              ),
              SizedBox(height: 10),
              Text(
                title,
                style: TextStyle(
                  fontFamily: 'Itim-Regular',
                  fontSize: 14,
                  color: Colors.black87,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  // My Therapist section
  Widget _buildMyTherapistSection() {
    return Container(
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.2),
            blurRadius: 10,
            offset: Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: EdgeInsets.all(8.0),
            decoration: BoxDecoration(
              color: Colors.purple.withOpacity(0.1),
              borderRadius: BorderRadius.circular(20.0),
              border: Border.all(color: Colors.purple.withOpacity(0.1), width: 2),
            ),
            child: Text(
              'My Therapist',
              style: TextStyle(
                fontFamily: 'Itim-Regular',
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
          SizedBox(height: 20),
          Center(
            child: Column(
              children: [
                CircleAvatar(
                  radius: 30,
                  backgroundColor: Colors.purple.withOpacity(0.1),
                  child: Icon(Icons.person, color: Colors.purple, size: 40),
                ),
                SizedBox(height: 20),
                Text(
                  'No upcoming session',
                  style: TextStyle(
                    fontFamily: 'Itim-Regular',
                    fontSize: 16,
                    color: Colors.grey,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 12),
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.purple,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 20),
                  ),
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => TherapistScreen()),
                    );
                  },
                  child: Text(
                    'Book a Session',
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 16,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }


  // Recommended Exercise Section
  Widget _buildRecommendedExerciseSection() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.3),
            blurRadius: 10,
            offset: Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: EdgeInsets.all(8.0),
            decoration: BoxDecoration(
              color: Colors.purple.withOpacity(0.1),
              borderRadius: BorderRadius.circular(20.0),
              border: Border.all(color: Colors.purple.withOpacity(0.1), width: 2),
            ),
            child: Text(
              'Recommended Exercise',
              style: TextStyle(
                fontFamily: 'Itim-Regular',
                fontSize: 16,
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SizedBox(height: 50),
          GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) =>SelfCareScreen()),
              );
            },
            child: Container(
              padding: EdgeInsets.all(30),
              decoration: BoxDecoration(
                color: Colors.purple.withOpacity(0.3),
                borderRadius: BorderRadius.circular(0),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        'Manage Anxiety',
                        style: TextStyle(
                          fontFamily: 'Itim-Regular',
                          fontSize: 16,
                          color: Colors.black.withOpacity(0.6),
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        'Calmness Exercise',
                        style: TextStyle(
                          fontFamily: 'Itim-Regular',
                          fontSize: 12,
                          color: Colors.black.withOpacity(0.6),
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  CircleAvatar(
                    radius: 30,
                    backgroundColor: Colors.white,
                    child: Icon(
                      Icons.self_improvement,
                      color: Colors.purple,
                      size: 30,
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

  // Continue the Chat Section
  Widget _buildContinueChatSection() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.3),
            blurRadius: 10,
            offset: Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: EdgeInsets.all(8.0),
            decoration: BoxDecoration(
              color: Colors.purple.withOpacity(0.1),
              borderRadius: BorderRadius.circular(20.0),
              border: Border.all( color: Colors.purple.withOpacity(0.1),width: 2),
            ),
            child: Text(
              'Continue the chat',
              style: TextStyle(
                fontFamily: 'Itim-Regular',
                fontSize: 16,
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SizedBox(height: 25),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                children: [
                  Text(
                    'With your Therapist',
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                      color: Colors.black.withOpacity(0.6),
                    ),
                  ),
                ],
              ),GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => ChatbotScreen()),
                  );
                },
                child: CircleAvatar(
                  radius: 30,
                  backgroundColor: Colors.purple.withOpacity(0.1),
                  child: Icon(
                    Icons.chat_bubble,
                    color: Colors.purple,
                    size: 40,
                  ),
                ),
              ),

            ],
          ),
        ],
      ),
    );
  }
}


