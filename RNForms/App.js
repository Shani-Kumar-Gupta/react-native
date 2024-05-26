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
      <View style={styles.cardContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Text"
          value={text}
          onChangeText={setText}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter Text"
          value={text}
          onChangeText={setText}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter Phone Number"
          value={text}
          onChangeText={setText}
          keyboardType='numeric'
        />
        <Text>{text}</Text>
        <TextInput
          style={[styles.inputText, styles.multiline]}
          placeholder="Enter Text"
          value={text}
          onChangeText={setText}
          autoCorrect={false}
          autoCapitalize='none'
          multiline
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    width: '90%',
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 5
  },
  inputText: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    height: 40,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});
