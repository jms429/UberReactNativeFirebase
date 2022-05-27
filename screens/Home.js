import { StatusBar, View, Text, SafeAreaView, ScrollView,} from 'react-native'
import React from 'react'
import HeaderTab from '../components/HeaderTab'
// import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import Catagories from '../components/Catagories'
import RestaurantItems from '../components/RestaurantItems'
// import { ScrollView } from 'react-native-web'

export default function Home() {
  return (
    <>
    <StatusBar backgroundColor="black" barStyle="white-content" />
    <SafeAreaView style={{backgroundColor: "#eee", height: "100%"}}>
        <View style={{ backgroundColor:"white", padding: 15}}>
            <HeaderTab />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
            <Catagories />
            <RestaurantItems />
        </ScrollView>
    </SafeAreaView>
    </>
  )
}