import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import HeaderTab from '../components/HeaderTab'
// import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee" }}>
        <View style={{ backgroundColor:"white", padding: 15}}>
            <HeaderTab />
            <SearchBar />
        </View>
    </SafeAreaView>

  )
}