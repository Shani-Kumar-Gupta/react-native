import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
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
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default App;
