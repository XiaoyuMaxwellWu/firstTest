import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
export default function Header(props) {
  const { input } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{input}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginTop: '5%' },

  text: {
    fontSize: 20,
    color: Colors.header,
    padding: '2%',
    borderWidth: 1,
    borderColor: Colors.header,
  },
});
