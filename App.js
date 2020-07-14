import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from './screens/MainTabScreen';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={MainTabScreen}         
        options={{ 
      //     //turns the header off and on
          
          headerShown: false,
      //     headerTitleStyle: {
      //         fontFamily: 'Times New Roman',
      //         fontWeight: 'bold',
      //         fontSize: 39,
      //         letterSpacing: -3.5
      //       },
      //     headerLeft: () =>(
      //       <View style={{marginLeft: 20}}>
      //         <Button 
      //       title='Forest'
      //       onPress={()=>{}} 
      //       color="#3a7838"
      //       />
      //       </View>
      //       ),
      //     headerRight: ()=>(
      //       <View style={{marginRight: 20, }}>
      //       <Button title='49,000'
            
      //       onPress={()=>{}}
      //       />
      //       </View>

      //     ),


      }}
   
 />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
