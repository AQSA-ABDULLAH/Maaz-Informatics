import 'package:flutter/material.dart';
import 'package:maazinfo/dashboard.dart';
import 'package:maazinfo/nav.dart';
import 'package:maazinfo/profile.dart';
import 'package:maazinfo/selfcare.dart';
import 'package:maazinfo/stack.dart';

class TherapistScreen extends StatefulWidget {
  @override
  _TherapistScreenState createState() => _TherapistScreenState();
}

class _TherapistScreenState extends State<TherapistScreen> {
  int _selectedIndex = 2;

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
            // Background 1st circle with gradient
            CustomStackWidget(),
            SingleChildScrollView(
              padding: EdgeInsets.all(screenWidth * 0.09),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'THERAPIST',
                    style: TextStyle(
                      fontFamily: 'Itim-Regular',
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: 8), // Space between lines
                  SizedBox(height: 50),
                  Text(
                    'WELCOME TO \nHAVEN!',
                    style: TextStyle(fontSize: 26, fontFamily: 'Itim-Regular', fontWeight: FontWeight.bold, color: Colors.purple),
                  ),
                  SizedBox(height: 50),
                  Center(
                    child: Image.asset(
                      'assets/success.png',
                      height: 200,
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
}
