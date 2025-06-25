import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Favicon from '../assets/favicon.png'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View
            style={styles.container}
        >
            <Image source={Favicon} />

            <Text style={styles.title}>The Number 1</Text>

            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </Text>

            <View
                style={styles.card}
            >
                <Text>Hello, this is a card.</Text>
            </View>

            <Link
                href="/about"
                style={styles.link}
            >
                Go to About Page
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    },
    link: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    }
})