import { StyleSheet } from 'react-native';
import Colors from './Colors';
//store all the stylyings
export default StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
  box: {
    width: 270,
    height: 200,
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  button: {
    margin: 5,
    width: '40%',
  },
  text: {
    color: Colors.yellow,
    textAlign: 'center',
    fontSize: '20',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  container: { flex: 1, alignItems: 'center' },
});
