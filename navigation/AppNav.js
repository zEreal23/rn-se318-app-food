import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons , MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'


import ListCategory from '../screens/ListCategory';
import ListMenu from '../screens/ListMenu';
import FoodDetail from '../screens/FoodDetail';
import Favorite from '../screens/Favorite';
import Filter from '../screens/Filter'


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNav({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={ListCategory} options={{
                title: "Delicious Meals",
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerLeft: () => (
                    <TouchableOpacity  onPress={() => {
                        navigation.navigate("Filter");
                      }}>
                      <MaterialCommunityIcons name={"filter-variant"} size={24} />
                    </TouchableOpacity>
                  )
            }} />
            <Stack.Screen name="Menu" component={ListMenu} options={({ route }) => ({
                title: route.params.itemId + ":" + "Quick&Easy",
                headerStyle: {
                    backgroundColor: 'red',
                },
            })} />
            <Stack.Screen name="Detail" component={FoodDetail} options={({ route }) => ({
                title: route.params.itemId,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerRight: () => (
                    <TouchableOpacity >
                      <MaterialIcons name={"star-border"} size={24} />
                    </TouchableOpacity>
                  )
            })} />
            <Stack.Screen name="Filter" component={Filter}/>
        </Stack.Navigator>
    )
}


function AppNav() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    let iconName;
                    if (route.name == "Home") {
                        iconName = "home"
                    } else if (route.name == "Favorite") {
                        iconName = "star-border"
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