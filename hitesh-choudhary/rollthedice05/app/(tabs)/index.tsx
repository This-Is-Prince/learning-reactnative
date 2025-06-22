import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.safeAreaView}
    >
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  }
})