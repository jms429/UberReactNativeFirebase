import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function Greeting(props) {
  return (
    <View>
        <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            marginVertical: 20,
            marginLeft: 10,
            color: "black",
        }}>Hello {props.name}</Text>
        <LottieView style={{ width: 40, marginVerical: 20}} source={require('../../assets/animations/clapping-hands.json')} autoPlay loop />
        </View>
    </View>
  )
}