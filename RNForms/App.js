import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Text"
        value={text}
        onChangeText={setText}
      />
      <Text>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  inputText: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    height: 40,
  },
});
