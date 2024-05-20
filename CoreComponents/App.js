import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'tomato', padding: 50 }}>
      {/* <View style={{ backgroundColor: 'lightblue', height: 200, width: 200 }}></View>
      <View style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }}></View> */}
      <Text>
        <Text style={{ color: 'white' }}>Hello, </Text>React Native!
      </Text>
    </View>
  );
};

export default App;
