import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },

];

export default function Catagories() {
  return (
    <View style={{backgroundColor: "#fff", marginTop: 5, paddingVertical: 10, paddingLeft: 22}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* loop starts here */}
      {items.map((item, index) => (
      <View key={index} style={{ alignItems: "center", marginRight: 20}}>
        <Image source={item.image} style={{ width: 50, height: 40, resizeMode: "contain" }} />
        <Text style={{ fontSize: 14, fontWeight: "900" }}>{item.text}</Text>
      </View>
      ))}
      {/* loops ends here */}
    </ScrollView>
    </View>

  )
}