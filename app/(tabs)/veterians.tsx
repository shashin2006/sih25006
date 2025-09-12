import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  SafeAreaView 
} from "react-native";

export default function App() {
  const [messages, setMessages] = useState([
    { id: "1", sender: "bot", text: "👋 Hi! I’m VetCare AI. How can I help your pet today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now().toString(), sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>VetCare AI</Text>
      </View>

      {/* Chat Section */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask about your pet..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: { padding: 15, backgroundColor: "#16a34a" },
  headerText: { color: "white", fontSize: 18, fontWeight: "bold" },
  message: {
    maxWidth: "70%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 12,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#16a34a",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  messageText: { color: "black" },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#16a34a",
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
