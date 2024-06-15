import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function CreatorScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>About the Creators</Text>
        <Text style={styles.text}>
          This app was created by Balagulan, Calam, Deguino, Sagario, & SuayBaguio. We are a passionate developer with an interest in creating useful and engaging applications using the latest technologies.
        </Text>
        <Text style={styles.text}>
          In our spare time, we enjoy learning new programming languages, exploring artificial intelligence, and contributing to open-source projects.
        </Text>
        <Text style={styles.text}>
          Feel free to reach out to us alawabalo@gmail.com for any inquiries or collaboration opportunities.
        </Text>
      </ScrollView>
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
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CreatorScreen;
