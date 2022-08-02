import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../../assets/images/tacos.png"),
    text: "Mexican",
    meta: "mexican",
  },
  {
    image: require("../../assets/images/pizza.png"),
    text: "Pizza",
    meta: "pizza",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
    meta: "bakery",
  },
  {
    image: require("../../assets/images/steak.png"),
    text: "Steak",
    meta: "steak",
  },
  {
    image: require("../../assets/images/dish.png"),
    text: "Seafood",
    meta: "seafood",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
    meta: "fastfood",
  },
  {
    image: require("../../assets/images/ramen.png"),
    text: "Asian",
    meta: "asian",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee",
    meta: "coffee",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
    meta: "dessert",
  },

];

export default function Catagories({setActiveCatagory}) {
  return (
    <View style={{backgroundColor: "#fff", marginTop: 5, paddingVertical: 10, paddingLeft: 22}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* loop starts here */}
      {items.map((item, index) => (
        //toucvhableOpacity is a touchableOpacity that will trigger the onPress function when pressed
      <TouchableOpacity key={index} 
        style={{ alignItems: "center", marginRight: 20}}
        onPress={() => {
          setActiveCatagory(item.meta);
          console.log(item.meta)

        }}>

        <Image source={item.image} style={{ width: 60, height: 60, resizeMode: "contain" }} />
        <Text style={{ fontSize: 14, fontWeight: "900" }}>{item.text}</Text>
      </TouchableOpacity>
      ))}
      {/* loops ends here */}
    </ScrollView>
    </View>

  )
}