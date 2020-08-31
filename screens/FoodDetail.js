import React from 'react';
import { View, Text, FlatList , StyleSheet , Image} from 'react-native';

import { MEALS } from '../data/dummy-data'

const FoodDetail = ({ navigation, route }) => {
    const { itemId } = route.params;
    return (
        <View>
            <FlatList
                data={MEALS}
                renderItem={({ item }) => {

                    if (itemId === item.id) {
                        return (
                            <View>
                                <Text style={styles.name}>{item.title}</Text>
                                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                                <Text>ingredients: {item.ingredients}</Text>
                                <Text>steps: {item.steps}</Text>
                            </View>
                        )
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

export default FoodDetail;