import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00e3'}}>
      <Text>Home Screen</Text>
      <Button 
      title = 'Details'
      onPress = {() =>navigation.navigate('Details')}
      />
    </View>
  );
}

  export default ProfileScreen;