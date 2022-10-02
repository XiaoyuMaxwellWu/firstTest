import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';
import FinalScreen from './FinalScreen';
let guessNum;
let tips;
let res;
let finalNum = generateRandomNum();
function generateRandomNum() {
  return Math.floor(Math.random() * 10 + 1020);
}
export default function App() {
  const [screen, setScreen] = useState('start');

  const onConfirm = function (number) {
    guessNum = number;
    tips = guessNum < finalNum ? 'bigger' : guessNum > finalNum ? 'smaller' : 'win';
    setScreen('game');
  };
  const retStart = function () {
    setScreen('start');
  };
  const retStartFlash = function () {
    finalNum = generateRandomNum();
    setScreen('start');
  };
  const jumpToFinal = function () {
    res = tips === 'win' ? true : false;
    setScreen('final');
  };
  return screen === 'start' ? (
    <StartScreen onConfirm={onConfirm}></StartScreen>
  ) : screen === 'game' ? (
    <GameScreen retStart={retStart} guessNum={guessNum} tips={tips} jumpToFinal={jumpToFinal}></GameScreen>
  ) : (
    <FinalScreen retStartFlash={retStartFlash} result={res} finalNum={finalNum}></FinalScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
