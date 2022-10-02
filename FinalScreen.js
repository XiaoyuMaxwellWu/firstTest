import { View, Text, StyleSheet, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Colors from './constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Stylyings from './constants/Stylyings';

export default function FinalScreen(props) {
  const { retStartFlash, result, finalNum } = props;
  const url = 'https://picsum.photos/id/' + finalNum + '/100/100';
  return (
    <SafeAreaView style={styles.container}>
      <Header input={'Game is over'}></Header>
      <Card style={styles.box}>
        <Text style={styles.text}>Here's your picture</Text>
        <Image style={styles.tinyLogo} source={result ? { uri: url } : require('./assets/images/sadFace.jpeg')}></Image>
        <Button title="Start Again" onPress={retStartFlash} color={Colors.red}></Button>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.screenColor, alignItems: 'center' },
  box: {
    width: 250,
    justifyContent: 'space-evenly',
    height: 200,
    marginTop: 40,
  },
  text: {
    color: Colors.yellow,
    textAlign: 'center',
    fontSize: '20',
    marginTop: 5,
  },
  tinyLogo: {
    width: 75,
    height: 75,
  },
});
