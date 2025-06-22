import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC, PropsWithChildren, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Haptics from "expo-haptics";

import DiceOne from '../../assets/One.png'
import DiceTwo from '../../assets/Two.png'
import DiceThree from '../../assets/Three.png'
import DiceFour from '../../assets/Four.png'
import DiceFive from '../../assets/Five.png'
import DiceSix from '../../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice: FC<DiceProps> = ({ imageUrl }) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
}

export default function HomeScreen() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      default:
        setDiceImage(DiceSix);
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }

  return (
    <SafeAreaView
      style={styles.safeAreaView}
    >
      <StatusBar style='dark' />
      <View
        style={styles.container}
      >
        <Dice imageUrl={diceImage} />
        <Pressable
          style={styles.rollDiceBtn}
          onPress={() => rollDiceOnTap()}
        >
          <Text
            style={styles.rollDiceBtnText}
          >
            Roll the dice
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 16,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rollDiceBtn: {
    marginTop: 8,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  rollDiceBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    fontStyle: 'italic'
  }
})