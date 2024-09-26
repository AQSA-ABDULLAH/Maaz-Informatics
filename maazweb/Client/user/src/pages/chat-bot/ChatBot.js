import React, { useState } from "react";
import styles from "./chatbot.module.css";

function ChatBot() {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChatVisibility = () => {
    setChatVisible(!chatVisible);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    try {
      const response = await fetch("http://192.168.1.29:5005/webhooks/rest/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });
      const data = await response.json();

      const botMessages = data.map((msg) => ({ text: msg.text, sender: "bot" }));
      setMessages((prevMessages) => [...prevMessages, ...botMessages]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.ChatBot}>
      {/* Chat Icon */}
      <div className={styles.chatBotIcon} onClick={toggleChatVisibility}></div>

      {/* Chat Container */}
      {chatVisible && (
        <div className={styles.chatContainer}>
          <div className={styles.chatbox}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? styles.userMessage : styles.botMessage}
              >
                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.userInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
            />
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;


