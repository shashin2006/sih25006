import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Vendors() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Vendors Hub</Text>
      <Text style={styles.description}>
        Connect with suppliers, purchase feed, and track your orders.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feed Suppliers</Text>
        <Text style={styles.cardDescription}>Find nearby vendors for poultry and pig feed.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Equipment Providers</Text>
        <Text style={styles.cardDescription}>Get tools and machinery for your farm.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#2E7D32' },
  description: { fontSize: 16, marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#66BB6A', padding: 16, borderRadius: 10, marginBottom: 16 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  cardDescription: { fontSize: 14, color: '#f1f1f1' },
});
