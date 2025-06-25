import { StyleSheet, useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { Colors } from '../constants/Colors';

type ThemedCardProps = PropsWithChildren<{
    style?: ViewStyle;
} & ViewProps> 

const ThemedCard: FC<ThemedCardProps> = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'] ?? Colors.light;

    return (
        <View
            style={
                [
                    {
                        backgroundColor: theme.uiBackground,
                    },
                    styles.card,
                    style
                ]
            }
            {...props}
        />
    )
}

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})