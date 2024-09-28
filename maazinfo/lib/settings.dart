import 'package:flutter/material.dart';
import 'package:maazinfo/editprofile.dart';
import 'package:maazinfo/logout.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Settings Screen',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: SettingsScreen(),
    );
  }
}

class SettingsScreen extends StatefulWidget {
  @override
  _SettingsScreenState createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  final ScrollController _scrollController = ScrollController();

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text('Settings'),
        backgroundColor: Colors.white,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
              Navigator.pop(context);
            },// Handle back button press
        ),
      ),
      body: Scrollbar(
        controller: _scrollController,
        thumbVisibility: true,
        child: SingleChildScrollView(
          controller: _scrollController,
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Account',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),
                Card(
                  child: Column(
                    children: [
                      ListTile(
                        leading: Icon(Icons.person),
                        title: Text('Edit Profile'),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => EditProfileScreen()),
                          ); // Handle edit profile tap
                        },
                      ),
                      Divider(height: 1),
                      ListTile(
                        leading: Icon(Icons.security),
                        title: Text('Security'),
                        onTap: () {
                          // Handle security tap
                        },
                      ),
                      Divider(height: 1),
                      ListTile(
                        leading: Icon(Icons.lock),
                        title: Text('Privacy'),
                        onTap: () {
                          // Handle privacy tap
                        },
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'Support & About',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),
                Card(
                  child: Column(
                    children: [
                      ListTile(
                        leading: Icon(Icons.subscriptions),
                        title: Text('My Subscription'),
                        onTap: () {
                          // Handle subscription tap
                        },
                      ),
                      Divider(height: 1),
                      ListTile(
                        leading: Icon(Icons.help),
                        title: Text('Help & Support'),
                        onTap: () {
                          // Handle help & support tap
                        },
                      ),
                      Divider(height: 1),
                      ListTile(
                        leading: Icon(Icons.policy),
                        title: Text('Terms and Policies'),
                        onTap: () {
                          // Handle terms and policies tap
                        },
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'Actions',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),
                Card(
                  child: Column(
                    children: [
                      ListTile(
                        leading: Icon(Icons.flag),
                        title: Text('Report a Problem'),
                        onTap: () {
                          // Handle report a problem tap
                        },
                      ),
                      Divider(height: 1),
                      ListTile(
                        leading: Icon(Icons.person_add),
                        title: Text('Add Account'),
                        onTap: () {
                          // Handle add account tap
                        },
                      ),
                      Divider(height: 1),
                      ListTile(
                        leading: Icon(Icons.logout),
                        title: Text('Log out'),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => LogoutScreen()),
                          ); // Handle log out tap
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 0,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.security),
            label: 'Security',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.chat),
            label: 'Messages',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Profile',
          ),
        ],
        onTap: (index) {
          // Handle bottom navigation taps
        },
      ),
    );
  }
}
