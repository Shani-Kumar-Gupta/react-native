import { View, Text, Image, ImageBackground } from 'react-native';
import myImg from './assets/adaptive-icon.png';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'tomato', padding: 50 }}>
      {/* <View style={{ backgroundColor: 'lightblue', height: 200, width: 200 }}></View>
      <View style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }}></View> */}
      <ImageBackground source={myImg} style={{ flex: 1 }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'blue' }}>
          <Text style={{ color: 'white' }}>Hello, </Text>React Native!
        </Text>
        {/* <Image
          source={myImg}
          alt="testImg"
          style={{ width: 300, height: 300 }}
        /> */}
        {/* <Image
          source={{ uri: 'https://picsum.photos/300' }}
          alt="testImg"
          style={{ width: 300, height: 300 }}
        /> */}
      </ImageBackground>
    </View>
  );
};

export default App;
