import 'package:flutter/material.dart';
import 'splash_screen.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(); // Initializes Firebase
  runApp(MyApp());
}


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'maazinfo',
      debugShowCheckedModeBanner: false, // removes the debug banner
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Itim-Regular',
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => SplashScreen(),
       // '/home': (context) => DashboardScreen(nickname: '',), // Replace with your actual home screen widget
      },
    );

  }
}
