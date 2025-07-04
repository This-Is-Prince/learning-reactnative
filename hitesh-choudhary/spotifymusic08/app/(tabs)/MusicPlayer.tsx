import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';

const { width } = Dimensions.get('window')

export default function MusicPlayer() {
    const [track, setTrack] = useState<Track | null>(null);

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        switch (event.type) {
            case Event.PlaybackActiveTrackChanged:
                // const playingTrack = TrackPlayer.getTrack()
                break;
        }
    })

    const renderArtWork = () => {
        return (
            <View
                style={styles.listArtWrapper}
            >
                <View
                    style={styles.albumContainer}
                >
                    {track?.artwork? (
                        <Image
                            style={styles.albumArtImg}
                            source={{
                                uri: track.artwork.toString()
                            }}
                        />
                    ): null}
                </View>
            </View>
        )
    };

    return (
        <View>
        <Text>MusicPlayer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
});
  