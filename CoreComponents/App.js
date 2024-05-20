import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'tomato' }}>
      <View style={{ backgroundColor: 'lightblue', height: 200, width: 200 }}></View>
      <View style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }}></View>
    </View>
  );
};

export default App;