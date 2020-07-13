import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Emoji from 'react-native-emoji';


import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import ExploreScreen from './ExploreScreen';
import ForestScreen from './ForestScreen';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name='Home'
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Community'
      component={CommunityScreen}
      options={{
        tabBarLabel: 'Community',
        
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
   <Tab.Screen
      name="Forest" //this name is what you use to help navigate
      component={ForestScreen}
      options={{
        tabBarLabel: 'Forest',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    /> 
        <Tab.Screen
      name="Profile"
      component={ForestScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-compass" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#006400',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{  
      //headerTitle: props => <LogoTitle {...props} />
    }}
      />

      

    </HomeStack.Navigator>

);