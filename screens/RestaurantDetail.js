import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'



export default function RestaurantDetail({route, navigation}) {

  //this is our dummy data for the items in the menu
  const foods = [
    {
      title: "Lasagna",
      description: "Chicken is a dish of meat, often with a side of vegetables, often in a stew or sauce",
      price: "$13.50",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Tandoori Tandoori Tandoori Tandoori Chicken",
      description: "Amazingly delicious chicken tandoori is a dish of chicken cooked in a clay oven.",
      price: "$19.20",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    
    {
      title: "Chilaquiles",
      description: "Chilaquiles are a dish of Mexican cuisine, consisting of a corn tortilla filled with a filling, usually ground meat, cheese, or vegetables.",
      price: "$14.50",
      image: "https://images.unsplash.com/photo-1640719028782-8230f1bdc42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"  
    },
    {
      title: "Ceasar Salad",
      description: "Ceasar Salad is a salad made with romaine lettuce, croutons, and Parmesan cheese.",
      price: "$11.50",
      image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Lasagna",
      description: "Chicken is a dish of meat, often with a side of vegetables, often in a stew or sauce",
      price: "$13.50",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Tandoori Chicken",
      description: "Amazingly delicious chicken tandoori is a dish of chicken cooked in a clay oven.",
      price: "$19.20",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    
    {
      title: "Chilaquiles",
      description: "Chilaquiles are a dish of Mexican cuisine, consisting of a corn tortilla filled with a filling, usually ground meat, cheese, or vegetables.",
      price: "$14.50",
      image: "https://images.unsplash.com/photo-1640719028782-8230f1bdc42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"  
    },
    {
      title: "Ceasar Salad",
      description: "Ceasar Salad is a salad made with romaine lettuce, croutons, and Parmesan cheese.",
      price: "$11.50",
      image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Lasagna",
      description: "Chicken is a dish of meat, often with a side of vegetables, often in a stew or sauce",
      price: "$13.50",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Tandoori Chicken",
      description: "Amazingly delicious chicken tandoori is a dish of chicken cooked in a clay oven.",
      price: "$19.20",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    
    {
      title: "Chilaquiles",
      description: "Chilaquiles are a dish of Mexican cuisine, consisting of a corn tortilla filled with a filling, usually ground meat, cheese, or vegetables.",
      price: "$14.50",
      image: "https://images.unsplash.com/photo-1640719028782-8230f1bdc42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"  
    },
    {
      title: "Ceasar Salad",
      description: "Ceasar Salad is a salad made with romaine lettuce, croutons, and Parmesan cheese.",
      price: "$11.50",
      image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
  ]

  
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 10}} />
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation} />
    </View>
  )
}