import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function BottomTabs({navigation}) {
  return (
    <View style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
    }}>
        <Icon icon="home" text="Home" navigation={navigation}></Icon>
        <Icon icon="search" text="Browse" navigation={navigation}></Icon>
        <Icon icon="heart" text="Saved" navigation={navigation}></Icon>
        <Icon icon="receipt" text="Orders" navigation={navigation}></Icon>
        <Icon icon="user" text="Account" navigation={navigation}></Icon>
    </View>
  )
}

const Icon = ({navigation, ...props}) => (
    // button that navigates to the Home screen
    <TouchableOpacity onPress={() => navigation.navigate(props.text)}>  
        <View>
            <FontAwesome5 name={props.icon} size={25} style={{marginBottom: 3, alignSelf: "center"}} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)