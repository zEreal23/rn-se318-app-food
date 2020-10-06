import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
 
const Favorite = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length === 0 || !favMeals){
    return(
      <View style={styles.content}>
        <Text>No Favorite in list!</Text>
      </View>
    )
  }
 
  const renderMealItem = (itemData) => {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate('Detail', {
            itemId: itemData.item.id,
            itemName: itemData.item.title,
          });
        }}>
          <View style={{ height: 150 }}>
            <View style={styles.mealHeader}>
             
              <ImageBackground
                source={{ uri: itemData.item.imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {itemData.item.title}
                  </Text>
                </View>
              </ImageBackground>
              <View style={styles.mealDetail}>
                <Text>{itemData.item.duration}m</Text>
                <Text>{itemData.item.complexity.toUpperCase()}</Text>
                <Text>{itemData.item.affordability.toUpperCase()}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
 
  return (
    <View style={styles.screen}>
      <FlatList
        data={favMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealHeader: {
    paddingTop: 20,
    height: '85%'
  },
  mealDetail: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});
 
export default Favorite;