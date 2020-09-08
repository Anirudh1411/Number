import React from 'react';

import {View,Text,StyleSheet,Button} from 'react-native';

const GameOverScreen = props =>{
    return(
    <View style={styles.screen}>
        <Text>The Game is Over..!</Text>
    <Text>Number of rounds:{props.roundsNumber}</Text>
    <Text>Number was:{props.userNumber}</Text>
    <Button title="New Game" onPress={props.onRestart}/>
    </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});



export default GameOverScreen;
