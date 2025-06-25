import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addTrack, setupPlayer } from '@/musicPlayerServices';

export default function TabsMainScreen() {
  const [isPlayerReady, setIsPlayerReader] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReader(isSetup);
  }

  useEffect(() => {
    (async () => {
      await setup();
    })();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <Text>TabsMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})