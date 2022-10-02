import { View, SafeAreaView, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Colors from './constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Stylyings from './constants/Stylyings';

export default function StartScreen(props) {
  const [text, setText] = React.useState('');
  const { onConfirm } = props;
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={Stylyings.background} start={{ x: 0.5, y: 0 }} colors={[Colors.linearFirst, Colors.linearSecond]} />
      <Header input={'Guess My Number'}></Header>
      <Card style={styles.box}>
        <Text style={styles.text}>Enter a Number</Text>
        <TextInput style={styles.input} onChangeText={setText} value={text} keyboardType="numeric"></TextInput>
        <View style={styles.buttonAll}>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {
                if (!text || isNaN(text) || parseInt(text) > 1029 || parseInt(text) < 1020) {
                  Alert.alert('Invalid number!', 'Number has to be a nuber between 1020 and 1029.', [{ text: 'OKay', style: 'destructive' }]);
                } else {
                  onConfirm(text);
                }
              }}
              color={Colors.red}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {
                setText('');
              }}
              color={Colors.purple}
            ></Button>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  input: { borderBottomColor: Colors.yellow, width: '12%', borderBottomWidth: 2, color: Colors.yellow, margin: 40 },
  box: {
    width: 300,
    height: 200,
    margin: 40,
    marginTop: 50,
  },
  text: {
    color: Colors.yellow,
    textAlign: 'center',
    fontSize: '20',
    paddingTop: 10,
  },
  button: {
    margin: 5,
    width: '30%',
  },
  buttonAll: {
    flexDirection: 'row-reverse',
  },
});
