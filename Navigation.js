import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import Account from "./screens/Account";
import Browse from "./screens/Browse";
import Saved from "./screens/Saved";
import Orders from "./screens/Orders";

const store1 = configureStore();

export default function RootNavigation() {

    
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }


    return (
        <ReduxProvider store={store1}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}/>
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted}/>
                    <Stack.Screen name="Account" component={Account}/>
                    <Stack.Screen name="Browse" component={Browse}/>
                    <Stack.Screen name="Saved" component={Saved}/>
                    <Stack.Screen name="Orders" component={Orders}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
        
    )

}