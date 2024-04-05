// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto'; // Import the necessary icon library
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import the necessary icon library
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import the necessary icon library

import LibraryScreen from './screen/Library';
import Profile from './screen/Profile';
import ListenNow from './screen/ListenNow';
import Radio from './screen/Radio';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const LibraryStack = ()=>{
    return(
      <LibraryStack.Screen name="Library" component={LibraryScreen} />
    )
}

const ProfileStack = ()=>{
  return(
    <ProfileStack.Screen name="Profile" component={Profile} />
  )
}

const ListenNowStack = ()=>{
  return(
    <ListenNowStack.Screen name="ListenNow" component={ListenNowScreen} />
  )
}

const RadioStack = ()=>{
  return(
    <RadioStack.Screen name="Radio" component={Radio} />
  )
}

function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator
              screenOptions={{
              activeTintColor: '#EA1B51', // Set active tab text color to match icon color
              headerShown: false,
              color: '#16161d'
                   
          }}>
          <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
          <Fontisto name="applemusic" color={color} size={size} /> // Customize the icon here
          ),
          }}
          />  

          <Tab.Screen
          name="ListenNow"
          component={ListenNow}
          options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
          <FontAwesome name="play-circle" color={color} size={28} /> // Customize the icon here
          ),
          }}
          /> 

          <Tab.Screen
          name="Podcast"
          component={Radio}
          options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="podcast" color={color} size={size} /> // Customize the icon here
          ),
          }}
          /> 

          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle" color={color} size={size} /> // Customize the icon here
          ),
          }}
          />     


      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;