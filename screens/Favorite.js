import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { CATEGORIES } from '../data/dummy-data';


const Favorite = (props) => {
    return (
        <View >
            <Text style={styels.listtext}>Favorite List</Text>
        </View>
    )
}

const styels = StyleSheet.create({
    listtext:{
        textAlign:'center',
        justifyContent: 'center',
        marginTop: 10
    }
})

export default Favorite
