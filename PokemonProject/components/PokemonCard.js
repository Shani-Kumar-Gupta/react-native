import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PokemonCard = () => {
  return (
    <View style={styles.card}>
      <Text>PokeMon Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    borderStyle: 'solid',
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        shadowOffset: { width: 2, height: 2 },
        // shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10,
      },
    }),
  },
});

export default PokemonCard;
