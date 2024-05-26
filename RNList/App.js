import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  SectionList,
} from 'react-native';
import pokemonList from './data.json';
import groupPokemonList from './grouped-data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Approach 1 */}
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((item) => {
          return (
            <View style={styles.pokenMonCard} key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.type}</Text>
            </View>
          );
        })}
        </ScrollView> */}

      {/* Approach 2 */}
      <View style={styles.scrollView}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.pokenMonCard} key={item.id}>
                <Text>{item.name}</Text>
                <Text>{item.type}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id?.toString()}
          // horizontal
          ItemSeparatorComponent={<View style={{ height: 16 }} />} // Render a component after each item is rendered
          ListEmptyComponent={<Text>No item found</Text>}
          ListHeaderComponent={<Text>Random Pokemon List</Text>}
          ListFooterComponent={<Text>Pokemon List Ended!</Text>}
          ListHeaderComponentStyle={{
            backgroundColor: 'lightgreen',
            padding: 16,
            marginBottom: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          ListFooterComponentStyle={{
            backgroundColor: 'lightblue',
            padding: 16,
            marginVertical: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        /> */}

        <SectionList
          sections={groupPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.pokenMonCard}>
                <Text>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <Text>{section.type}</Text>
            )
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />} // Render a component after each item is rendered
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
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
  },
  scrollView: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  pokenMonCard: {
    backgroundColor: 'white',
    padding: 16,
    // marginBottom: 16,
    borderRadius: 8,
    ...Platform.select({
      android: {
        elevation: 5,
        shadowOpacity: 0.3,
      },
    }),
  },
});
