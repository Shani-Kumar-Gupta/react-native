import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import Box from './components/Box';
import { useState, useEffect } from 'react';

export default function App() {
  // const [dimensions, setDimentions] = useState({
  //   window: Dimensions
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener('change', (window) => {
  //     setDimentions({ window });
  //   });

  //   return subscription?.remove();
  // });

  // const { window } = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      {/* <Box style={{ backgroundColor: '#8e9b00', flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f', flex: 2 }}>Box 2</Box> */}
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 6,
    borderColor: 'red',
    flex: 1,
    // flexDirection: 'column',
    // flexDirection: 'row'
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
