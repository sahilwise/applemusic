import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import the necessary icon library
import tw from 'twrnc';

const ListenNow = () => {
    return (
        <ScrollView>
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





            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 296 }}>
            {/* Previous Button */}
            <TouchableOpacity onPress={() => console.log('Previous')}>
                <FontAwesome5 name="step-backward" size={54} color="white" style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>

            {/* Play Button */}
            <TouchableOpacity onPress={() => console.log('Play')}>
                <FontAwesome5 name="pause" size={54} color="white" style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>

            {/* Next Button */}
            <TouchableOpacity onPress={() => console.log('Next')}>
                <FontAwesome5 name="step-forward" size={54} color="white" style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>
        </View>




        </LinearGradient>
        </ScrollView>
    )
}

export default ListenNow;
