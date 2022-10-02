import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Card(props) {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#3b0361',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.36,
    shadowRadius: 8,
    elevation: 20,
    borderRadius: 20,
  },
});
