import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Platform } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map((item) => {
          return (
            <View style={styles.pokenMonCard} key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.type}</Text>
            </View>
          );
        })}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 16,
    marginTop: 16
  },
  pokenMonCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    ...Platform.select({
      android: {
        elevation: 5,
        shadowOpacity: 0.3
      }
    })
  }
});
