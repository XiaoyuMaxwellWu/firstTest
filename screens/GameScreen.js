import { View, Text, StyleSheet, Modal, Button, SafeAreaView, Header, Image } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Stylyings from '../constants/Stylyings';

export default function GameScreen(props) {
  const { retStart, guessNum, tips, jumpToFinal } = props;
  //use tips to control which modal should be visible
  return (
    <>
      <Modal visible={tips == 'win' ? false : true}>
        <View style={[Stylyings.container, { justifyContent: 'center' }]}>
          <LinearGradient style={Stylyings.background} start={{ x: 0.5, y: 0 }} colors={[Colors.linearFirst, Colors.linearSecond]} />
          <Card style={Stylyings.box}>
            <View>
              <Text style={Stylyings.text}>You have chosen {guessNum}</Text>
              <Text style={Stylyings.text}>That's not my number!</Text>
              <Text style={Stylyings.text}>Guess {tips}!</Text>
            </View>
            <Button title="I am done" onPress={jumpToFinal} color={Colors.purple}></Button>
            <Button title="Let Me Guess Again" onPress={retStart} color={Colors.red}></Button>
          </Card>
        </View>
      </Modal>
      <Modal visible={tips == 'win' ? true : false}>
        <View style={[Stylyings.container, { justifyContent: 'center' }]}>
          <LinearGradient style={Stylyings.background} start={{ x: 0.5, y: 0 }} colors={[Colors.linearFirst, Colors.linearSecond]} />
          <Card style={[Stylyings.box, { height: 200 }]}>
            <Text style={Stylyings.text}>Congrats! You Won!</Text>
            <View style={Stylyings.button}>
              <Button color={Colors.red} title="Thank you!" onPress={jumpToFinal}></Button>
            </View>
          </Card>
        </View>
      </Modal>
    </>
  );
}
