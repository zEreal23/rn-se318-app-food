import React, { useLayoutEffect, useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import {toggleFavorite} from '../store/action/meals';


const FoodDetail = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);
    const { itemName, itemId, favMeal } = props.route.params;
    const selectedMeal = availableMeals.find(
        (meal) => meal.id === props.route.params.itemId
    );

    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(itemId));
    }, [dispatch]);

    const favthisMeals = useSelector(state => state.meals.favoriteMeals.some(
        meal => meal.id === itemId
    ));

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.favStyle}
                onPress={toggleFavoriteHandler}>
                    <MaterialIcons name={favthisMeals ? "star" : "star-border"} size={24} color="black"/>
                </ TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.mealDetail}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredient</Text>
            {selectedMeal.ingredients.map(ingredient => {
                return (
                    <View style={styles.details} key={ingredient}>
                        <Text>{ingredient}</Text>
                    </View>
                )
            })}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => {
                return (
                    <View style={styles.details} key={step}>
                        <Text>{step}</Text>
                    </View>
                )
            })}
            <Button title="Go to Back" onPress={() => props.navigation.navigate("Category")} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "auto",
        height: 200
    },
    mealDetail: {
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "5%",
    },
    details: {
        fontSize: 14,
        padding: 5,

    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 6,

    },
})

export default FoodDetail;