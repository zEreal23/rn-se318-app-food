import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button
} from "react-native";
import {useSelector} from 'react-redux'

const ListMenu = (props) => {
  const { itemId, itemColor } = props.route.params;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const favMeals = useSelector(state => state.meals.favoriteMeals.some(
    meal => meal.id === itemId
  ));

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(itemId) >= 0
  )

  return (
    <View>
      <FlatList
        data={displayMeals}
        renderItem={({ item }) => {
          return (
            <View style={styles.mealItme}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Detail", {
                    itemId: item.id,
                    itemName: item.title,
                    favMeal: favMeals
                  });
                }}
              >
                <View style={{ height: 150 }}>
                  <View style={styles.mealHeader}>
                    <ImageBackground
                      source={{ uri: item.imageUrl }}
                      style={styles.bgImage}
                    >
                      <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                      </View>
                    </ImageBackground>
                    <View style={styles.mealDetail}>
                      <Text>{item.duration}m</Text>
                      <Text>{item.complexity.toUpperCase()}</Text>
                      <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Button title="Go to Back" onPress={() => props.navigation.navigate("Category")} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealItme: {
    height: 200,
    width: "80%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    overflow: "hidden",
    marginLeft: 45,
    marginTop: 10
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default ListMenu;
