import { Pressable, PressableProps, StyleSheet, ViewStyle } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { Colors } from '../constants/Colors';

type ThemedButtonProps = PropsWithChildren<{
    style?: ViewStyle;
} & PressableProps> 

const ThemedButton: FC<ThemedButtonProps> = ({ style, ...props }) => {

    return (
        <Pressable
            style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
            {...props}
        />
    )
}

export default ThemedButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.8,
    },
})