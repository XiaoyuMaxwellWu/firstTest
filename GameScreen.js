import { View, Text, StyleSheet, Modal, Button, SafeAreaView, Header, Image } from 'react-native';
import React from 'react';
import Card from './components/Card';
import Colors from './constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Stylyings from './constants/Stylyings';

export default function GameScreen(props) {
  const { retStart, guessNum, tips, jumpToFinal } = props;

  return (
    <>
      <Modal visible={tips == 'win' ? false : true}>
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <LinearGradient style={Stylyings.background} start={{ x: 0.5, y: 0 }} colors={[Colors.linearFirst, Colors.linearSecond]} />

          <Card style={styles.box}>
            <View>
              <Text style={styles.text}>You have chosen {guessNum}</Text>
              <Text style={styles.text}>That's not my number!</Text>
              <Text style={styles.text}>Guess {tips}!</Text>
            </View>
            <Button title="I am done" onPress={jumpToFinal} color={Colors.purple}></Button>
            <Button title="Let Me Guess Again" onPress={retStart} color={Colors.red}></Button>
          </Card>
        </View>
      </Modal>
      <Modal visible={tips == 'win' ? true : false}>
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <LinearGradient style={Stylyings.background} start={{ x: 0.5, y: 0 }} colors={[Colors.linearFirst, Colors.linearSecond]} />

          <Card style={[styles.box, { height: 200 }]}>
            <Text style={styles.text}>Congrats! You Won!</Text>
            <View style={styles.button}>
              <Button color={Colors.red} title="Thank you!" onPress={jumpToFinal}></Button>
            </View>
          </Card>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.screenColor, alignItems: 'center' },
  box: {
    width: 250,
    justifyContent: 'space-evenly',
    marginTop: 40,
    height: 200,
  },
  text: {
    color: Colors.yellow,
    textAlign: 'center',
    fontSize: '20',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin: 5,
  },
});
