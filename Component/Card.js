import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card =props=>{
return(<View style={{...styles.Card, ...props.style}} >{props.children}</View>);
};


const styles=StyleSheet.create({
    Card:
    {
      
        elevation:8,
        padding:20,
        backgroundColor:'white',
        borderRadius:10
    }

})




export default Card;
