import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'
import Greeting from '../components/home/Greeting'
import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import Catagories from '../components/home/Catagories'

export default function Browse({navigation}) {

// hook for restaurantData we just set localRestaurants as default for now
const [restaurantData, setRestaurantData] = useState(localRestaurants)

//hook for setting the search term in the search bar we default to san francisco
const [city, setCity] = useState("San Francisco")

//sets the activeTab to delivery
const [activeTab, setActiveTab] = useState("Delivery")

const [activeCatagory, setActiveCatagory] = useState("restaurant")

// yelp API key
const YELP_API_KEY = 'lRyar_zMBsyvFD-6sKsiw0Jz92JgFoTAdpqTgBVmOLnT7maIZ3ndiO9fXOz4beywr56KHXqrcHDKIn3qAZr_2Vk07Z0TL6OQH2qfe3C8F1mFYktMXDjBPNzn8TeWYnYx'

// this is the fetch and set function for restaurantData using yelp API
const getRestaurantsFromYelp = () => {
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=${activeCatagory}&location=${city}&limit=50`
  
  // apiOptions is the object that will be passed to fetch
  const apiOptions = {
    //this sets the headers for the fetch. headers are used to set the authorization for the fetch
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
  
  return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    // this sets the restaurantData to the json data from the fetch but first it filters out the businesses that are not either 
    // delivery or takeout based on the activeTab
    .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
};

//useEffect is a hook that runs a function when the component mounts
//meaning it runs when the component is loaded in this case it runs the getRestaurantsFromYelp function
//the second argument is an array [] of variables that will change and cause the function to run again
useEffect(() => {
  getRestaurantsFromYelp();
}, [city, activeTab, activeCatagory]);

  return (
    <>
    <StatusBar backgroundColor="black" barStyle="white-content" />
      <SafeAreaView style={{backgroundColor: "#eee", height: "100%"}}>
        <View style={{ backgroundColor:"white", padding: 5}}>
           <SearchBar cityHandler ={setCity} />
           <Catagories activeCatagory={activeCatagory} setActiveCatagory={setActiveCatagory}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
            {/* <Catagories /> */}
            {/* the data passed below to RestaurantItems could be from yelp API or dummy data from localRestaurants */}
            <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
        </ScrollView>
          <Divider width={1} />
          <BottomTabs navigation={navigation} />
    </SafeAreaView>
    </>
  )
}