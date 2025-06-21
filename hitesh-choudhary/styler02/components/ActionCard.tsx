import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const imageUri = 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Whats new in React Native 0.72?
                    </Text>
                </View>
                <Image
                    source={{ uri: imageUri }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>
                        React Native 0.72 is here with exciting new features and improvements. This release focuses on performance, stability, and developer experience enhancements.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://reactnative.dev/blog/2023/08/07/version-0.72')}
                        style={styles.button}
                    >
                        <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white'
    },
    card: {
        margin: 8,
        backgroundColor: '#035899',
        borderRadius: 8,
    },
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 100
    },
    bodyContainer: {},
    footerContainer: {},
    button: {
        backgroundColor: 'white',
        width: 100,
        margin: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    readMore: {
        color: 'red'
    }
})