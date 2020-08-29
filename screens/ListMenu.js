import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { MEALS } from '../data/dummy-data'

const ListMenu = ({ navigation, route }) => {

    const { itemId } = route.params;
    console.log(itemId)

    return (
        <View>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <FlatList
                data={MEALS}
                renderItem={({ item }) => {
                    for (let i = 0; i <= MEALS.length; i++) {
                        if (itemId === item.categoryIds[i]) {
                            return (
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Detail', {
                                              itemId: item.id,
                                            });
                                          }}>
                                        <Text style={styles.name}>{item.title}</Text>
                                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        padding: 7,
        flexDirection: 'row',
    },
    image: {
        height: 120,
        width: 250,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
})


export default ListMenu;