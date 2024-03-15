import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import tw from 'twrnc'
import LibraryCard from '../components/LibraryCard';
import MusicCard from '../components/MusicCard';

export default function Library() {
  return (
    <ScrollView style={tw`bg-white`}>

     <View style={tw`px-7`}>

      <Text style={tw`text-xl text-right text-[#EA1B51] font-semibold mt-16`}>Edit</Text>
      <Text style={tw`text-3xl mb-5 font-bold`}>Library</Text>

      <LibraryCard name={'Playlists'} img={'https://i.pinimg.com/564x/d1/a2/a5/d1a2a5cd94d4741fc79d5350ed1b7e39.jpg'} />
      <LibraryCard name={'Favorites'} img={'https://i.pinimg.com/564x/70/73/8e/70738e54de752d8e8ff690847b2dddfb.jpg'} />
      <LibraryCard name={'Artists'} img={'https://i.pinimg.com/736x/d5/55/3a/d5553abd3eb71b02a648c454ce21e8d9.jpg'} />
      <LibraryCard name={'Albums'} img={'https://i.pinimg.com/564x/83/47/82/834782bcf94e62ef9322b4a63f1e470f.jpg'} />
      <LibraryCard name={'Songs'} img={'https://i.pinimg.com/564x/e9/74/41/e9744174c1c440a86ed45a6726017e85.jpg'} />
      <LibraryCard name={'Downloaded'} img={'https://i.pinimg.com/564x/a1/b4/63/a1b463dd283b54e40865bf4eae131a48.jpg'} />


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
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/a2/e9/2f/a2e92f79a386267e7403ccd402d690f2.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/81/eb/34/81eb34d63df9a2a4206ffb8d93ab902d.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/cf/8d/0c/cf8d0c8ed1083f053534a4ef3478d34b.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/13/b5/43/13b543fcfe6ad97b40e0f7ee870c427f.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/21/47/b3/2147b3b51cd661cd7421c4ce7fd889c6.jpg'} />
      </ScrollView>

      <Text style={tw`text-2xl px-7 font-bold mt-12`}>
        Recently Played
      </Text>

      <ScrollView style={tw`mb-32 px-7`} 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
      >
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/93/51/48/93514888495f23d2cc66e0f3d2ef06d6.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/83/f6/56/83f6561028c15092d43654a845a58027.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/36/7b/cb/367bcb0ba5d4a76487baba063469009b.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/736x/2b/dd/e8/2bdde8667a89dd89d93068b34cb09690.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/9e/ca/15/9eca1509c861dab259ed8b54413660e4.jpg'} />
      </ScrollView>

    </ScrollView>
  );
}