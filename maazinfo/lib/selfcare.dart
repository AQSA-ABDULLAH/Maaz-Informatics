import 'package:flutter/material.dart';
import 'package:maazinfo/therapist.dart';

class SelfCareScreen extends StatelessWidget {
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
                  Text(
                    'SELF CARE',
                    style: TextStyle(
                      fontSize: screenWidth * 0.06,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
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
