import 'package:flutter/material.dart';

class NavScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 20.0), // Adjust this for better positioning
      child: Align(
        alignment: Alignment.bottomCenter,
        child: ClipRRect(
          borderRadius: BorderRadius.circular(30.0), // Rounded corners
          child: Container(
            width: MediaQuery.of(context).size.width * 0.8, // Adjust width for center alignment
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.purpleAccent, Colors.deepPurple],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
            padding: EdgeInsets.symmetric(vertical: 8), // Padding for height adjustment
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildNavBarItem(Icons.home, context),
                _buildNavBarItem(Icons.shield, context),
                _buildNavBarItem(Icons.message, context),
                _buildNavBarItem(Icons.person, context),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildNavBarItem(IconData icon, BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.white,
      ),
      padding: EdgeInsets.all(10),
      child: Icon(icon, color: Colors.deepPurple),
    );
  }
}
