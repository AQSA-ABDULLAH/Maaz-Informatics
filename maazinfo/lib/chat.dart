import 'package:flutter/material.dart';

void main() {
  runApp(ChatApp());
}

class ChatApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ChatScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class ChatScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context); // back button press
          },
        ),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  // Chat bubble
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Container(
                      padding: EdgeInsets.all(12.0),
                      decoration: BoxDecoration(
                        color: Colors.purple,
                        borderRadius: BorderRadius.circular(16.0),
                      ),
                      child: Text(
                        'Hey Raina!\nWorries are over.\nI am here to help you deal with emotions',
                        style: TextStyle(color: Colors.white,fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                  SizedBox(height: 30.0),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Container(
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.purple, width: 2),
                        borderRadius: BorderRadius.circular(12.0),
                      ),
                      padding: EdgeInsets.all(10.0),
                      child: Image.asset(
                        'assets/heart.png',
                        height: 100,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          // Bottom input area
          Container(
            padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
            color: Colors.white,
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    // Reply buttons
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.purple,
                        shape: StadiumBorder(),
                      ),
                      child: Text('Hello!',
                        style: TextStyle(
                          fontSize: 14,
                          fontFamily: 'Poppins-SemiBold',
                          color: Colors.white,
                          fontWeight: FontWeight.w600,
                        ),),
                    ),
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.purple,
                        shape: StadiumBorder(),
                      ),
                      child: Text('Thank you!',
                        style: TextStyle(
                          fontSize: 14,
                          fontFamily: 'Poppins-SemiBold',
                          color: Colors.white,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 8.0),
                // Input field
                Row(
                  children: <Widget>[
                    Expanded(
                      child: TextField(
                        decoration: InputDecoration(
                          hintText: 'Reply or say hello...',
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(30.0),
                          ),
                          contentPadding: EdgeInsets.symmetric(horizontal: 16.0),
                        ),
                      ),
                    ),
                    IconButton(
                      onPressed: () {},
                      icon: Icon(Icons.send, color: Colors.purple),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
