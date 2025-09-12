import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Redirect,useRouter  } from 'expo-router';
import WelcomeHeader from '../components/WelcomeHeader';

export default function Welcome() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WelcomeHeader />
      
      <View style={styles.content}>
        <Text style={styles.description}>
          BioSecure Farm Hub is your comprehensive solution for modern pig and poultry management. 
          Track the health of pigs and poultry, monitor them in a effectivand healthier way, manage resources, 
          and connect with the agricultural authourities and
          community - all in one secure platform.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8F5E9', // Pale green background
  },
  content: {
    padding: 20,
    paddingTop: 70,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 70,
    lineHeight: 25,
    color: '#2E7D32', // Dark green text
  },
  button: {
    backgroundColor: '#4CAF50', // Green button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});