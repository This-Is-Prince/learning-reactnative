import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { currencyByRupee } from '@/constants/currency'
import { Snackbar,  } from 'react-native-paper';
import { Currency } from '@/types'
import CurrencyButton from '@/components/CurrencyButton'

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')
  const [snackbar, setSnackbar] = useState({
    backgroundColor: 'white',
    text: 'Unknown',
    visible: false,
  })
  const insets = useSafeAreaInsets();

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      setSnackbar({
        backgroundColor: '#EA7773',
        text: 'Enter a value to convert',
        visible: true,
      })
      return;
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed()} 🤑`
      setResultValue(result);
      setTargetCurrency(targetValue.name)
    } else {
      setSnackbar({
        backgroundColor: '#EA7773',
        text: 'Not a valid number to convert',
        visible: true,
      })
    }
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Snackbar
        visible={snackbar.visible}
        onDismiss={() => setSnackbar((prev) => {
          return {
            ...prev,
            visible: false
          }
        })}
        duration={1000}
        style={{
          backgroundColor: '#EA7773',
          width: '90%',
          marginHorizontal: 'auto',
          top: insets.top,
        }}
        wrapperStyle={{
          zIndex: 1000
        }}
      >
        {snackbar.text}
      </Snackbar>
      <View
        style={styles.container}
      >
        <View
          style={styles.topContainer}
        >
          <View
            style={styles.rupeesContainer}
          >
            <Text
              style={styles.rupee}
            >
              ₹
            </Text>
            <TextInput
              style={styles.rupeeInput}
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={(v) => setInputValue(v)}
              keyboardType='number-pad'
              placeholder='Enter amount in Rupees'
            />
          </View>
          {
            resultValue && (
              <Text style={styles.resultTxt}>
                {resultValue}
              </Text>
            )
          }
        </View>
        <View
          style={styles.bottomContainer}
        >
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#515151',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeeInput: {
    width: '90%'
  },
  rupeesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    // display: 'flex',
  },
  button: {
    display: 'flex',
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});