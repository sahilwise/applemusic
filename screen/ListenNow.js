import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'; // Import the necessary icon library
import tw from 'twrnc';

const ListenNow = () => {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={['#D20962', '#C6055C', '#960545']}
        >

            <View style={[{ justifyContent: 'center', alignItems: 'center' }, tw`pt-20 pb-6`]}>
                <Image
                    style={tw`w-96 h-96 rounded-2xl`}
                    source={{ uri: 'https://i.pinimg.com/564x/6e/cc/4d/6ecc4d9b683dd28593566bcd638fd791.jpg' }} // Replace with your image URI
                />
            
            <Text style={tw`text-white pt-7 text-4xl font-semibold`}>Barbie Dreams</Text>
            <Text style={tw`text-[#F573BB] text-xl font-semibold`}>FIFTY FIFTY, Kaliii</Text>
            </View>


            <View style={tw`bg-[#F5108E] py-1.5 rounded-full mx-8`} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingBottom:36 }}>
            {/* Previous Button */}
            <TouchableOpacity onPress={() => console.log('Previous')}>
                <Entypo name="controller-fast-backward" size={54} color="white" style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>

            {/* Play Button */}
            <TouchableOpacity onPress={() => console.log('Play')}>
                <Entypo name="controller-paus" size={54} color="white" style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>

            {/* Next Button */}
            <TouchableOpacity onPress={() => console.log('Next')}>
                <Entypo name="controller-fast-forward" size={54} color="white" style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>
        </View>




      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Image
        style={{
            width: 369, // Adjust as needed
            height: 192, // Adjust as needed
            borderRadius: 20, // Adjust as needed
        }}
        source={{ uri: 'https://i.pinimg.com/564x/54/c7/29/54c729205c65724ef0d49afa257d0d76.jpg' }} // Replace with your image URI
    />
      </View>



        </LinearGradient>
    )
}

export default ListenNow;
