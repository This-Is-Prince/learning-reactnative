import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.cardText}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.cardText}>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.cardText}>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.cardText}>Red</Text>
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
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 8
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        color: 'white'
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
})