import 'package:flutter/material.dart';
import 'package:maazinfo/HomeScreen.dart';
import 'package:maazinfo/journey.dart';
import 'package:maazinfo/nav.dart';
import 'package:maazinfo/therapist.dart';
// Import

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

    if (index == 0) {
      // Navigate to DashboardScreen when Home icon is tapped
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => DashboardScreen(nickname: '',)),
      );
    } else {
      // Handle other navigation items
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Navigation for this item is not yet implemented')),
      );
    }

    if (index == 1) {
      // Navigate to DashboardScreen when Home icon is tapped
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => JourneyScreen()),
      );
    } else {
      // Handle other navigation items
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Navigation for this item is not yet implemented')),
      );
    }

    if (index == 2) {
      // Navigate to DashboardScreen when Home icon is tapped
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => NavScreen()),
      );
    } else {
      // Handle other navigation items
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
            // Background 1st circle with gradient
            Positioned(
              top: -10,
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
                    center: Alignment.topCenter, // Purple at the top
                    radius: 1.2,
                  ),
                ),
              ),
            ),
            // Second circle with gradient
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
                    center: Alignment.topCenter, // Purple at the top
                    radius: 1.2,
                  ),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(screenWidth * 0.05),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        'SELF CARE',
                        style: TextStyle(
                          fontSize: screenWidth * 0.03,
                          fontWeight: FontWeight.bold,
                          color: Colors.grey,
                        ),
                      ),
                      Spacer(),
                      Icon(Icons.more_vert, color: Colors.black), // Three dots icon
                    ],
                  ),
                  SizedBox(height: screenHeight * 0.12),
                  Expanded(
                    child: GridView.count(
                      crossAxisCount: screenWidth > 600 ? 3 : 2,
                      crossAxisSpacing: screenWidth * 0.03,
                      mainAxisSpacing: screenHeight * 0.02,
                      children: [
                        _buildSelfCareCard(
                            'Therapist Recommends', screenWidth, context),
                        _buildSelfCareCard(
                            'Calmness Exercise', screenWidth, context),
                        _buildSelfCareCard(
                            'Anger Management', screenWidth, context),
                        _buildSelfCareCard(
                            'Wellness Package', screenWidth, context),
                        _buildSelfCareCard('Manage Stress', screenWidth, context),
                        _buildSelfCareCard('Energizing', screenWidth, context),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.security),
            label: 'Security',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.message),
            label: 'Chat',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }

  // Modified _buildSelfCareCard to include navigation
  Widget _buildSelfCareCard(String title, double screenWidth, BuildContext context) {
    return GestureDetector(
      onTap: () {
        if (title == 'Therapist Recommends') {
          // Navigate to TherapistScreen using Navigator.push
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => TherapistScreen()),
          );
        } else {
          // Handle navigation for other cards
          // You can add more conditions or default behavior here
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Navigation for $title is not yet implemented')),
          );
        }
      },
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(screenWidth * 0.05),
          gradient: LinearGradient(
            colors: [Colors.purple, Colors.blue],
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
