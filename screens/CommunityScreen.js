import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

function CommunityScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button 
      title = 'Details'
      onPress = {() =>navigation.navigate('Forest')}
      />
    </View>
  );
}



  export default CommunityScreen;