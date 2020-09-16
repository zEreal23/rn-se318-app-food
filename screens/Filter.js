import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Filter = (props) => {

    const SWfilter = (props) => {
        return (
            <View style={styles.filer}>
                <Text style={styles.type}>{props.label}</Text>
                <Switch
                    trackColor={{ false: "#FFFFFF", true: "#59BBFF" }}
                    thumbColor={isEnabled ? "#0097FF" : "#FFFFFF"}
                    onValueChange={props.onChange}
                    value={props.state}
                ></Switch>
            </View>
        )
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.favStyle} onPress={() => console.log('save')}  >
                    <MaterialIcons name="save" size={24} color="white" />
                </ TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    const [isEnabled, setIsEnabled] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.sceen}>
            <Text style={styles.title}>Availble Files/Restictions</Text>
            <SWfilter
                label="GlutenFree"
                state={isGlutenFree}
                onChange={(newValue) => setIsGlutenFree(newValue)} />

            <SWfilter
                label="LactoseFree"
                state={isLactoseFree}
                onChange={(newValue) => setIsLactoseFree(newValue)} />


            <SWfilter
                label="Vegan"
                state={isVegan}
                onChange={(newValue) => setIsVegan(newValue)} />


            <SWfilter
                label="Vegetarian"
                state={isVegetarian}
                onChange={(newValue) => setIsVegetarian(newValue)} />
        </View>
    )
}

const styles = StyleSheet.create({
    sceen:{
        alignItems: "center"
    },
    title: {
        padding: 10,
        fontSize: 24,
        textAlign: "center"
    },
    type: {
        fontSize: 24,
    },
    filer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
})

export default Filter;