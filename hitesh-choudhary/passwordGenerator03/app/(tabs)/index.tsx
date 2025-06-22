import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {} from 'yup';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.padding}>
      <Text style={styles.textWhite}>HomeScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
  textWhite: {
    color: 'white',
  }
})