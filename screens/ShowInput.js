import React,{useLayoutEffect ,useState} from 'react';
import {View ,Text ,StyleSheet , TouchableOpacity} from 'react-native';

const ShowInput = (props) =>{
    
 
    return(
        <View style={styles.screen}> 
           <Text>Show Input</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   screen :{
       flex: 1,
       alignContent:'center' ,
       padding: 10
   }
})

export default  ShowInput;