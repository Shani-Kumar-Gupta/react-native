import React from 'react';
import { View, Text } from 'react-native';

const Greet = ({ name, myStyle }) => {
  return (
    <View>
      <Text style={myStyle}>Hello, {name}</Text>
    </View>
  );
};

export default Greet