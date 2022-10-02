import { View, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Stylyings from '../constants/Stylyings';

export default function StartScreen(props) {
  //store all the input text
  const [text, setText] = React.useState('');
  const { onConfirm } = props;
  return (
    <View style={Stylyings.container}>
      <Header input={'Guess My Number'}></Header>
      <Card style={Stylyings.box}>
        <Text style={Stylyings.text}>Enter a Number</Text>
        <TextInput style={styles.input} onChangeText={setText} value={text} keyboardType="numeric"></TextInput>
        <View style={styles.buttonAll}>
          <View style={Stylyings.button}>
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
          <View style={Stylyings.button}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderBottomColor: Colors.yellow, width: '12%', borderBottomWidth: 2, color: Colors.yellow, margin: 40 },
  buttonAll: {
    flexDirection: 'row-reverse',
  },
});
