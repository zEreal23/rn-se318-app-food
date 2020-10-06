import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

import ListCategory from '../screens/ListCategory';
import ListMenu from '../screens/ListMenu';
import FoodDetail from '../screens/FoodDetail';
import Favorite from '../screens/Favorite';
import Filter from '../screens/Filter';
import AddFood from '../screens/AddFood';
import ShowInput from '../screens/ShowInput'


const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
        <MaterialIcons name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
    )
}

const Stack = createStackNavigator();
function HomeNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={ListCategory} options={{
                title: "Delicious Meals",
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
                headerLeft: () => <HeaderLeft />
            }} />
            <Stack.Screen name="Menu" component={ListMenu} options={({ route }) => ({
                title: route.params.itemId + ":" + "Quick&Easy",
                headerStyle: {
                    backgroundColor: route.params.itemColor,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
            })} />
            <Stack.Screen name="Detail" component={FoodDetail} options={({ route }) => ({
                title: route.params.itemId + ":" + route.params.itemName,
                headerStyle: {
                    backgroundColor: route.params.itemColor,
                }
            })} />
        </Stack.Navigator>
    )
}

function FilterNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}>
            <Stack.Screen name="Filter" component={Filter} options={{
                title: "Filter Meals",
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
            }}/>
        </Stack.Navigator>
    )
}

function FavoriteNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={Favorite} />
        </Stack.Navigator>
    )
}

function AddNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}>
            <Stack.Screen name="Add" component={AddFood} options={{
                title: "Add a New Meal",
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
            }} />
        </Stack.Navigator>
    )
}

function ShowNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}>
            <Stack.Screen name="Show" component={ShowInput} options={{
                title: "Show New Meals",
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
            }} />
        </Stack.Navigator>
    )
}

const Tabs = createBottomTabNavigator();
function TabsNav({  navigation, route }) {
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: () => {
                let iconName;
                if (route.name == "Home") {
                    iconName = "home"
                } else if (route.name == "Favorite") {
                    iconName = "star"
                }
                return <MaterialIcons name={iconName} size={24} />
            }
        })}>
            <Tabs.Screen name="Home" component={HomeNav} />
            <Tabs.Screen name="Favorite" component={FavoriteNavigator} />
        </Tabs.Navigator>
    )
}

const Drawer = createDrawerNavigator();
function MyDrawer({navigation}) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsNav} />
            <Drawer.Screen name="Filter" component={FilterNavigator} />
            <Drawer.Screen name="Add Meals" component={AddNavigator} />
            <Drawer.Screen name="Show New Meals" component={ShowNavigator} />
        </Drawer.Navigator>
    );
}




function AppNav({navigation,route}) {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}
export default AppNav;