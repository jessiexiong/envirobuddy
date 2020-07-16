import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import ProfileScreen from './ProfileScreen';
import BadgesScreen from './BadgesScreen';
import GardenScreen from './GardenScreen';
import EditProfileScreen from './EditProfileScreen';
import Mess from './Mess';


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
      name="Garden"
      component={GardenStackScreen}
      options={{
        tabBarLabel: 'Garden',
        
        tabBarIcon: ({ color }) => (
          <Foundation name="trees" color={color} size={26} />
        ),
      }}
    />
   <Tab.Screen
      name="Badges" //this name is what you use to help navigate
      component={BadgesScreen}
      options={{
        tabBarLabel: 'Badges',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="award" color={color} size={26} />
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
      name="Community" 
      component={CommunityScreen} 
      options={{  
      headerTitle: 'Community',
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
    <ProfileStack.Screen 
    name="Mess" 
    component={Mess} 
    options={{  
    headerTitle: 'Mess',
  }}
    />

  </ProfileStack.Navigator>

);

const GardenStackScreen = ({navigation}) => (
  navigation.setOptions({ tabBarVisible: false }),

  <GardenStack.Navigator  
  screenOptions={{ 
    //turns the header off and on 
    headerShown: false,
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
      <FontAwesome.Button
              style = {{justifyContent: 'center'}}
              name="step-backward"
              size={30}
              backgroundColor= 'white'
              color= '#3a7838'
              onPress={() => navigation.goBack()}
            />
      </View>
      ),


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


export default MainTabScreen;

