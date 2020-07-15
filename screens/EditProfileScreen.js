import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

function EditProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title = 'Home'
      onPress = {() => navigation.navigate('Home')}
      />
    </View>
  );
}


  export default EditProfileScreen;