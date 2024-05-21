import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import { useState } from 'react';
import myImg from './assets/adaptive-icon.png';

const App = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'tomato', padding: 50 }}>
      {/* <View style={{ backgroundColor: 'lightblue', height: 200, width: 200 }}></View>
      <View style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }}></View> */}
      <ImageBackground source={myImg} style={{ flex: 1 }}>
        <Pressable
          onPress={() => console.log('Text Pressed')}
          onPressIn={() => console.log('Text Pressed In')}
          onPressOut={() => console.log('Text Pressed Out')}
          onLongPress={() => console.log('Text Long Pressed')}
        >
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'blue' }}>
            <Text style={{ color: 'white' }}>Hello, </Text>React Native!
          </Text>
        </Pressable>
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
        <ScrollView>
          <Text>
            kjad asnkdnkasdm dna kjandknaksnd kansdknkasnd nakdsnkas\
            alsjdjaslklksa as;djlkaslsadlasdlasdkasdknaskdnkansdk
            anskdjnajsdakjds ajsndjajks askdjasdkjnjsd kasdjkasj kasjdkad
            askndkansd kasndknask asndkandknas askdhasj asldjkasjdkjasd
            aksdjkasdkjasd kadjkadkjd aanskdnksadkjd askdkasdjnas askndkasj
            kwjiqhih qwihiqwh d kqjndiuhd kjndhd kjad asnkdnkasdm dna
            kjandknaksnd kansdknkasnd nakdsnkas\ alsjdjaslklksa
            as;djlkaslsadlasdlasdkasdknaskdnkansdk anskdjnajsdakjds ajsndjajks
            askdjasdkjnjsd kasdjkasj kasjdkad askndkansd kasndknask asndkandknas
            askdhasj asldjkasjdkjasd aksdjkasdkjasd kadjkadkjd aanskdnksadkjd
            askdkasdjnas askndkasj kwjiqhih qwihiqwh d kqjndiuhd kjndhd{' '}
          </Text>
          <Text>
            kjad asnkdnkasdm dna kjandknaksnd kansdknkasnd nakdsnkas\
            alsjdjaslklksa as;djlkaslsadlasdlasdkasdknaskdnkansdk
            anskdjnajsdakjds ajsndjajks askdjasdkjnjsd kasdjkasj kasjdkad
            askndkansd kasndknask asndkandknas askdhasj asldjkasjdkjasd
            aksdjkasdkjasd kadjkadkjd aanskdnksadkjd askdkasdjnas askndkasj
            kwjiqhih qwihiqwh d kqjndiuhd kjndhd kjad asnkdnkasdm dna
            kjandknaksnd kansdknkasnd nakdsnkas\ alsjdjaslklksa
            as;djlkaslsadlasdlasdkasdknaskdnkansdk anskdjnajsdakjds ajsndjajks
            askdjasdkjnjsd kasdjkasj kasjdkad askndkansd kasndknask asndkandknas
            askdhasj asldjkasjdkjasd aksdjkasdkjasd kadjkadkjd aanskdnksadkjd
            askdkasdjnas askndkasj kwjiqhih qwihiqwh d kqjndiuhd kjndhd{' '}
          </Text>
          <Text>
            kjad asnkdnkasdm dna kjandknaksnd kansdknkasnd nakdsnkas\
            alsjdjaslklksa as;djlkaslsadlasdlasdkasdknaskdnkansdk
            anskdjnajsdakjds ajsndjajks askdjasdkjnjsd kasdjkasj kasjdkad
            askndkansd kasndknask asndkandknas askdhasj asldjkasjdkjasd
            aksdjkasdkjasd kadjkadkjd aanskdnksadkjd askdkasdjnas askndkasj
            kwjiqhih qwihiqwh d kqjndiuhd kjndhd kjad asnkdnkasdm dna
            kjandknaksnd kansdknkasnd nakdsnkas\ alsjdjaslklksa
            as;djlkaslsadlasdlasdkasdknaskdnkansdk anskdjnajsdakjds ajsndjajks
            askdjasdkjnjsd kasdjkasj kasjdkad askndkansd kasndknask asndkandknas
            askdhasj asldjkasjdkjasd aksdjkasdkjasd kadjkadkjd aanskdnksadkjd
            askdkasdjnas askndkasj kwjiqhih qwihiqwh d kqjndiuhd kjndhd{' '}
          </Text>
          <Text>
            kjad asnkdnkasdm dna kjandknaksnd kansdknkasnd nakdsnkas\
            alsjdjaslklksa as;djlkaslsadlasdlasdkasdknaskdnkansdk
            anskdjnajsdakjds ajsndjajks askdjasdkjnjsd kasdjkasj kasjdkad
            askndkansd kasndknask asndkandknas askdhasj asldjkasjdkjasd
            aksdjkasdkjasd kadjkadkjd aanskdnksadkjd askdkasdjnas askndkasj
            kwjiqhih qwihiqwh d kqjndiuhd kjndhd kjad asnkdnkasdm dna
            kjandknaksnd kansdknkasnd nakdsnkas\ alsjdjaslklksa
            as;djlkaslsadlasdlasdkasdknaskdnkansdk anskdjnajsdakjds ajsndjajks
            askdjasdkjnjsd kasdjkasj kasjdkad askndkansd kasndknask asndkandknas
            askdhasj asldjkasjdkjasd aksdjkasdkjasd kadjkadkjd aanskdnksadkjd
            askdkasdjnas askndkasj kwjiqhih qwihiqwh d kqjndiuhd kjndhd{' '}
          </Text>
          <Text>
            kjad asnkdnkasdm dna kjandknaksnd kansdknkasnd nakdsnkas\
            alsjdjaslklksa as;djlkaslsadlasdlasdkasdknaskdnkansdk
            anskdjnajsdakjds ajsndjajks askdjasdkjnjsd kasdjkasj kasjdkad
            askndkansd kasndknask asndkandknas askdhasj asldjkasjdkjasd
            aksdjkasdkjasd kadjkadkjd aanskdnksadkjd askdkasdjnas askndkasj
            kwjiqhih qwihiqwh d kqjndiuhd kjndhd kjad asnkdnkasdm dna
            kjandknaksnd kansdknkasnd nakdsnkas\ alsjdjaslklksa
            as;djlkaslsadlasdlasdkasdknaskdnkansdk anskdjnajsdakjds ajsndjajks
            askdjasdkjnjsd kasdjkasj kasjdkad askndkansd kasndknask asndkandknas
            askdhasj asldjkasjdkjasd aksdjkasdkjasd kadjkadkjd aanskdnksadkjd
            askdkasdjnas askndkasj kwjiqhih qwihiqwh d kqjndiuhd kjndhd{' '}
          </Text>
          <Text>
            kjad asnkdnkasdm dna kjandknaksnd kansdknkasnd nakdsnkas\
            alsjdjaslklksa as;djlkaslsadlasdlasdkasdknaskdnkansdk
            anskdjnajsdakjds ajsndjajks askdjasdkjnjsd kasdjkasj kasjdkad
            askndkansd kasndknask asndkandknas askdhasj asldjkasjdkjasd
            aksdjkasdkjasd kadjkadkjd aanskdnksadkjd askdkasdjnas askndkasj
            kwjiqhih qwihiqwh d kqjndiuhd kjndhd kjad asnkdnkasdm dna
            kjandknaksnd kansdknkasnd nakdsnkas\ alsjdjaslklksa
            as;djlkaslsadlasdlasdkasdknaskdnkansdk anskdjnajsdakjds ajsndjajks
            askdjasdkjnjsd kasdjkasj kasjdkad askndkansd kasndknask asndkandknas
            askdhasj asldjkasjdkjasd aksdjkasdkjasd kadjkadkjd aanskdnksadkjd
            askdkasdjnas askndkasj kwjiqhih qwihiqwh d kqjndiuhd kjndhd{' '}
          </Text>
          <Button
            title="Press"
            onPress={() => setIsModalActive(true)}
            color="midnightblue"
          />
        </ScrollView>
      </ImageBackground>
      <Modal
        visible={isModalActive}
        onRequestClose={() => setIsModalActive(false)}
        animationType="slide"
        // presentationStyle='pageSheet' ios only
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 20 }}>
          <Text>Modal Body</Text>
          <Button
            color="midnightblue"
            title="Close"
            onPress={() => setIsModalActive(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default App;
