import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import firebase from '../../firebase'
import LottieView from 'lottie-react-native'


export default function ViewCart( { navigation } ) {
  //this is the modal that will show up when the user clicks the view cart button
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false);

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

  // this adds the order to the database
  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };
      
  // stylesheet for the modal
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.7)",
      justifyContent: 'flex-end',
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subtotalText: {
      textAlign: "left",
      fontSize: 15,
      fontWeight: "600",
      marginBottom: 10,
    },
    checkOutContainer: {
      flexDirection: "row", 
      justifyContent: "center",
    },
    checkOutButton: {
      marginTop: 20, 
      backgroundColor: "black", 
      alignItems: "center", 
      padding: 13, 
      borderRadius: 30, 
      width: 300, 
      position: "relative",
    },
    checkOutText: { 
      color: "white", 
      fontSize: 20,
    },
    viewCartContainer: {
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "row", 
      position: "absolute", 
      bottom: 310, 
      zIndex: 999,
    },
    viewCart: {
      flexDirection: "row", 
      justifyContent: "center", 
      width: "100%"
    },
    viewCartButton: {
      marginTop: 20, 
      backgroundColor: 'black', 
      flexDirection: 'row', 
      justifyContent: "center", 
      padding: 15, 
      borderRadius: 30, 
      width: 300, 
      alignItems: 'center', 
      position: "relative"
    },
    viewCartText: {
      color: "white", 
      fontSize: 20, 
      marginRight: 10
    },
    loadingContainer: {
      backgroundColor: "white",
      position: "absolute",
      opacity: 0.8,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
  })


//this is the function that will show the modal
  const checkOutModalContent = () => {
    return(
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {/* //this is the scrollview that will show the items in the cart */}
            <ScrollView style={{backgroundColor: "#eee"}} showsVerticalScrollIndicator={true}>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
              ))}
            </ScrollView>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
              <View style={styles.checkOutContainer}> 
                <TouchableOpacity style={styles.checkOutButton} 
                  onPress={() => {
                    addOrderToFireBase()
                    setModalVisible(false)}
                  }>
                  <Text style={styles.checkOutText}>Checkout ({numItems})</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </>
    )
  }


  return (
/*We put this view in a turnary operator to make sure that 
  if the cart is empty we don't show the view cart button
{total ? ( VIEW ) : (<></>)} essentially */
    <>
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      {checkOutModalContent()}
    </Modal>
    {total ? (
      <View style={styles.viewCartContainer}>
        <View style={styles.viewCart}>
          {loading ? (<></>) : (
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.viewCartButton}>
                <Text style={styles.viewCartText}>View Cart</Text>
                <Text style={styles.viewCartText}>{totalUSD}</Text>
            </TouchableOpacity>)
            }
        </View>
      </View>) 
    : (<></>)}
     {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView style={{ height: 400, top: -50}} source={require("../../assets/animations/loading.json")} autoPlay speed={3}/>
        </View>
      ) 
      : (<></>)
      }
    </>
  )
}