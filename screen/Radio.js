import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import tw from 'twrnc'
import MusicCard from '../components/MusicCard';

export default function Radio() {
  return (
    <ScrollView style={tw`bg-white`}>

     <View style={tw`px-7`}>

      <Text style={tw`text-3xl mt-22 mb-5 font-bold`}>Podcast</Text>
      <View 
        style={tw`border-b border-neutral-200`}
      />
      <StatusBar style="auto" />
      </View>

      <Text style={tw`text-2xl px-7 font-bold mt-12`}>
        Recently Added
      </Text>

      <ScrollView 
      style={tw`px-7`}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} horizontal
      >
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/736x/75/ac/c2/75acc235583504e147d7cecbf7a8c3c0.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/9d/25/20/9d252083677578bdd2a731d1b4de34b5.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/e0/de/ed/e0deed1e549e0fedbf90d7e06b829c1f.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/6c/b1/fc/6cb1fcdf8a8e0c48b64cc0ffd5d2c056.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/bb/24/28/bb242819301da62110e58a232a647656.jpg'} />
      </ScrollView>

      <Text style={tw`text-2xl px-7 font-bold mt-12 mb-6`}>
      <Text style={tw`text-3xl`}> </Text>Music 1
      </Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
        style={{
            width: 369, // Adjust as needed
            height: 192, // Adjust as needed
            borderRadius: 20, // Adjust as needed
        }}
        source={{ uri: 'https://i.pinimg.com/736x/d1/6b/71/d16b71125f786fc3471fa0ca1388c7cc.jpg' }} // Replace with your image URI
    />
      </View>


      <Text style={tw`text-2xl px-7 font-bold mt-12`}>
      Tending
      </Text>

      <ScrollView 
      style={tw`px-7 mb-20`}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} horizontal
      >
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/736x/43/e7/78/43e77813d4d2eb46b423c0f11541ade8.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/96/5f/f4/965ff4f907e0d9ecff8bbc72b733c255.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/originals/78/0b/cf/780bcfffc7ef31796067c120818b3ba5.gif'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/4e/6e/f7/4e6ef700575e6ae421723eaaff4fb8c5.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/originals/43/60/3a/43603ac13ec6262cb6cf5f4a56b6496a.gif'} />
      </ScrollView>



    </ScrollView>
  );
}