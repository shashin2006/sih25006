import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    location: "",
    farmName: "",
    farmType: "",
    experience: "",
    farmSize: "",
    yearsRunning: "",
    animals: "",
    certifications: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = () => {
    // ✅ Validation for mandatory fields
    if (
      !form.name ||
      !form.age ||
      !form.location ||
      !form.farmName ||
      !form.farmType ||
      !form.phone ||
      !form.email ||
      !form.password
    ) {
      Alert.alert("Missing Fields", "Please fill all required (*) fields.");
      return;
    }

    // ✅ If valid, go to farmer page
    router.push("/Login");
  };

  const renderLabel = (label: string, required = false) => (
    <Text style={styles.label}>
      {label} {required && <Text style={{ color: "red" }}>*</Text>}
    </Text>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Farmer Signup</Text>

      {/* Personal Info */}
      {renderLabel("Full Name", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={form.name}
        onChangeText={(text) => handleChange("name", text)}
      />

      {renderLabel("Age", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter age"
        keyboardType="numeric"
        value={form.age}
        onChangeText={(text) => handleChange("age", text)}
      />

      {renderLabel("Location", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={form.location}
        onChangeText={(text) => handleChange("location", text)}
      />

      {/* Farm Info */}
      {renderLabel("Farm Name", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter farm name"
        value={form.farmName}
        onChangeText={(text) => handleChange("farmName", text)}
      />

      {renderLabel("Farm Type", true)}
      <TextInput
        style={styles.input}
        placeholder="Ex: Crops + Livestock"
        value={form.farmType}
        onChangeText={(text) => handleChange("farmType", text)}
      />

      {renderLabel("Experience")}
      <TextInput
        style={styles.input}
        placeholder="Ex: 18 years in farming"
        value={form.experience}
        onChangeText={(text) => handleChange("experience", text)}
      />

      {renderLabel("Farm Size")}
      <TextInput
        style={styles.input}
        placeholder="Ex: 15 acres"
        value={form.farmSize}
        onChangeText={(text) => handleChange("farmSize", text)}
      />

      {renderLabel("Years Running")}
      <TextInput
        style={styles.input}
        placeholder="Ex: 20"
        keyboardType="numeric"
        value={form.yearsRunning}
        onChangeText={(text) => handleChange("yearsRunning", text)}
      />

      {/* Animals & Certifications */}
      {renderLabel("Animals on Farm")}
      <TextInput
        style={styles.input}
        placeholder="Ex: Poultry:150, Pigs:40"
        value={form.animals}
        onChangeText={(text) => handleChange("animals", text)}
      />

      {renderLabel("Certifications")}
      <TextInput
        style={styles.input}
        placeholder="Ex: Organic Certified"
        value={form.certifications}
        onChangeText={(text) => handleChange("certifications", text)}
      />

      {/* Contact Info */}
      {renderLabel("Phone", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange("phone", text)}
      />

      {renderLabel("Email", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />

      {renderLabel("Password", true)}
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already registered?{" "}
        <Text style={styles.link} onPress={() => router.push("/Login")}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F2FCE2",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
    color: "#555",
  },
  link: {
    color: "#2E7D32",
    fontWeight: "bold",
  },
});
