import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button , Alert} from 'react-native';
import { useSelector , useDispatch} from 'react-redux';

import {deleteProduct} from '../store/action/meals'

const ShowInput = (props) => {
  const dispatch = useDispatch();
  const addMeals = useSelector(state => state.meals.addProduct)
  console.log(addMeals)

  const editProductHandler = (key , mealtitle) =>{
    props.navigation.navigate("EditMeals" , {mealtitle : mealtitle})
  }

  const deleteHandler = (id) =>{
    console.log('Delete meal'+id);
    Alert.alert('Are you sure?','Do you really want to delete this item?',[
      {text: 'No' , style: 'default'},
      {
        text: 'Yes',
        style: ' destructive',
        onPress: () =>{
          dispatch(deleteProduct(id));
        },
      },
    ])
  }
 
  return (
    <View >
      <View style={styles.mealHeader}>
        <View style={styles.titleContainer}>
          <Text>{addMeals.key}</Text>
          <Text>{addMeals.id}</Text>
          <Text>{addMeals.catId}</Text>
        </View>
        <View style={styles.bgImage}>
          <Text style={styles.title}>{addMeals.mealtitle}</Text>
          <View style={styles.mealDetail}>
            <Text>{addMeals.afford}</Text>
            <Text>{addMeals.complex}</Text>
            <Text>{addMeals.imageurl}</Text>
            <Text>{addMeals.cooktime}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonED}>
        <Button 
          title="Edit" 
          color="blue"
          onPress={()=>editProductHandler(addMeals.key , addMeals.mealtitle)}
        /> 
        <Button 
          title="Delete" 
          color="red" 
          onPress={deleteHandler.bind(this, addMeals.key)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent: 'space-between',
    height: '15%',
  },
  buttonED:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    backgroundColor: 'white',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default ShowInput;