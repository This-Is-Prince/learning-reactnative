import { StyleSheet, Text, View } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton: FC<CurrencyButtonProps> = (props) => {
    return (
        <View
            style={styles.buttonContainer}
        >
            <Text
                style={styles.flag}
            >
                {props.flag}
            </Text>
            <Text
                style={styles.name}
            >
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        fontSize: 28,
        color: "#fff",
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        color: "#2d3436",
    }
})

export default CurrencyButton;