import { View, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
export default function Card(props) {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}
//wrap up the card component
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.cardColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.36,
    shadowRadius: 8,
    elevation: 20,
    borderRadius: 10,
  },
});
