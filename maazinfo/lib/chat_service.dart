import 'package:http/http.dart' as http;
import 'dart:convert';

class RasaChatService {
  final String rasaUrl = "http://192.168.1.29:5005/webhooks/rest/webhook";

  // Send msg to Rasa
  Future<List<String>> sendMessage(String message) async {
    final response = await http.post(
      Uri.parse(rasaUrl),
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonEncode({"sender": "user", "message": message}),
    );

    if (response.statusCode == 200) {
      List<dynamic> rasaResponse = jsonDecode(response.body);
      List<String> botMessages = [];

      for (var message in rasaResponse) {
        if (message.containsKey("text")) {
          botMessages.add(message["text"]);
        }
      }
      return botMessages;
    } else {
      throw Exception("Failed to connect to Rasa");
    }
  }
}
