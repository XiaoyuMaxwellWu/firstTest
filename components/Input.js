import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-web';

export default function Input(onAdd) {
  const { onAdd } = onAdd;
  const [text, setText] = useState('');
  return (
    <>
      <TextInput style={styles.TextInput} onChangeText={(newText) => setText(newText)} value={text} placeholder="useless placeholder"></TextInput>
      <Button
        title="Confirm"
        onPress={() => {
          onAdd(text);
          setText('');
        }}
      ></Button>
    </>
  );
}
