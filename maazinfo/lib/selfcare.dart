import 'package:flutter/material.dart';
import 'package:maazinfo/chatbot.dart';
import 'package:maazinfo/dashboard.dart';
import 'package:maazinfo/nav.dart'; // Import the custom nav bar
import 'package:maazinfo/profile.dart';
import 'package:maazinfo/stack.dart';
import 'package:maazinfo/therapist.dart';

class SelfCareScreen extends StatefulWidget {
  @override
  _SelfCareScreenState createState() => _SelfCareScreenState();
}

class _SelfCareScreenState extends State<SelfCareScreen> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });

    // Navigation logic
    switch (index) {
      case 0:
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => DashScreen()),
        );
        break;
      case 1:
      // No need to navigate to SelfCareScreen as it's the current screen
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
      default:
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Navigation for this item is not yet implemented')),
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Stack(
          children: [
            CustomStackWidget(),
            Padding(
              padding: EdgeInsets.all(screenWidth * 0.09),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        'SELF CARE',
                        style: TextStyle(
                          fontSize: screenWidth * 0.05,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                      Spacer(),
                      Icon(Icons.more_vert, color: Colors.black), // Three dots icon
                    ],
                  ),
                  SizedBox(height: screenHeight * 0.12),
                  Expanded(
                    child: GridView.count(
                      crossAxisCount: 2,
                      crossAxisSpacing: screenWidth * 0.03,
                      mainAxisSpacing: screenHeight * 0.02,
                      childAspectRatio: 0.75,
                      children: [
                        _buildSelfCareCard('Therapist Recommends', screenWidth),
                        _buildSelfCareCard('Calmness Exercise', screenWidth),
                        _buildSelfCareCard('Anger Management', screenWidth),
                        _buildSelfCareCard('Wellness Package', screenWidth),
                        _buildSelfCareCard('Manage Stress', screenWidth),
                        _buildSelfCareCard('Energizing', screenWidth),
                        _buildSelfCareCard('Healthy Lifestyle', screenWidth),
                        _buildSelfCareCard('Mental Relaxation', screenWidth),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: CustomBottomNavBar(
        selectedIndex: _selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }

  // Build Self-Care Card with navigation
  Widget _buildSelfCareCard(String title, double screenWidth) {
    return GestureDetector(
      onTap: () {
        if (title == 'Therapist Recommends') {
          // Navigate to TherapistScreen
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => TherapistScreen()),
          );
        }
        else if (title == 'Calmness Exercise') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        }
        else if (title == 'Anger Management') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        }
        else if (title == 'Wellness Package') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        }
        else if (title == 'Manage Stress') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        } else if (title == 'Energizing') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        }
        else if (title == 'Healthy Lifestyle') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        }
        else if (title == 'Mental Relaxation') {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ChatbotScreen()),
          );
        }
          else {
          // Handle navigation for other cards
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Navigation for $title is not yet implemented')),
          );
        }
      },

      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(screenWidth * 0.05),
          gradient: LinearGradient(
            colors: [Colors.blue.shade800, Colors.purple.shade800],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Center(
          child: Padding(
            padding: EdgeInsets.all(screenWidth * 0.03),
            child: Text(
              title,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontFamily: 'Itim-Regular',
                fontSize: screenWidth * 0.045,
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
