import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

//this is dummy food item data
const foods = [
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



export default function MenuItems(restaurantName) {


//dispatch sends the action to the reducer and the item is added to the cart
//we also send the restaurant name to the cart so we can display it in the cart
const dispatch = useDispatch();
const selectItem = (item, checkboxValue) =>
  //condition to check if the checkbox is checked
  //if it is checked, we add the item to the cart
  //if it is not checked, we remove the item from the cart
  dispatch({
    type: checkboxValue ? "ADD_TO_CART" : "REMOVE_FROM_CART",
    payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue}
  });

//we use useSelector to get the state from the reducer
const cartItems = useSelector((state) => 
    state.cartReducer.selectedItems.items);

const isFoodInCart = (food, cartItems) => 
  Boolean(cartItems.find(item => item.title === food.title))
  

  return (

    //marginBottom was added to fix scrollview bug with android
    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 70}}>
    {foods.map((food, index) => (
    <View key={index}>
      <View style={styles.menuItemStyle}>
        <BouncyCheckbox 
          iconStyle={{borderColor: "lightgray", borderRadius: 40}} 
          fillColor= "green"
          onPress={(checkboxValue) => selectItem(food, checkboxValue)}
          isChecked={isFoodInCart(food, cartItems)}/>
        <FoodInfo food={food} />
        <FoodImage food={food} />
      </View>
      <Divider width={0.5} orientation={"vertical"} style={{marginHorizontal: 20}}/>
    </View>
  ))}
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  menuItemStyle : {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },

})

const FoodInfo = (props) => (
  <View style ={{ width: 240, justifyContent: "space-evenly"}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
)

const FoodImage = (props) => (
  <View>
    <Image 
      source={{ uri: props.food.image}} 
      style={{ width: 100, height: 100, borderRadius: 8 }} />
  </View>
)