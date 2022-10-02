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
    <View style={Stylyings.container}>
      <Header input={'Game is over'}></Header>
      <Card style={Stylyings.box}>
        <Text style={Stylyings.text}>Here's your picture</Text>
        <Image style={styles.tinyLogo} source={result ? { uri: url } : require('./assets/images/sadFace.jpeg')}></Image>
        <Button title="Start Again" onPress={retStartFlash} color={Colors.red}></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 75,
    height: 75,
  },
});
