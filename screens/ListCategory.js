import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const ListCategory = (props) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: item.color,
                borderRadius: 20,
                flex: 1,
                margin: 15,
                height: 50,
                overflow: "hidden",
                alignItems: 'center'
              }}
              onPress={() => {
                props.navigation.navigate("Menu", {
                  itemId: item.id,
                });
              }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListCategory;
