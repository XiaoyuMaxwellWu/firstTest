import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = 'Xiaoyu';
  const onTextAdd = function (newText) {
    console.log(newText);
  };
  return (
    <View style={styles.container}>
      <Header appName={name}></Header>
      <Input onAdd={onTextAdd}></Input>
      <Text>Open up App.js to start working on your app!{name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
