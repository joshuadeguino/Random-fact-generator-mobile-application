import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const suggestFact = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      const fact = response.data;

      navigation.navigate('Fact', { fact: fact.text });
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching facts.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./img/logo.webp')} style={styles.logo} />
      <Text style={styles.header}>Welcome to the Fact Generator</Text>
      <Text style={styles.description}>
        Tap the button below to get a random fact that will amaze you!
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={suggestFact}>
            <Text style={styles.buttonText}>Suggest a Fact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Creator')}>
            <Text style={styles.smallButtonText}>My Creator</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#555',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginTop: 20,
    marginBottom: 10, 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallButtonText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'right',
    marginTop: 10,
    textDecorationLine: 'underline', 
  },
});

export default HomeScreen;
