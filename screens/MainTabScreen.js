import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';



import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import ProfileScreen from './ProfileScreen';
import ForestScreen from './ForestScreen';
import GardenScreen from './GardenScreen';

import EditProfileScreen from './EditProfileScreen';


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CommunityStack = createStackNavigator();


const GardenStack = createStackNavigator();


const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator>
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
      component={CommunityStackScreen}
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

const GardenStackScreen = ({navigation}) => (
  <GardenStack.Navigator  
  screenOptions={{ 
    //turns the header off and on 
    headerShown: true,
    headerTitleStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontSize: 39,
        letterSpacing: -3.5,
      },
    headerStyle:{
      shadowColor: '#fff'
    },


}}>
    <GardenStack.Screen 
    name="Garden" 
    component={GardenScreen} 
    options={{  
    headerTitle: 'Garden',
  }}
    />
  </GardenStack.Navigator>

);

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator  
    screenOptions={{ 
      //turns the header off and on 
      headerShown: true,
      headerTitleStyle: {
          fontFamily: 'Times New Roman',
          fontWeight: 'bold',
          fontSize: 39,
          letterSpacing: -3.5,
        },
      headerStyle:{
        shadowColor: '#fff'
      },

      headerLeft: () =>(
        <View style={{marginLeft: 20, }}>
        <Foundation.Button
                style = {{justifyContent: 'center'}}
                name="trees"
                size={30}
                backgroundColor= 'white'
                color= '#3a7838'
                onPress={() => navigation.navigate('Garden')}
              />
        </View>
        ),
      headerRight: ()=>(
        <View style={{marginRight: 20, }}>
      <TouchableOpacity
        onPress={()=>{}} >
        <Text style={{color:'black', fontSize: 17}}>49,000</Text>
        </TouchableOpacity>
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

const CommunityStackScreen = ({navigation}) => (
  navigation.setOptions({ tabBarVisible: false }),
    <HomeStack.Navigator  
    screenOptions={{ 
      //turns the header off and on 
      headerShown: true,
      headerTitleStyle: {
          fontFamily: 'Times New Roman',
          fontWeight: 'bold',
          fontSize: 39,
          letterSpacing: -3.5,
        },
      headerStyle:{
        shadowColor: '#fff'
      },

      headerLeft: () =>(
        <View style={{marginLeft: 20, }}>
        <Foundation.Button
                style = {{justifyContent: 'center'}}
                name="trees"
                size={30}
                backgroundColor= 'white'
                color= '#3a7838'
                onPress={() => navigation.navigate('Garden')}
              />
        </View>
        ),
      headerRight: ()=>(
        <View style={{marginRight: 20, }}>
      <TouchableOpacity
        onPress={()=>{}} >
        <Text style={{color:'black', fontSize: 17}}>49,000</Text>
        </TouchableOpacity>
        </View>
      ),
  }}>
      <CommunityStack.Screen 
      name="Home" 
      component={CommunityScreen} 
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
    headerStyle:{
      shadowColor: '#fff'
    },
    // headerLeft: () =>(
    //   <View style={{marginLeft: 20, }}>
    //   <Foundation.Button
    //           name="trees"
    //           size={30}
    //           backgroundColor= 'white'
    //           color= '#3a7838'
    //           onPress={() => navigation.navigate('Home')}
    //         />
    //   </View>

    //   ),
    headerRight: ()=>(
      <View >
      <FontAwesome.Button
              name="edit"
              size={25}
              backgroundColor= 'white'
              color= 'black'
              onPress={() => navigation.navigate('Edit Profile')}
            />
      </View>


    ),
}}>
    <ProfileStack.Screen 
    name="Profile" 
    component={ProfileScreen} 
    options={{  
    headerTitle: 'Profile',
  }}
    />
    <ProfileStack.Screen 
    name="Edit Profile" 
    component={EditProfileScreen} 
    options={{  
    headerTitle: 'Edit Profile',
  }}
    />
  </ProfileStack.Navigator>

);



export default MainTabScreen;

