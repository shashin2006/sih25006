import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function FarmerPage() {
  const router = useRouter();

  const farmer = {
    name: "Ramesh Kumar",
    age: 42,
    location: "Tamil Nadu, India",
    farmName: "Green Valley Organic Farm",
    farmType: "Mixed Farming (Crops + Livestock)",
    experience: "18 years in organic farming",
    profilePic:
      "https://static.vecteezy.com/system/resources/previews/040/502/187/non_2x/3d-avatar-character-illustration-male-farmer-png.png",
    animals: [
      { type: "Poultry (chickens)", count: 150 },
      { type: "Pigs", count: 40 },
    ],
    authorized: true,
    certifications: ["Organic Certified", "Animal Welfare Approved"],
    farmSize: "15 acres",
    yearsRunning: 20,
    contact: {
      phone: "+91 9876543210",
      email: "rameshfarms@example.com",
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F2FCE2" }}>
      {/* ✅ Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/dashboard")}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Farmer Details</Text>
      </View>

      {/* ✅ Scrollable Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.headerSubtitle}>
          Complete profile of the farmer and their farm 🌾
        </Text>

        {/* Profile Card */}
        <View style={styles.cardCenter}>
          <Image
            source={{ uri: farmer.profilePic }}
            style={{ width: 140, height: 140, borderRadius: 70, marginBottom: 15 }}
          />
          <Text style={styles.name}>{farmer.name}</Text>
          <Text style={styles.detail}>{farmer.age} years old</Text>
          <Text style={styles.detail}>📍 {farmer.location}</Text>
        </View>

        {/* Farm Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🏡 Farm Information</Text>
          <Text style={styles.detail}>Farm Name: {farmer.farmName}</Text>
          <Text style={styles.detail}>Type: {farmer.farmType}</Text>
          <Text style={styles.detail}>Farm Size: {farmer.farmSize}</Text>
          <Text style={styles.detail}>Running for: {farmer.yearsRunning} years</Text>
          <Text style={{ fontSize: 16, color: farmer.authorized ? "green" : "red", marginTop: 3 }}>
            Government Authorized: {farmer.authorized ? "✅ Yes" : "❌ No"}
          </Text>
        </View>

        {/* Certifications */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📜 Certifications</Text>
          {farmer.certifications.map((cert, index) => (
            <Text key={index} style={styles.detail}>
              • {cert}
            </Text>
          ))}
        </View>

        {/* Animals */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🐄 Animals on Farm</Text>
          {farmer.animals.map((animal, index) => (
            <Text key={index} style={styles.detail}>
              • {animal.type}: {animal.count}
            </Text>
          ))}
        </View>

        {/* Contact */}
        <View style={[styles.card, { marginBottom: 50 }]}>
          <Text style={styles.sectionTitle}>📞 Contact</Text>
          <Text style={styles.detail}>Phone: {farmer.contact.phone}</Text>
          <Text style={styles.detail}>Email: {farmer.contact.email}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 4,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  cardCenter: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E7D32",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  detail: {
    fontSize: 16,
    color: "#444",
    marginTop: 5,
  },
});
