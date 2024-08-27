import 'package:flutter/material.dart';

class SelfCareScreen extends StatelessWidget {
  const SelfCareScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Background circle with gradient in AppBar
          Positioned(
            top: -30,
            right: -20,
            child: Container(
              width: 120,
              height: 120,
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
          // Second circle with gradient below the AppBar
          Positioned(
            top: 50,
            right: -40,
            child: Container(
              width: 80,
              height: 80,
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
          // Main content of the screen
          Column(
            children: [
              AppBar(
                title: const Text(
                  'SELF CARE',
                  style: TextStyle(color: Colors.black),
                ),
                backgroundColor: Colors.white,
                elevation: 0,
                centerTitle: true,
                iconTheme: const IconThemeData(color: Colors.black),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: GridView.count(
                    crossAxisCount: 2,
                    crossAxisSpacing: 16.0,
                    mainAxisSpacing: 16.0,
                    childAspectRatio: 1.5,
                    children: [
                      _buildCard(Icons.person, 'Therapist Recommends'),
                      _buildCard(Icons.emoji_symbols, 'Calmness Exercise'),
                      _buildCard(Icons.sports, 'Exercise'),
                      _buildCard(Icons.sentiment_dissatisfied, 'Anger Management'),
                      _buildCard(Icons.local_hospital, 'Wellness Package'),
                      _buildCard(Icons.stream, 'Manage Stress'),
                      _buildCard(Icons.lightbulb, 'Energizing'),
                      _buildCard(Icons.phone, 'Phone 13 min'),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildCard(IconData icon, String label) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [Colors.blue, Colors.purple],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Card(
        elevation: 5,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        color: Colors.transparent,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 40, color: Colors.white),
            const SizedBox(height: 8),
            Text(
              label,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: SelfCareScreen(),
  ));
}
