import { View, Text, Button, TextInput, Modal, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function Input(props) {
  const [text, setText] = useState('');
  const { modal, onAdd, onCancel } = props;
  return (
    <Modal visible={modal}>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/images/tiny_logo.png')}></Image>
        <TextInput style={styles.input} placeholder="write your goal here" onChangeText={(newText) => setText(newText)} value={text}></TextInput>
        <View style={styles.buttonAll}>
          <View style={styles.button}>
            <Button
              title="Confirm"
              disabled={text.length ? true : false}
              onPress={() => {
                onAdd(text);
                setText('');
              }}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                onCancel();
                setText('');
              }}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    color: '#ff00ff',
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    margin: 5,
  },
  button: {
    margin: 5,
    width: '30%',
  },
  buttonAll: {
    flexDirection: 'row-reverse',
  },
});
