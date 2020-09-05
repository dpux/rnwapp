import React from 'react';
import { View, Text } from "react-native"

export const CustomView = ({textStyle}) => {
    return (
        <View>
            <Text style={textStyle}>Hello from Web</Text>
        </View>
    )
}