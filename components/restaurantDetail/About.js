import { View, Text, Image } from 'react-native'
import React from 'react'

//original hard coded dummy data
// const image = "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
// const title = "Farmhouse Thai Restaurant"
// const description = "Thai * Comfort Food • $$ * 🎟️ * 4 ⭐(2913+)"


// dummy data for restaurant
// const yelpRestaurantInfo = {
//   name: 'Dummy`',
//   image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   price: '$',
//   reviews: '1400',
//   rating: '4.5',
//   categories: [{ title: 'Thai'}, { title: 'Asian'}],
// }


export default function About(props) {

  
//this is the props that are passed in from the parent component of restaurantDetail called RestaurantItems
const  { name, image, price, reviews, rating, categories} = props.route.params;


//this formats the categories into a string
const formattedCategories = categories.map((cat) => cat.title).join(', ');

//this is the description of the restaurant that is displayed on the restaurant detail page
const description = `${formattedCategories} • ${price ? price : "" } • 🎟️ • ${rating} ⭐ (${reviews})`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

//this is the image of the restaurant that is displayed on the restaurant detail page
const RestaurantImage = (props) => (
    <Image source={{ uri: props.image}} style={{ width: "100%", height: 160 }} />
)

//this is the name of the restaurant that is displayed on the restaurant detail page
const RestaurantName = (props) => (
    <Text style={{ fontSize: 29, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>{props.name}</Text>
)

//this is the description of the restaurant that is displayed on the restaurant detail page
const RestaurantDescription = (props) => (
    <Text style={{ fontSize: 15.5, marginTop: 10, marginHorizontal: 15, fontWeight: "400" }}>{props.description}</Text>
)