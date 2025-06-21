import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const imageUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ';

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace.</Text>
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
        color: 'white',
    },
    card: {
        padding: 8,
    },
    cardElevated: {},
    cardImage: {
        height: 180,
        borderRadius: 8,
    },
    cardBody: {
        display: 'flex',
        gap: 8,
        marginTop: 8,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: 'white',
    },
    cardLabel: {
        fontSize: 16,
        color: 'pink',
        fontStyle: 'italic',
    },
    cardDescription: {
        color: 'gray',
        fontSize: 14,
    },
})