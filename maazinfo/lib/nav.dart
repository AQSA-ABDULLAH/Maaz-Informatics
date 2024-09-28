import 'package:flutter/material.dart';

class CustomBottomNavBar extends StatelessWidget {
  final int selectedIndex;
  final Function(int) onItemTapped;

  const CustomBottomNavBar({
    Key? key,
    required this.selectedIndex,
    required this.onItemTapped,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      items: <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          icon: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
            ),
            padding: EdgeInsets.all(8),
            child: Icon(Icons.home, size: 40),
          ),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
            ),
            padding: EdgeInsets.all(8),
            child: Icon(Icons.security, size: 40),
          ),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
            ),
            padding: EdgeInsets.all(8),
            child: Icon(Icons.message, size: 40),
          ),
          label: '',
        ),
        BottomNavigationBarItem(
          icon: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
            ),
            padding: EdgeInsets.all(8),
            child: Icon(Icons.person, size: 40),
          ),
          label: '',
        ),
      ],
      currentIndex: selectedIndex,
      selectedItemColor: Colors.purple,
      unselectedItemColor: Colors.grey, // unselected item color
      backgroundColor: Colors.white,
      onTap: onItemTapped,
    );
  }
}
