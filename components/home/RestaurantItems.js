import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

// make sure you add 'export' to access in other Files. this is dummy data passed to Home.js and passed backed to props below
export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "Jason's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 1.9,
    },
  ];

export default function RestaurantItems({ navigation, ...props }) {
  return (    
        <>
        {/* loops starts */}
          {props.restaurantData.map((restaurant, index) => (
            <TouchableOpacity 
              key={index}
              activeOpacity={1} 
              style={{ marginBottom: 5}}
              onPress= {()=> navigation.navigate("RestaurantDetail", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })}
            >
              <View key={index} style={{backgroundColor: "#fff", marginTop: 5, padding: 15}}>
                  <RestaurantImage image={restaurant.image_url} />
                  <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
              </View>
            </TouchableOpacity>
          ))}
        </> 
        // loop ends   
  );
}

const RestaurantImage = (props) => (
    <>   
        <Image source={{ uri: props.image }} style={{width: "100%", height: 180}} />
        <TouchableOpacity style={{position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View 
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            }}
        >
        <View>
            <Text style={{fontSize: 15, fontWeight: "900"}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: "grey"}}>30-45 minutes</Text>
        </View>
        <View style={{backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", borderRadius: 15, justifyContent: "center"}}>
            <Text>{props.rating}</Text>
        </View>
   
    </View>
)




