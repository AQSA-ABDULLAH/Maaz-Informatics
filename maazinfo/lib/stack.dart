import 'package:flutter/material.dart';

class CustomStackWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
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
                  Colors.purple.withOpacity(0.8),
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
      ],
    );
  }
}
