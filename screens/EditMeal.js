import React, { useState , useEffect , useLayoutEffect, useCallback} from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector , useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import {updateProduct} from '../store/action/meals'

const EditData = props => {
    return (
        <View>
            <Text style={styles.type}>{props.label}</Text>
            <TextInput
                style={styles.textinput}
                onChangeText={props.onChangeText}
                value={props.state}
            />
        </View>
    )
}

const EditMeal = (props) => {
    const {navigation} = props;
    const editMeals = useSelector(state => state.meals.addProduct)
    const [categoryIds, setCateId] = useState(editMeals.catId)
    const [title, setTitleName] = useState(editMeals.mealtitle)
    const [affordability, setAffordabillit] = useState(editMeals.afford)
    const [complexity, setComplexity] = useState(editMeals.complex)
    const [imageUrl, setImgeUrl] = useState(editMeals.imageurl)
    const [duration, setDuration] = useState(editMeals.cooktime)
    const dispatch = useDispatch(); 

    const updateHandler = useCallback(()=>{
        dispatch(updateProduct(
            editMeals.key,
            categoryIds,
            title,
            affordability,
            complexity,
            imageUrl,
            duration
        ))
        console.log("Update")
        console.log( editMeals.key, categoryIds, title, affordability, complexity, imageUrl, duration)
    },[dispatch, updateHandler , editMeals.key, categoryIds, title, affordability, complexity, imageUrl, duration])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{padding:10}} 
                    onPress={updateHandler} >
                    <AntDesign name="edit" size={24} color="white" />
                </ TouchableOpacity>
            ),
        }); 
    },[props.navigation, categoryIds, title, affordability, complexity, imageUrl, duration]) 

    return (
        <ScrollView style={styles.screen}>
            <View>
            <Text style={styles.type}>Meal id</Text>
            <Text style={styles.type}>{editMeals.id}</Text>
        </View>
            <EditData
                label="Category ID"
                state={categoryIds}
                onChangeText={(newText2) => setCateId(newText2)}
            />
            <EditData
                label="Title"
                state={title}
                onChangeText={(newText3) => setTitleName(newText3)}
            />
            <EditData
                label="Affordabillity"
                state={affordability}
                onChangeText={(newText4) => setAffordabillit(newText4)}
            />
            <EditData
                label="Complexity"
                state={complexity}
                onChangeText={(newText5) => setComplexity(newText5)}
            />
            <EditData
                label="ImageUrl"
                state={imageUrl}
                onChangeText={(newText6) => setImgeUrl(newText6)}
            />
            <EditData
                label="Duration in seconds"
                state={duration}
                onChangeText={(newText7) => setDuration(newText7)}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
        padding: 20
    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 5
    }
})

export default EditMeal;