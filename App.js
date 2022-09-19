import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Header from './components/Header';

export default function App() {
  const name = 'Xiaoyu';
  const onTextAdd = function (newText) {
    console.log(newText);
  };
  return (
    <View style={styles.container}>
      <Button onPress={onPressLearnMore} title="Learn More" />
      <Header appName={name}></Header>
      <Input onAdd={onTextAdd}></Input>
      <Text>Open up App.js to start working on your app!{text}</Text>
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
