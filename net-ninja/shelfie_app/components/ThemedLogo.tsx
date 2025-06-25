import { Image, ImageProps, useColorScheme } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

type ThemedLogoProps = PropsWithChildren<{} & ImageProps> 

const ThemedLogo: FC<ThemedLogoProps> = ({ ...props }) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo: LightLogo

    return (
        <Image source={logo} {...props} /> 
    )
}

export default ThemedLogo;