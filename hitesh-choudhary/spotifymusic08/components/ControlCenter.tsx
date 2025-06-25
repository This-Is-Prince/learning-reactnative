import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { MaterialIcons } from '@expo/vector-icons'

const ControlCenter = () => {
    const playbackState = usePlaybackState();

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex();

        if (currentTrack !== undefined && currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    return (
        <View
            style={styles.container}
        >
            <Pressable
                onPress={skipToPrevious}
            >
                <MaterialIcons style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable
                onPress={() => togglePlayback}
            >
                <MaterialIcons style={styles.icon} name={playbackState?.state === State.Playing? "pause": "play-arrow"} size={40} />
            </Pressable>
            <Pressable
                onPress={skipToNext}
            >
                <MaterialIcons style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    )
}

export default ControlCenter

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
});