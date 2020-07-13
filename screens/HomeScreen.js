import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffff'}}>
      <Text>Home Screen</Text>
      <Button 
      title = 'Community'
      onPress = {() =>navigation.navigate('Community')}
      />
    </View>
  );
}

  export default HomeScreen;