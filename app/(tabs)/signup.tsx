import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema
const signupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email'),
  preferredLanguage: Yup.string().required('Preferred Language is required'),
  farmName: Yup.string().required('Farm Name is required'),
  location: Yup.string().required('Location is required'),
  farmSize: Yup.string().required('Farm Size is required'),
  species: Yup.string().required('Select species'),
  numberOfAnimals: Yup.number().required('Enter number of animals'),
  source: Yup.string().required('Source is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
});

export default function Signup() {
  const router = useRouter();

  const handleSignup = (values: any) => {
    console.log(values);
    // After signup redirect to login
    router.push('/Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Farmer Signup</Text>

        <Formik
          initialValues={{
            fullName: '',
            gender: '',
            age: '',
            phone: '',
            email: '',
            preferredLanguage: '',
            farmName: '',
            location: '',
            farmSize: '',
            species: '',
            numberOfAnimals: '',
            source: '',
            username: '',
            password: '',
          }}
          validationSchema={signupSchema}
          onSubmit={handleSignup}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              {/* Farmer Info */}
              <TextInput style={styles.input} placeholder="Full Name (Farmer / Owner)"
                onChangeText={handleChange('fullName')} onBlur={handleBlur('fullName')}
                value={values.fullName} />
              {touched.fullName && errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

              <TextInput style={styles.input} placeholder="Gender (optional)"
                onChangeText={handleChange('gender')} onBlur={handleBlur('gender')}
                value={values.gender} />

              <TextInput style={styles.input} placeholder="Age (optional)" keyboardType="numeric"
                onChangeText={handleChange('age')} onBlur={handleBlur('age')}
                value={values.age} />

              <TextInput style={styles.input} placeholder="Phone Number"
                keyboardType="phone-pad" onChangeText={handleChange('phone')} onBlur={handleBlur('phone')}
                value={values.phone} />
              {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

              <TextInput style={styles.input} placeholder="Email (optional)" keyboardType="email-address"
                onChangeText={handleChange('email')} onBlur={handleBlur('email')}
                value={values.email} />
              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

              <TextInput style={styles.input} placeholder="Preferred Language"
                onChangeText={handleChange('preferredLanguage')} onBlur={handleBlur('preferredLanguage')}
                value={values.preferredLanguage} />
              {touched.preferredLanguage && errors.preferredLanguage && <Text style={styles.errorText}>{errors.preferredLanguage}</Text>}

              {/* Farm Info */}
              <TextInput style={styles.input} placeholder="Farm Name"
                onChangeText={handleChange('farmName')} onBlur={handleBlur('farmName')}
                value={values.farmName} />
              {touched.farmName && errors.farmName && <Text style={styles.errorText}>{errors.farmName}</Text>}

              <TextInput style={styles.input} placeholder="Location"
                onChangeText={handleChange('location')} onBlur={handleBlur('location')}
                value={values.location} />
              {touched.location && errors.location && <Text style={styles.errorText}>{errors.location}</Text>}

              <TextInput style={styles.input} placeholder="Farm Size"
                onChangeText={handleChange('farmSize')} onBlur={handleBlur('farmSize')}
                value={values.farmSize} />
              {touched.farmSize && errors.farmSize && <Text style={styles.errorText}>{errors.farmSize}</Text>}

              {/* Livestock Info */}
              <TextInput style={styles.input} placeholder="Species (Pig / Poultry / Both)"
                onChangeText={handleChange('species')} onBlur={handleBlur('species')}
                value={values.species} />
              {touched.species && errors.species && <Text style={styles.errorText}>{errors.species}</Text>}

              <TextInput style={styles.input} placeholder="Number of Animals" keyboardType="numeric"
                onChangeText={handleChange('numberOfAnimals')} onBlur={handleBlur('numberOfAnimals')}
                value={values.numberOfAnimals} />
              {touched.numberOfAnimals && errors.numberOfAnimals && <Text style={styles.errorText}>{errors.numberOfAnimals}</Text>}

              <TextInput style={styles.input} placeholder="Source of Animals (Hatchery / Local Market / Imports)"
                onChangeText={handleChange('source')} onBlur={handleBlur('source')}
                value={values.source} />
              {touched.source && errors.source && <Text style={styles.errorText}>{errors.source}</Text>}

              {/* Credentials */}
              <TextInput style={styles.input} placeholder="Username / Phone ID"
                onChangeText={handleChange('username')} onBlur={handleBlur('username')}
                value={values.username} />
              {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

              <TextInput style={styles.input} placeholder="Password" secureTextEntry
                onChangeText={handleChange('password')} onBlur={handleBlur('password')}
                value={values.password} />
              {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

              {/* Submit */}
              <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/Login')}>
                <Text style={styles.switchText}>Already have an account? Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2E7D32',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontSize: 13,
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#4CAF50',
    textAlign: 'center',
  },
});
