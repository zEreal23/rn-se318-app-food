import React, { useLayoutEffect, useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Button, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'

import { setFilters } from '../store/action/meals';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SWfilter = (props) => {
    return (
        <View style={styles.filer}>
            <Text style={styles.type}>{props.label}</Text>
            <Switch
                trackColor={{ false: "#FFFFFF", true: "#59BBFF" }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                onValueChange={props.onChange}
                value={props.state}
            ></Switch>
        </View>
    )
}

const Filter = (props) => {
    const {navigation} = props;

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.favStyle} 
                onPress={saveFilters} >
                    <MaterialIcons name="save" size={24} color="white" />
                </ TouchableOpacity>
            ),
        });
    },[props.navigation])

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch(); 
    const saveFilters = useEffect(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree, 
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian, 
        };
        console.log(appliedFilters)
        navigation.setParams({appliedFilters}); 
        dispatch(setFilters(appliedFilters)); 
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(()=>{
        navigation.setParams({saveFilters}); 
    },[saveFilters]) 

    return (
        <View style={styles.sceen}>
            <Text style={styles.title}>Availble Files/Restictions</Text>
            <SWfilter
                label="GlutenFree"
                state={isGlutenFree}
                onChange={(newValue) => setIsGlutenFree(newValue)}
            />

            <SWfilter
                label="LactoseFree"
                state={isLactoseFree}
                onChange={(newValue) => setIsLactoseFree(newValue)}
            />


            <SWfilter
                label="Vegan"
                state={isVegan}
                onChange={(newValue) => setIsVegan(newValue)}
            />


            <SWfilter
                label="Vegetarian"
                state={isVegetarian}
                onChange={(newValue) => setIsVegetarian(newValue)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sceen: {
        alignItems: "center"
    },
    title: {
        padding: 10,
        fontSize: 24,
        textAlign: "center"
    },
    type: {
        fontSize: 24,
        margin: 3
    },
    filer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
})

export default Filter;