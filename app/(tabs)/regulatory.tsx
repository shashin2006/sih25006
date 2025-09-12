import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Optional: replace with real AI or backend integration
const fakeAIResponse = (input: string) => {
  if (input.toLowerCase().includes("high-risk")) return "3 farms have High Risk alerts in Tamil Nadu.";
  if (input.toLowerCase().includes("vendors")) return "2 vendors need vehicle sanitization before export.";
  return "No critical alerts at the moment.";
};

export default function AuthoritiesChat() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: "1", sender: "bot", text: "👋 Hello! I’m Authorities AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { id: Date.now().toString(), sender: "user", text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");

    // Simulate AI response
    const botReply = fakeAIResponse(input);
    setMessages([...updatedMessages, { id: Date.now().toString(), sender: "bot", text: botReply }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/dashboard")}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Authorities AI</Text>
      </View>

      {/* Chat Section */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[styles.message, item.sender === "user" ? styles.userMessage : styles.botMessage]}
          >
            <Text style={[styles.messageText, { color: item.sender === "user" ? "white" : "black" }]}>
              {item.text}
            </Text>
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
          placeholder="Ask about farms or vendors..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9" },
  header: { flexDirection: "row", alignItems: "center", backgroundColor: "#2E7D32", padding: 15 },
  headerText: { color: "white", fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  message: { maxWidth: "70%", padding: 10, marginVertical: 5, borderRadius: 12 },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#2E7D32" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "white", borderWidth: 1, borderColor: "#ddd" },
  messageText: { color: "black" },
  inputContainer: { flexDirection: "row", padding: 10, borderTopWidth: 1, borderColor: "#ddd", backgroundColor: "white" },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 20, paddingHorizontal: 12, marginRight: 10 },
  sendButton: { backgroundColor: "#2E7D32", borderRadius: 20, paddingHorizontal: 20, justifyContent: "center" },
});
