// AppleMusicCard.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const LibraryCard = ({name, img}) => {
  return (
    <View style={tw`flex flex-row items-center py-4 border-b border-gray-300 rounded-lg`}>
      <Image
        style={tw`w-8 h-8 mr-4 rounded-full`}
        source={{ uri: img }} // Replace with your image URI
      />
      <View style={tw`flex-1`}>
        <Text style={tw`font-semibold text-xl mb-1`}>{name}</Text>
        <View style={tw`flex flex-row items-center`}>
          {/* Love Icon (Replace with your own icon) */}
        </View>
      </View>
    </View>
  );
};

export default LibraryCard;
