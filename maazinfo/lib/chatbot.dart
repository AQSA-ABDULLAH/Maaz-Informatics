import 'package:flutter/material.dart';
import 'package:maazinfo/chat_service.dart';

class ChatbotScreen extends StatefulWidget {
  @override
  _ChatbotScreenState createState() => _ChatbotScreenState();
}

class _ChatbotScreenState extends State<ChatbotScreen> {
  final TextEditingController _controller = TextEditingController();
  final List<String> _messages = [];
  final RasaChatService rasaChatService = RasaChatService();

  void _sendMessage() async {
    if (_controller.text.isNotEmpty) {
      setState(() {
        _messages.add("You: " + _controller.text); // User msg
      });

      // Send msg to Rasa
      List<String> botMessages = await rasaChatService.sendMessage(_controller.text);

      setState(() {
        for (var message in botMessages) {
          _messages.add("Bot: " + message); // Bot msg
        }
      });

      _controller.clear();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purpleAccent,
        title: Text('Chatbot'),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                // Check msg is from user or bot
                bool isUserMessage = _messages[index].startsWith("You:");

                return Container(
                  margin: EdgeInsets.symmetric(vertical: 5, horizontal: 10),
                  padding: EdgeInsets.all(10),
                  alignment: isUserMessage ? Alignment.centerRight : Alignment.centerLeft,
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      maxWidth: MediaQuery.of(context).size.width * 0.75,
                    ),
                    child: Container(
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: isUserMessage ? Colors.purple[200] : Colors.blue[200],
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Text(
                        _messages[index],
                        style: TextStyle(color: Colors.black, fontWeight:FontWeight.bold),
                        softWrap: true,
                        textAlign: isUserMessage ? TextAlign.end : TextAlign.start,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(30),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black26,
                          blurRadius: 4,
                          offset: Offset(2, 2),
                        ),
                      ],
                    ),
                    child: TextField(
                      controller: _controller,
                      decoration: InputDecoration(
                        hintText: "Enter your message",
                        border: InputBorder.none,
                        contentPadding: EdgeInsets.symmetric(horizontal: 20, vertical: 15),
                      ),
                    ),
                  ),
                ),
                IconButton(
                  icon: Icon(Icons.send, color: Colors.purple, size: 30),
                  onPressed: _sendMessage,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
