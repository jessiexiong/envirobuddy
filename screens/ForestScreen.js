import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,} from 'react-native';

function ForestScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title = 'Home'
      onPress = {() => navigation.navigate('Garden')}
      />
    </View>
  );
}


  export default ForestScreen;