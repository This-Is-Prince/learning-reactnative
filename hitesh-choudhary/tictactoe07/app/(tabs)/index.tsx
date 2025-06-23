import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Icons from '@/components/Icons';

enum EGameState {
  EMPTY = 'empty',
  CROSS = 'cross',
  CIRCLE= 'circle'
}

export default function TabsMainScreen() {
  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState<EGameState[]>(new Array(9).fill(EGameState.EMPTY, 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill(EGameState.EMPTY, 0, 9));
  };

  const checkIsWinner = () => {
    if (gameState[0] !== EGameState.EMPTY && gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
      setGameWinner(`${gameState[0]} won the game!`)
    } else if (gameState[3] !== EGameState.EMPTY && gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
      setGameWinner(`${gameState[3]} won the game!`)
    } else if (gameState[6] !== EGameState.EMPTY && gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
      setGameWinner(`${gameState[6]} won the game!`)
    } else if (gameState[0] !== EGameState.EMPTY && gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
      setGameWinner(`${gameState[0]} won the game!`)
    } else if (gameState[1] !== EGameState.EMPTY && gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
      setGameWinner(`${gameState[1]} won the game!`)
    } else if (gameState[2] !== EGameState.EMPTY && gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
      setGameWinner(`${gameState[2]} won the game!`)
    } else if (gameState[0] !== EGameState.EMPTY && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
      setGameWinner(`${gameState[0]} won the game!`)
    } else if (gameState[2] !== EGameState.EMPTY && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
      setGameWinner(`${gameState[2]} won the game!`)
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      console.log('Game already won');
      return;
    }

    if (gameState[itemNumber] === EGameState.EMPTY) {
      setGameState((prevState) => [...prevState.slice(0, itemNumber), isCross ? EGameState.CROSS: EGameState.CIRCLE, ...prevState.slice(itemNumber + 1)]);
      setIsCross((prev) => !prev);
    } else {
      console.log('Item already selected');
    }

    checkIsWinner();
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      {
        gameWinner ? (
          <View
            style={[styles.playerInfo, styles.winnerInfo]}
          >
            <Text style={styles.winnerTxt}>
              {gameWinner}
            </Text>
          </View>
        ) : (
          <View
            style={[styles.playerInfo, isCross? styles.playerX: styles.playerO]}
          >
            <Text
              style={styles.gameTurnTxt}
            >
              Player {isCross ? 'X' : 'O'}&apos;s turn
            </Text>
          </View>
        )
      }

      <FlatList
        numColumns={3}
        data={gameState}
        keyExtractor={(item, index) => `${item}-${index}`}
        style={styles.grid}
        renderItem={({ item, index }) => (
          <Pressable
            key={`${item}-${index}`}
            style={styles.card}
            onPress={() => onChangeItem(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />

      <Pressable
        style={styles.gameBtn}
        onPress={reloadGame}
      >
        <Text
          style={styles.gameBtnText}
        >
          Reload!
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});