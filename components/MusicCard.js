// AppleMusicCard.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const MusicCard = ({img}) => {
  return (
    <View style={tw`mr-6`}>
        <View style={tw`w-48 h-48 mb-2 mt-6`}>
        <Image
          style={tw`w-full h-full rounded-2xl`}
          source={{ uri: img }} // Replace with your image URI
        />
      </View>
      <Text style={tw`text-xl font-semibold`}>True Colors</Text>
      <Text style={tw`text-xl font-semibold`}>The Weeknd</Text>
    </View>
  );
};

export default MusicCard;