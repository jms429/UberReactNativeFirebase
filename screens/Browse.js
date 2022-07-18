import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

export default function Browse({navigation}) {
  return (
    <>
    <StatusBar backgroundColor="black" barStyle="white-content" />
    <SafeAreaView style={{backgroundColor: "#eee", height: "100%"}}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Browse</Text>
              </View>
          </View>
          <Divider width={1} />
          <BottomTabs navigation={navigation} />
    </SafeAreaView>
    </>
  )
}