import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items)
 /* console.log(items) would show something like
 [{'$14.50'},{'$12.50'},{'$4.00'}]
 we use replace to remove the $ from the price and Number to cvonvert strings to numbers
 [14.50,12.50,4.00]
  we use reduce to sum the prices for our cart
 [28.00]
 the 0 at the end is the initial value for the sum every time the reduce function is called */
  const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    //this is the total price of the cart set to a string with $ and 2 decimal places

  const totalUSD =
   Platform.OS === 'android'  
      ?  '$' + total.toFixed(2)  
      :  total.toLocaleString('en-US', { style: 'currency', currency:'USD' });

  console.log(totalUSD)

  return (
    //We put this view in a turnary operator to make sure that 
    //if the cart is empty we don't show the view cart button
    //{total ? ( VIEW ) : (<></>)} essentially
    <>
    {total ? (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", bottom: 310, zIndex: 999}}>
        <View style={{flexDirection: "row", justifyContent: "center", width: "100%"}}>
            <TouchableOpacity style={{marginTop: 20, backgroundColor: 'black', flexDirection: 'row', justifyContent: "center", padding: 15, borderRadius: 30, width: 300, alignItems: 'center', position: "relative"}}>
                <Text style={{ color: "white", fontSize: 20, marginRight: 10}}>View Cart</Text>
                <Text style={{ color: "white", fontSize: 20 , marginRight: 10}}>{totalUSD}</Text>
            </TouchableOpacity>
        </View>
      </View>) 
    : (<></>)}
    </>
  )
}