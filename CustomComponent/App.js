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
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox]}>
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
    width: 100,
    height: 100,
    padding: 10
  },
  lightBlueBox: {
    backgroundColor: 'lightblue',
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
  }
});
