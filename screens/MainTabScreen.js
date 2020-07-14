import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import ProfileScreen from './ProfileScreen';
import ForestScreen from './ForestScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
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
      component={ProfileStackScreen}
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
    <HomeStack.Navigator  
    screenOptions={{ 
      //turns the header off and on 
      headerShown: true,
      headerTitleStyle: {
          fontFamily: 'Times New Roman',
          fontWeight: 'bold',
          fontSize: 39,
          letterSpacing: -3.5
        },
      headerLeft: () =>(
        <View style={{marginLeft: 20}}>
          <Button 
        title='Forest'
        onPress={()=>{}} 
        color="#3a7838"
        />
        </View>
        ),
      headerRight: ()=>(
        <View style={{marginRight: 20, }}>
        <Button title='49,000'
        
        onPress={()=>{}}
        />
        </View>
      ),
  }}>
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{  
      headerTitle: 'Home',
    }}
      />
    </HomeStack.Navigator>

);


const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator  
  screenOptions={{ 
    //turns the header off and on 
    headerShown: true,
    headerTitleStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontSize: 39,
        letterSpacing: -3.5
      },
    headerLeft: () =>(
      <View style={{marginLeft: 20}}>
        <Button 
      title='Forest'
      onPress={()=>{}} 
      color="#3a7838"
      />
      </View>
      ),
    headerRight: ()=>(
      <View style={{marginRight: 20, }}>
      <Button title='49,000'
      
      onPress={()=>{}}
      />
      </View>
    ),
}}>
    <ProfileStack.Screen 
    name="Home" 
    component={ProfileScreen} 
    options={{  
    headerTitle: 'Profile',
  }}
    />
  </ProfileStack.Navigator>

);