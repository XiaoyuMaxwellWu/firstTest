import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

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
    color: '#531EF9',
    padding: '2%',
    borderWidth: 1,
    borderColor: '#531EF9',
  },
});
