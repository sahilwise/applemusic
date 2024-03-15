import { View,Text, ScrollView, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6'; // Import the necessary icon library
import tw from 'twrnc'
import MusicCard from "../components/MusicCard";

const Profile = ()=>{
    return(
    <ScrollView style={tw`mt-8`}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 26, paddingTop: 37 }}>
      <Icon name="chevron-left" size={25} color="#fa233b" />
      <Icon name="ellipsis" size={25} color="#fa233b" />
    </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://creatorspace.imgix.net/users/cljd4q1vv032as90113argpep/cNjxWKoFjMtkHKYp-sal.png?w=300&h=300' }}
        style={[{ width: 150, height: 150, borderRadius: 75 }]} // Make it a circle by setting borderRadius to half the width/height
      />
    </View>

    <Text style={tw`text-center font-bold text-5xl pt-6`}>Salnet</Text>
    <Text style={tw`text-center font-bold text-2xl pt-2`}>@salnetx</Text>
    
    <View style={[{ alignItems: 'center' },tw`my-5`]}>
        {/* Button */}
        <TouchableOpacity onPress={()=>{}} style={{ backgroundColor: '#FA233B', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 35 }}>
          <Text style={[tw`font-bold`,{ color: '#fff', fontSize: 16 }]}>EDIT</Text>
        </TouchableOpacity>
      </View>


    <View style={tw`border-b border-neutral-400`} />

    <Text style={tw`text-2xl px-7 font-bold mt-12`}>
        Recently Added
      </Text>

      <ScrollView 
      style={tw`px-7`}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} horizontal
      >
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/13/b5/43/13b543fcfe6ad97b40e0f7ee870c427f.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/cf/8d/0c/cf8d0c8ed1083f053534a4ef3478d34b.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/21/47/b3/2147b3b51cd661cd7421c4ce7fd889c6.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/a2/e9/2f/a2e92f79a386267e7403ccd402d690f2.jpg'} />
            <MusicCard music={''} artist={``} img={'https://i.pinimg.com/564x/81/eb/34/81eb34d63df9a2a4206ffb8d93ab902d.jpg'} />
      </ScrollView>

    </ScrollView>
    )
}

export default Profile;