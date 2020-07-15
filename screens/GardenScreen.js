import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,} from 'react-native';

function GardenScreen({navigation}) {
    
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>asdf Screen</Text>
      <Button 
      title = 'Home'
      onPress = {() => navigation.navigate('Edit Profile')}
      />
    </View>
  );
}


  export default GardenScreen;