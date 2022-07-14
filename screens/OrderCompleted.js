import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import firebase from '../firebase'
import MenuItems from '../components/restaurantDetail/MenuItems'



export default function OrderCompleted() {
const [ LastOrder, setLastOrder ] = React.useState({
  //this is a default value for the last order
  items: [
    {
      title: "Lasagna",
      description: "Chicken is a dish of meat, often with a side of vegetables, often in a stew or sauce",
      price: "$13.50",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
  ]
})
 //useSelector is a hook that allows us to access the state of the store
 const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)

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

//this useEffect is used to get the last order from the database
useEffect(() => {
    //this is the reference to the database
    const db = firebase.firestore();
    //this gets the last order from the database ordered by the 
    //date in descending order we set 
    //limit to 1 to get the last order
    //onSnapshot is a function that is called when the data is changed to
    //update the state of the component
    //doc is the document that is returned from the database
    const unsubscribe = db.collection('orders')
    .orderBy('createdAt', 'desc')
    .limit(1)
    .onSnapshot(snapshot => {
      snapshot.docs.map((doc) => {
        setLastOrder(doc.data())
      })
    }) 

    return () => unsubscribe()
  }, [])

  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <View style={{margin: 15, alignItems: "center", height: "100%"}}>
        <LottieView style={{height: 100, alignSelf: "center", marginBottom: 20}} source={require('../assets/animations/check-mark.json')} autoPlay speed={0.8} loop={false} />
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
        <ScrollView style={{backgroundColor: "#eee"}}>
         <MenuItems style={{ marginTop: 15}} foods={LastOrder.items} marginLeft={0} hideCheckbox={true}/>
        </ScrollView>
        <LottieView style={{height: 100, alignSelf: "center", marginBottom: 40}} source={require('../assets/animations/cooking.json')} autoPlay speed={0.8} loop={false} />
      </View>
    </SafeAreaView>
  )
}