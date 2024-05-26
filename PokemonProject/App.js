import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <PokemonCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
