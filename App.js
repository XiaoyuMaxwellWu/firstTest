import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import FinalScreen from './screens/FinalScreen';
import Colors from './constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Stylyings from './constants/Stylyings';
//define and store all status in game
let guessNum;
let tips;
let res;
let finalNum = generateRandomNum();

//to generate random number between 1020 to 1029 inclusively
function generateRandomNum() {
  return Math.floor(Math.random() * 10 + 1020);
}
//main page
export default function App() {
  //conotrol to jump to each screen
  const [screen, setScreen] = useState('start');

  //compare the guess number and the final number
  const onConfirm = function (number) {
    guessNum = number;
    tips = guessNum < finalNum ? 'bigger' : guessNum > finalNum ? 'smaller' : 'win';
    setScreen('game');
  };
  // guess again
  const retStart = function () {
    setScreen('start');
  };
  //restart the game with flashing the final number
  const retStartFlash = function () {
    finalNum = generateRandomNum();
    retStart();
  };
  //decide whether or not to declare win
  const jumpToFinal = function () {
    res = tips === 'win' ? true : false;
    setScreen('final');
  };
  //control content according to game status
  let content =
    screen === 'start' ? (
      <StartScreen onConfirm={onConfirm}></StartScreen>
    ) : screen === 'game' ? (
      <GameScreen retStart={retStart} guessNum={guessNum} tips={tips} jumpToFinal={jumpToFinal}></GameScreen>
    ) : (
      <FinalScreen retStartFlash={retStartFlash} result={res} finalNum={finalNum}></FinalScreen>
    );
  return (
    <SafeAreaView style={Stylyings.container}>
      <LinearGradient style={Stylyings.background} start={{ x: 0.5, y: 0 }} colors={[Colors.linearFirst, Colors.linearSecond]} />
      {content}
    </SafeAreaView>
  );
}
