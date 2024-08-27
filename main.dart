import 'package:flutter/material.dart';
import 'HomeScreen.dart';
import 'splash_screen.dart';


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Your App Name',
      debugShowCheckedModeBanner: false, // This line removes the debug banner
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => SplashScreen(),
        '/home': (context) => DashboardScreen(nickname: '',), // Replace with your actual home screen widget
      },
    );

  }
}
