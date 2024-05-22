import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform
} from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

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
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            // {
            //   width: windowWidth > 500 ? '70%' : '90%',
            //   height: windowHeight > 600 ? '60%' : '90%',
            // },
          ]}
        >
          <Text
            style={[
              styles.text,
              // {
              //   fontSize: windowWidth > 500 ? 50 : 24,
              // },
            ]}
          >
            Welcome!
          </Text>
          <Text>Hello</Text>
          <CustomButton title="Press me" onPress={() => alert('Presset')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    // justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? 45 : 0
  },
  box: {
    // backgroundColor: 'lightblue',
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '90%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 40
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
    ...Platform.select({
      ios: {
        fontSize: 30
      },
      android: {
        fontSize: 40
      }
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
