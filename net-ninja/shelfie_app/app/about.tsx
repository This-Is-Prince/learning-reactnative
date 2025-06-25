import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>

      <Link
        href="/"
        style={{ marginTop: 20, color: 'blue', textDecorationLine: 'underline' }}
      >
        Back to Home
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})