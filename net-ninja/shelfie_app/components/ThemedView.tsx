import { useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { Colors } from '../constants/Colors';

type ThemedViewProps = PropsWithChildren<{
    style?: ViewStyle;
} & ViewProps> 

const ThemedView: FC<ThemedViewProps> = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'] ?? Colors.light;

    return (
        <View
            style={[{
                backgroundColor: theme.background,
            }, style]}
            {...props}
        />
    )
}

export default ThemedView;