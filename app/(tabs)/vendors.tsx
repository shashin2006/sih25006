// app/VendorTracking.tsx
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

// Static vendor data
const vendors = [
  {
    id: 1,
    name: "Green Valley Transports",
    location: "Springfield, IL",
    lastFarmVisited: "Sunshine Poultry Farm",
    epidemicArea: "No",
    govAuthorized: "Yes",
    vehicleAuthorized: "Yes",
    vehicleSanitized: "Yes",
    vehicleNumber: "IL-7890",
    riskLevel: "good"
  },
  {
    id: 2,
    name: "Midwest Livestock Carriers",
    location: "Indianapolis, IN",
    lastFarmVisited: "Oakwood Pig Farm",
    epidemicArea: "Yes (Avian Flu detected nearby)",
    govAuthorized: "Yes",
    vehicleAuthorized: "Yes",
    vehicleSanitized: "No",
    vehicleNumber: "IN-4567",
    riskLevel: "medium"
  },
  {
    id: 3,
    name: "Heartland Animal Transport",
    location: "Louisville, KY",
    lastFarmVisited: "Riverbend Poultry Farm",
    epidemicArea: "Yes (Active outbreak)",
    govAuthorized: "No",
    vehicleAuthorized: "No",
    vehicleSanitized: "No",
    vehicleNumber: "KY-1234",
    riskLevel: "very-high"
  }
];

// Risk assessment alerts
const showRiskAlert = (vendor: any) => {
  if (vendor.riskLevel === "very-high") {
    Alert.alert(
      "VERY HIGH RISK ALERT",
      `Vehicle ${vendor.vehicleNumber} is not allowed to export! Immediate quarantine recommended.`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  } else if (vendor.riskLevel === "high") {
    Alert.alert(
      "HIGH RISK ALERT",
      `Vehicle ${vendor.vehicleNumber} is not allowed to export! Requires deep sanitization.`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  } else if (vendor.riskLevel === "medium") {
    Alert.alert(
      "MEDIUM RISK ALERT",
      `Vehicle ${vendor.vehicleNumber} should be sanitized at the entry before proceeding.`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  } else if (vendor.riskLevel === "low") {
    Alert.alert(
      "LOW RISK",
      `Vehicle ${vendor.vehicleNumber} has low risk. Proceed with standard protocols.`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  } else {
    Alert.alert(
      "GOOD CONDITION",
      `Vehicle ${vendor.vehicleNumber} is allowed to export. No risks detected.`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  }
};

// Risk assessment text
const getRiskAssessment = (riskLevel: string) => {
  switch (riskLevel) {
    case "very-high": return "Very High Risk";
    case "high": return "High Risk";
    case "medium": return "Medium Risk";
    case "low": return "Low Risk";
    default: return "Good Condition - No Risk";
  }
};

// Risk colors
const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case "very-high": return "#FF0000";
    case "high": return "#FF4500";
    case "medium": return "#FFA500";
    case "low": return "#32CD32";
    default: return "#2E7D32";
  }
};

export default function VendorTracking() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* ✅ Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/dashboard")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Vendor Import/Export Tracking</Text>
          <Text style={styles.subtitle}>Pig & Poultry Transport Monitoring</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Vendors submit information via QR code at gate entry. Tap any vendor to view risk assessment.
          </Text>
        </View>

        {vendors.map((vendor) => {
          const riskAssessment = getRiskAssessment(vendor.riskLevel);
          const riskColor = getRiskColor(vendor.riskLevel);

          return (
            <TouchableOpacity
              key={vendor.id}
              onPress={() => showRiskAlert(vendor)}
              activeOpacity={0.7}
            >
              <View style={styles.vendorCard}>
                <View style={styles.vendorHeader}>
                  <Text style={styles.vendorName}>{vendor.name}</Text>
                  <View style={[styles.riskIndicator, { backgroundColor: riskColor }]}>
                    <Text style={styles.riskText}>{riskAssessment}</Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Vehicle Number:</Text>
                  <Text style={styles.detailValue}>{vendor.vehicleNumber}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Location:</Text>
                  <Text style={styles.detailValue}>{vendor.location}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Last Farm Visited:</Text>
                  <Text style={styles.detailValue}>{vendor.lastFarmVisited}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Epidemic Area:</Text>
                  <Text style={[styles.detailValue, vendor.epidemicArea !== "No" ? styles.warningText : styles.safeText]}>
                    {vendor.epidemicArea}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Gov Authorized:</Text>
                  <Text style={[styles.detailValue, vendor.govAuthorized === "Yes" ? styles.safeText : styles.dangerText]}>
                    {vendor.govAuthorized}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Vehicle Authorized:</Text>
                  <Text style={[styles.detailValue, vendor.vehicleAuthorized === "Yes" ? styles.safeText : styles.dangerText]}>
                    {vendor.vehicleAuthorized}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Vehicle Sanitized:</Text>
                  <Text style={[styles.detailValue, vendor.vehicleSanitized === "Yes" ? styles.safeText : styles.dangerText]}>
                    {vendor.vehicleSanitized}
                  </Text>
                </View>

                <View style={styles.tapInstruction}>
                  <Text style={styles.tapInstructionText}>Tap card to view risk assessment</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.footer}>
          <Text style={styles.footerText}>BioSecure Farm Hub - Vendor Tracking System</Text>
          <Text style={styles.footerNote}>Based on vendors submitted information</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9' },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 4,
  },
  backButton: { marginRight: 10 },
  title: { fontSize: 20, fontWeight: "bold", color: "white" },
  subtitle: { fontSize: 14, color: "white" },

  infoBox: {
    backgroundColor: '#DCEDC8',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  infoText: { color: '#2E7D32', fontSize: 14, textAlign: 'center' },

  vendorCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  vendorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  vendorName: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', flex: 1 },
  riskIndicator: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginLeft: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  riskText: { color: 'white', fontWeight: 'bold', fontSize: 12 },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  detailLabel: { fontWeight: '600', color: '#555', width: '40%' },
  detailValue: { width: '55%', textAlign: 'right' },

  safeText: { color: '#2E7D32', fontWeight: '600' },
  warningText: { color: '#FF8C00', fontWeight: '600' },
  dangerText: { color: '#FF0000', fontWeight: '600' },

  tapInstruction: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    alignItems: 'center',
  },
  tapInstructionText: { color: '#4CAF50', fontStyle: 'italic', fontSize: 12 },

  footer: { padding: 20, alignItems: 'center', marginTop: 10, marginBottom: 20 },
  footerText: { color: '#2E7D32', fontWeight: '600', marginBottom: 5 },
  footerNote: { color: '#666', fontSize: 12, textAlign: 'center' },
});
