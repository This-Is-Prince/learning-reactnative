import { DimensionValue, View, ViewProps } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'

type SpacerProps = PropsWithChildren<{
    width?: DimensionValue;
    height?: DimensionValue;
} & ViewProps>;

const Spacer: FC<SpacerProps> = ({ width = "100%", height = 40, ...props }) => {
    return (
        <View style={[{ width, height }, props.style]} {...props} />
    )
}

export default Spacer