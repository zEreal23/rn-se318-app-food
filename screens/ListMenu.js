import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { MEALS } from "../data/dummy-data";

const ListMenu = ({ navigation, route }) => {
  const { itemId } = route.params;
  console.log(itemId);

  return (
    <View>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <FlatList
        data={MEALS}
        renderItem={({ item }) => {
          for (let i = 0; i <= MEALS.length; i++) {
            if (itemId === item.categoryIds[i]) {
              return (
                <View style={styles.mealItme}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Detail", {
                        itemId: item.id,
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
            }
          }
        }}
        keyExtractor={(item) => item.id}
      />
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
    marginLeft: 45
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
