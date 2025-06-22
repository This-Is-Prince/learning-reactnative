import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const [background, setBackground] = useState('#FFFFFF');

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    setBackground(`#${[1,2,3,4,5,6].map(() => hexRange.charAt(Math.floor(Math.random() * 16))).join('')}`)
  }

  return (
    <>
      <StatusBar backgroundColor='#000000' />
      <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
        <TouchableOpacity
          onPress={() => {
            generateColor();
          }}
        >
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>
              Press Me
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'
  }
})