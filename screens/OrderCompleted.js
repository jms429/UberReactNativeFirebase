import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

export default function OrderCompleted() {

 //useSelector is a hook that allows us to access the state of the store
 const {items, restaurantName: {restaurantName}} = useSelector((state) => state.cartReducer.selectedItems)

 /* console.log(items) would show something like
 [{'$14.50'},{'$12.50'},{'$4.00'}]
 we use replace to remove the $ from the price and Number to cvonvert strings to numbers
 [14.50,12.50,4.00]
   we use reduce to sum the prices for our cart
 [28.00]
 the 0 at the end is the initial value for the sum every time the reduce function is called */
 const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
 
 //number of items in the cart
 const numItems = items.length

 //this is the total price of the cart set to a string with $ and 2 decimal places
 const totalUSD =
  Platform.OS === 'android'  
     ?  '$' + total.toFixed(2)  
     :  total.toLocaleString('en-US', { style: 'currency', currency:'USD' });

  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <LottieView style={{height: 100, alignSelf: "center", marginBottom: 20}} source={require('../assets/animations/check-mark.json')} autoPlay speed={0.8} loop={false} />
      <Text>Your order at {restaurantName} has been placed for {totalUSD}</Text>
      <LottieView style={{height: 100, alignSelf: "center", marginBottom: 20}} source={require('../assets/animations/cooking.json')} autoPlay speed={0.8} loop={false} />
    </SafeAreaView>
  )
}