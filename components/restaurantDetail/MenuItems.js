import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'


export default function MenuItems({restaurantName, foods, marginLeft, hideCheckbox}) {
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
        { hideCheckbox ? (<></>) : 
        (<BouncyCheckbox 
          iconStyle={{borderColor: "lightgray", borderRadius: 40}} 
          fillColor= "green"
          onPress={(checkboxValue) => selectItem(food, checkboxValue)}
          isChecked={isFoodInCart(food, cartItems)}/>) }
        <FoodInfo food={food} />
        <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image 
      source={{ uri: props.food.image}} 
      style={{ width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft }} />
  </View>
)