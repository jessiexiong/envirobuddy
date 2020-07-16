import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function BadgesScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title = 'Home'
      onPress = {() => navigation.navigate('Garden')}
      />
      <View>
      <FontAwesome.Button
              name="edit"
              size={25}
              backgroundColor= 'white'
              color= 'black'
              onPress={() => navigation.navigate('Edit Profile')}
              />
      </View>

    </View>
  );
}

const styles= StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
});

  export default BadgesScreen;