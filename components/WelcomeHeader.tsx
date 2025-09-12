// components/WelcomeHeader.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>BioSecure Farm Hub</Text>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50',
    padding: 40,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  divider: {
    height: 4,
    backgroundColor: '#C8E6C9',
    width: '80%',
    marginTop: 15,
  },
});