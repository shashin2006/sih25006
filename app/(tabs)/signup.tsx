import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: "" }); // clear error when typing
  };

  const handleSignup = () => {
    let newErrors: { [key: string]: string } = {};

    // Required fields
    if (!form.name) newErrors.name = "This field is required";
    if (!form.age) newErrors.age = "This field is required";
    if (!form.location) newErrors.location = "This field is required";
    if (!form.farmName) newErrors.farmName = "This field is required";
    if (!form.farmType) newErrors.farmType = "This field is required";
    if (!form.phone) newErrors.phone = "This field is required";
    if (!form.email) newErrors.email = "This field is required";
    if (!form.password) newErrors.password = "This field is required";

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      router.push("/Login");
    }
  };

  const renderLabel = (label: string, required = false) => (
    <Text style={styles.label}>
      {label} {required && <Text style={{ color: "red" }}>*</Text>}
    </Text>
  );

  const renderInput = (
    key: keyof typeof form,
    label: string,
    placeholder: string,
    required = false,
    options: { secureTextEntry?: boolean; keyboardType?: any } = {}
  ) => (
    <View style={{ marginBottom: 15 }}>
      {renderLabel(label, required)}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={form[key]}
        onChangeText={(text) => handleChange(key, text)}
        secureTextEntry={options.secureTextEntry || false}
        keyboardType={options.keyboardType || "default"}
      />
      {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Farmer Signup</Text>

      {renderInput("name", "Full Name", "Enter your name", true)}
      {renderInput("age", "Age", "Enter age", true, { keyboardType: "numeric" })}
      {renderInput("location", "Location", "Enter location", true)}
      {renderInput("farmName", "Farm Name", "Enter farm name", true)}
      {renderInput("farmType", "Farm Type", "Ex: Crops + Livestock", true)}
      {renderInput("experience", "Experience", "Ex: 18 years in farming")}
      {renderInput("farmSize", "Farm Size", "Ex: 15 acres")}
      {renderInput("yearsRunning", "Years Running", "Ex: 20", false, {
        keyboardType: "numeric",
      })}
      {renderInput("animals", "Animals on Farm", "Ex: Poultry:150, Pigs:40")}
      {renderInput("certifications", "Certifications", "Ex: Organic Certified")}
      {renderInput("phone", "Phone", "Enter phone number", true, {
        keyboardType: "phone-pad",
      })}
      {renderInput("email", "Email", "Enter email", true, {
        keyboardType: "email-address",
      })}
      {renderInput("password", "Password", "Enter password", true, {
        secureTextEntry: true,
      })}

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
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 3,
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
