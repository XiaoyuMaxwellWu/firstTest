import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';
import { Button } from 'react-native';

export default function App() {
  const name = 'Welcome to myApp!';
  const [modelVisible, setModuleVisible] = useState(false);
  const makeModalVisible = () => {
    setModuleVisible(true);
  };
  const makeModalInVisible = () => {
    setModuleVisible(false);
  };
  const onTextAdd = function (newText) {
    console.log(newText);
    setModuleVisible(false);
  };
  return (
    <SafeAreaView flex="1" style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Header appName={name}></Header>
        </View>

        <Button title="Add a Goal" onPress={makeModalVisible}></Button>
      </View>
      <Input modal={modelVisible} onAdd={onTextAdd} onCancel={makeModalInVisible}></Input>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>You typed...</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderWidth: 3,
    borderColor: 'thistle',
    borderRadius: 50,
  },
  text: {
    backgroundColor: '#aaa',
    borderRadius: 5,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 30,
  },
});
