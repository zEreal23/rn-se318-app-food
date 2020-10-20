import React,{useLayoutEffect ,useState , useCallback ,useEffect} from 'react';
import {View , TextInput ,Text ,StyleSheet , TouchableOpacity ,ScrollView} from 'react-native';
import { useDispatch } from 'react-redux'
import {createProduct} from '../store/action/meals'

import { Feather } from '@expo/vector-icons';

const AddData = props =>{
    return(
        <View>
            <Text style={styles.type}>{props.label}</Text>
            <TextInput
                style={styles.textinput}
                onChangeText={props.onChangeText}
                value={props.state}
                />
        </View>
    )
}

const AddFood = (props) =>{
    const {navigation} = props;
    const [mealid , setMelId] = useState('')
    const [categoryIds, setCateId] = useState('')
    const [title , setTitleName] = useState('')
    const [affordability ,setAffordabillit] = useState('')
    const [complexity , setComplexity] = useState('')
    const [imageUrl , setImgeUrl] = useState('')
    const [duration , setDuration] = useState('')
    const dispatch = useDispatch(); 

    const submitHandler = useCallback(() => {
        const mealAttributes = {
            mealID: mealid,
            catID: categoryIds,
            mealTitle: title,
            afford: affordability, 
            complex: complexity,
            imageurl: imageUrl,
            cookTime: duration,
        };
        console.log(mealAttributes)
        dispatch(createProduct(mealAttributes.mealID, mealAttributes.catID, mealAttributes.mealTitle, mealAttributes.afford, mealAttributes.complex, mealAttributes.imageurl, mealAttributes.cookTime));
    }, [mealid, categoryIds, title, affordability, complexity, imageUrl, duration ,dispatch])

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{padding:10}} 
                    onPress={submitHandler} >
                    <Feather name="inbox" size={24} color="white" />
                </ TouchableOpacity>
            ),
        }); 
    },[props.navigation , submitHandler]) 

    return(
        <ScrollView style={styles.screen}>
            <AddData  
                label = "Meal ID"
                state={mealid}
                onChangeText={(newText1) => setMelId(newText1)}
            />
             <AddData 
                label = "Category ID"
                state={categoryIds}
                onChangeText={(newText2) => setCateId(newText2)}
            />
             <AddData 
                label = "Title"
                state={title}
                onChangeText={(newText3) => setTitleName(newText3)}
            />
             <AddData 
                label = "Affordabillity"
                state={affordability}
                onChangeText={(newText4) => setAffordabillit(newText4)}
            />
             <AddData 
                label = "Complexity"
                state={complexity}
                onChangeText={(newText5) => setComplexity(newText5)}
            />
             <AddData 
                label = "ImageUrl"
                state={imageUrl}
                onChangeText={(newText6) => setImgeUrl(newText6)}
            />
             <AddData 
                label = "Duration in seconds"
                state={duration}
                onChangeText={(newText7) => setDuration(newText7)}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   screen :{
       flex: 1,
       alignContent:'center' ,
       padding: 20
   },
   textinput:{
    height: 40,
    borderColor: 'gray', 
    borderBottomWidth: 2,
    marginBottom:5
   }
})

export default  AddFood;