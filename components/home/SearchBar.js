import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({cityHandler}) {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row', paddingLeft: 7}}>
      <GooglePlacesAutocomplete
      query={{ key: "AIzaSyCy4fIcq8Nj5cfQfIuJnNe9Yhl7SVm7uAg" }}
      // important! this is all proprietary stuff for GooglePlacesAutocomplete https://www.npmjs.com/package/react-native-google-places-autocomplete
      //onPress gets called when you type in a location and select one it will pass the location object to the cityHandler function in Home.js
      onPress={(data, details = null) => {
        console.log(data.description)
        const city = data.description.split(',')[0]
        cityHandler(city)
      }}
      placeholder='Las Vegas, NV'
        styles={{
            textInput: {
                backgroundColor: '#eee',
                borderRadius: 20,
                fontWeight: '700',
                marginTop: 7,
            },
            textInputContainer:{
                backgroundColor: '#eee',
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
            }
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft : 12 }}>
           <Ionicons name='location-sharp' size={24} />
          </View>
           )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 10,
              backgroundColor: '#fff',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}
            >
               <Ionicons name='search' size={24} />
          </View>
          )}
        />
    </View>
  )
}