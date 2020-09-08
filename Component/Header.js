import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header= props=>{
    return(
        <View style={styles.headers}>
            <Text style={styles.headerTitle}>{props.title} </Text>
        </View>
    );
};


const styles= StyleSheet.create({
    headers:{
        
        width:'100%',
        height:90,
        paddingTop:35,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:
    {
        color:'black',
        fontSize:20
    }
});
export default Header;
