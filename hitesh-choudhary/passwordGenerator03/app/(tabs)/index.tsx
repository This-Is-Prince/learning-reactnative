import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters.')
    .max(16, 'Should be max of 16 characters.')
    .required('Password is required.')
})

export default function HomeScreen() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatedPassword = (passwordLength: number) => {
    let characters = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (upperCase) characters += upperCaseChars;
    if (lowerCase) characters += lowerCaseChars;
    if (numbers) characters += numberChars;
    if (symbols) characters += symbolChars;

    const passwordResult = createPassword(characters, passwordLength);
    return passwordResult;
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(Math.floor(characterIndex));
    }

    return result;
  }

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <SafeAreaView style={styles.padding}>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.appContainer}
      >
        <View
          style={styles.formContainer}
        >
          <Text style={[styles.title, styles.colorWhite]}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={(values) => {
              console.log('Form values:', values);
              const result = generatedPassword(Number(values.passwordLength));
              setPassword(result);
              setIsPassGenerated(true);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={[styles.heading, styles.colorWhite]}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={[styles.heading, styles.colorWhite]}>Include Lowercase</Text>
                  <View>
                    <BouncyCheckbox
                      isChecked={lowerCase}
                      onPress={() => setLowerCase((prev) => !prev)}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={[styles.heading, styles.colorWhite]}>Include Uppercase</Text>
                  <View>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => setUpperCase((prev) => !prev)}
                      fillColor="#FED85D"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={[styles.heading, styles.colorWhite]}>Include Numbers</Text>
                  <View>
                    <BouncyCheckbox
                      isChecked={numbers}
                      onPress={() => setNumbers((prev) => !prev)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={[styles.heading, styles.colorWhite]}>Include Symbols</Text>
                  <View>
                    <BouncyCheckbox
                      isChecked={symbols}
                      onPress={() => setSymbols((prev) => !prev)}
                      fillColor="#FC80A5"
                    />
                  </View>
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit as any}
                  >
                    <Text
                      style={styles.primaryBtnTxt}
                    >
                      Generate Password
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text
                      style={styles.secondaryBtnTxt}
                    >
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {
            isPassGenerated?
              <View
                style={[styles.card, styles.cardElevated]}
              >
                <Text style={styles.subTitle}>Result:</Text>
                <Text style={styles.description}>Long Press to copy</Text>
                <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
              </View>
            : null
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  padding: {
    padding: 16,
  },
  colorWhite: {
    color: 'white'
  },
  appContainer: {
    display: 'flex',
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#929292',
    color: 'white'
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5f6e7e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    color: 'white'
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
    marginTop: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});