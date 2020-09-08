import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import  Header  from './component/header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {

  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRounds]=useState(0);

   const configureNewGameHandler=()=>{
     setGuessRounds(0);
     setUserNumber(null);
   };
 

  const startGameHandler= selectedNumber=>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler =numOfRounds =>{
    setGuessRounds(numOfRounds);
  };

  let content=<StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }

  else if(guessRounds>0)
  {
    content =<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
    }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}


    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
  flex:1

  }
  
});
