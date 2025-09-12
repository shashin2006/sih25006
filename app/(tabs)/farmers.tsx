import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function FarmerPage() {
  // Example farmer details (replace with DB/API later)
  const farmer = {
    name: "Ramesh Kumar",
    age: 42,
    location: "Tamil Nadu, India",
    farmName: "Green Valley Organic Farm",
    farmType: "Mixed Farming (Crops + Livestock)",
    experience: "18 years in organic farming",
    profilePic:
      "https://static.vecteezy.com/system/resources/previews/040/502/187/non_2x/3d-avatar-character-illustration-male-farmer-png.png", // ✅ Updated farmer image
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
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F2FCE2" }}
      contentContainerStyle={{ padding: 20 }}
    >
      {/* Header */}
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 }}>
        Farmer Details
      </Text>
      <Text style={{ fontSize: 16, color: "#555", marginBottom: 20 }}>
        Complete profile of the farmer and their farm 🌾
      </Text>

      {/* Profile Card */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 4,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: farmer.profilePic }}
          style={{ width: 140, height: 140, borderRadius: 70, marginBottom: 15 }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
          {farmer.name}
        </Text>
        <Text style={{ fontSize: 16, color: "#666", marginVertical: 5 }}>
          {farmer.age} years old
        </Text>
        <Text style={{ fontSize: 16, color: "#666" }}>📍 {farmer.location}</Text>
      </View>

      {/* Farm Details */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          marginTop: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#2E7D32" }}>
          🏡 Farm Information
        </Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 5 }}>
          Farm Name: {farmer.farmName}
        </Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 3 }}>
          Type: {farmer.farmType}
        </Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 3 }}>
          Farm Size: {farmer.farmSize}
        </Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 3 }}>
          Running for: {farmer.yearsRunning} years
        </Text>
        <Text style={{ fontSize: 16, color: farmer.authorized ? "green" : "red", marginTop: 3 }}>
          Government Authorized: {farmer.authorized ? "✅ Yes" : "❌ No"}
        </Text>
      </View>

      {/* Certifications */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          marginTop: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#2E7D32" }}>
          📜 Certifications
        </Text>
        {farmer.certifications.map((cert, index) => (
          <Text key={index} style={{ fontSize: 16, color: "#444", marginTop: 5 }}>
            • {cert}
          </Text>
        ))}
      </View>

      {/* Animals (only Poultry and Pigs) */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          marginTop: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#2E7D32" }}>
          🐄 Animals on Farm
        </Text>
        {farmer.animals.map((animal, index) => (
          <Text key={index} style={{ fontSize: 16, color: "#444", marginTop: 3 }}>
            • {animal.type}: {animal.count}
          </Text>
        ))}
      </View>

      {/* Contact */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          marginTop: 20,
          marginBottom: 40,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#2E7D32" }}>
          📞 Contact
        </Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 5 }}>
          Phone: {farmer.contact.phone}
        </Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 3 }}>
          Email: {farmer.contact.email}
        </Text>
      </View>
    </ScrollView>
  );
}
