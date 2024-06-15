import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

function FactScreen({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState(route.params.fact);
  const [buttonVisible, setButtonVisible] = useState(false);

  const showButtonAfterDelay = () => {
    setButtonVisible(false); // Hide the button initially
    setTimeout(() => {
      setButtonVisible(true); // Show the button after 3 seconds
    }, 3000);
  };

  useEffect(() => {
    showButtonAfterDelay();
  }, []);

  const fetchAnotherFact = async () => {
    setLoading(true);
    setButtonVisible(false); // Hide the button when fetching starts
    try {
      // Fetch a random fact
      const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      const newFact = response.data;

      setFact(newFact.text);
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching facts.');
    } finally {
      setLoading(false);
      showButtonAfterDelay(); // Reset the button visibility timer
    }
  };

  const handleFetchAnotherFact = () => {
    setLoading(true);
    setTimeout(() => {
      fetchAnotherFact();
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text style={styles.fact}>{fact}</Text>
        )}
      </ScrollView>
      {!loading && buttonVisible && (
        <TouchableOpacity style={styles.button} onPress={handleFetchAnotherFact}>
          <Text style={styles.buttonText}>Generate Another Fact</Text>
        </TouchableOpacity>
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
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fact: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FactScreen;
