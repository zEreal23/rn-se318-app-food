import React,{useLayoutEffect ,useState , useCallback} from 'react';
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
    const [melId , setMelId] = useState('')
    const [cateId , setCateId] = useState('')
    const [titleName , setTitleName] = useState('')
    const [affordabillit ,setAffordabillit] = useState('')
    const [complexity , setComplexity] = useState('')
    const [imageUrl , setImgeUrl] = useState('')
    const [duration , setDuration] = useState('')

    const dispatch = useDispatch(); 
    const submitHandler = useCallback(() => {
        const mealAttributes = {
            mealID: melId,
            catID: cateId,
            mealTitle: titleName,
            afford: affordabillit,
            complex: complexity,
            imageurl: imageUrl,
            cookTime: duration,
        };
        console.log(mealAttributes.mealID)
        dispatch(createProduct(mealAttributes.mealID, mealAttributes.catID, mealAttributes.mealTitle, mealAttributes.afford, mealAttributes.complex, mealAttributes.imageurl, mealAttributes.cookTime)); 
    }, [dispatch, melId, cateId, titleName, affordabillit, complexity, imageUrl, duration]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{padding:10}} 
                    onPress={submitHandler} >
                    <Feather name="inbox" size={24} color="white" />
                </ TouchableOpacity>
            ),
        });
    },[props.navigation])
 
    return(
        <ScrollView style={styles.screen}>
            <AddData 
                label = "Meal ID"
                state={melId}
                onChangeText={(newText) => setMelId(newText)}
            />
             <AddData 
                label = "Category ID"
                state={cateId}
                onChangeText={(newText) => setCateId(newText)}
            />
             <AddData 
                label = "Title"
                state={titleName}
                onChangeText={(newText) => setTitleName(newText)}
            />
             <AddData 
                label = "Affordabillity"
                state={affordabillit}
                onChangeText={(newText) => setAffordabillit(newText)}
            />
             <AddData 
                label = "Complexity"
                state={complexity}
                onChangeText={(newText) => setComplexity(newText)}
            />
             <AddData 
                label = "ImageUrl"
                state={imageUrl}
                onChangeText={(newText) => setImgeUrl(newText)}
            />
             <AddData 
                label = "Duration in seconds"
                state={duration}
                onChangeText={(newText) => setDuration(newText)}
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