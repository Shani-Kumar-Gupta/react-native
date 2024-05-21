import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Greet name="Shani Kumar Gupta" myStyle={styles.title} />
      <Greet name="Aman Kumar" myStyle={styles.title} />
      <View style={[styles.box, styles.lightBlueBox, styles.boxShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox, styles.boxShadow, styles.andriodShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
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
  title: {
    fontSize: 24,
    color: 'lightgrey',
    fontWeight: 'bold',
  },
  box: {
    width: 250,
    height: 250,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 5
  },
  lightBlueBox: {
    backgroundColor: 'lightblue',
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  andriodShadow: {
    elevation: 10
  }
});
