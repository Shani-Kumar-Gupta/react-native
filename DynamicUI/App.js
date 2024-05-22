import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

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
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: windowWidth > 500 ? 50 : 24,
            },
          ]}
        >
          Welcome!
        </Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: 'lightblue',
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
  },
});
