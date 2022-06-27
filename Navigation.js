import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

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
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
        
    )

}