import { View, Text, Button, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function Input(props) {
  const [text, setText] = useState('');
  const { onAdd } = props;
  return (
    <>
      <TextInput onChangeText={(newText) => setText(newText)} value={text} placeholder="useless placeholder"></TextInput>
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
