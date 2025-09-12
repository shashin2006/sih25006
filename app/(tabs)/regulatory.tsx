import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Regulatory() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Regulatory Authorities</Text>
      <Text style={styles.description}>
        Stay updated with compliance, biosecurity laws, and government reports.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Compliance Updates</Text>
        <Text style={styles.cardDescription}>New rules and policies affecting livestock farms.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reports</Text>
        <Text style={styles.cardDescription}>Submit and review your farm compliance reports.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#2E7D32' },
  description: { fontSize: 16, marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#4CAF50', padding: 16, borderRadius: 10, marginBottom: 16 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  cardDescription: { fontSize: 14, color: '#f1f1f1' },
});
