import { StyleSheet, TextProps, TextStyle, useColorScheme, Text } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { Colors } from '../constants/Colors';

type ThemedTextProps = PropsWithChildren<{
    style?: TextStyle;
    title?: boolean;
} & TextProps> 

const ThemedText: FC<ThemedTextProps> = ({ style, title = false, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'] ?? Colors.light;

    const textColor = title? theme.text: theme.text;

    return (
        <Text
            style={
                [
                    {
                        color: textColor
                    },
                    style
                ]
            }
            {...props}
        />
    )
}

export default ThemedText;