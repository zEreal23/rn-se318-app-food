import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';

import ListCategory from '../screens/ListCategory';
import ListMenu from '../screens/ListMenu';
import FoodDetail from '../screens/FoodDetail';
import Favorite from '../screens/Favorite'


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={ListCategory} />
            <Stack.Screen name="Menu" component={ListMenu} />
            <Stack.Screen name="Detail" component={FoodDetail} />
        </Stack.Navigator>
    )
}


function AppNav() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={({route})=>({
                tabBarIcon: () =>{
                    let iconName;
                    if(route.name=="Home"){
                        iconName="home"
                    } else if(route.name=="Favorite"){
                        iconName="favorite"
                    }
                    return <MaterialIcons name={iconName} size={24} />
                }
            })}>
                <Tabs.Screen name="Home" component={HomeNav} />
                <Tabs.Screen name="Favorite" component={Favorite} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNav;