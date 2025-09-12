import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Dashboard() {
  const router = useRouter();

  const sections = [
    {
      title: 'Farmers',
      description: 'Manage your farms, livestock, and daily records.',
      route: '/farmers',
      color: '#81C784',
      icon: 'tractor',
    },
    {
      title: 'Veterinarians',
      description: 'Track animal health, vaccination, and treatments.',
      route: '/veterinarians',
      color: '#4DB6AC',
      icon: 'stethoscope',
    },
    {
      title: 'Vendors',
      description: 'Connect with suppliers, feed providers, and tools.',
      route: '/vendors',
      color: '#64B5F6',
      icon: 'store',
    },
    {
      title: 'Regulatory Authorities',
      description: 'Stay updated with compliance, reports, and policies.',
      route: '/regulatory',
      color: '#9575CD',
      icon: 'gavel',
    },
  ];

  return (
    <View style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.title}>BioSecure Farm Hub</Text>
        <Text style={styles.subtitle}>
          Smart Farming • Animal Health • Compliance
        </Text>
      </View>

      {/* Cards */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {sections.map((item, index) => {
          const scaleAnim = useRef(new Animated.Value(1)).current;

          const handlePressIn = () => {
            Animated.spring(scaleAnim, {
              toValue: 0.96,
              useNativeDriver: true,
            }).start();
          };

          const handlePressOut = () => {
            Animated.spring(scaleAnim, {
              toValue: 1,
              friction: 3,
              tension: 40,
              useNativeDriver: true,
            }).start(() => {
              router.push(item.route);
            });
          };

          return (
            <TouchableWithoutFeedback
              key={index}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Animated.View
                style={[
                  styles.card,
                  { backgroundColor: item.color, transform: [{ scale: scaleAnim }] },
                ]}
              >
                <View style={styles.cardHeader}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={28}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                  </View>
                  <MaterialIcons name="chevron-right" size={28} color="white" />
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8F6',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#558B2F',
    marginTop: 6,
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  cardDescription: {
    fontSize: 14,
    color: '#f1f1f1',
    marginTop: 4,
  },
});
