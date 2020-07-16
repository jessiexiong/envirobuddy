import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Image, Animated, Dimensions } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

function GardenScreen({navigation}) {
    
    
  return (
    <ScrollView style={{backgroundColor: '#16362a'}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{marginTop: 50}}>
            <TouchableOpacity
        style={[styles.button, {backgroundColor: '16362a'}]}
        onPress={()=>navigation.goBack()}
      >
        <Text style={{color: 'white'}}>Return</Text>
      </TouchableOpacity>
            </View>
        
      <View style={{marginTop: 10, }}>
        <View style={{adjustItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.titleName}> Welcome to your garden!</Text>
        </View>
      <Image
        style={{height: SCREEN_HEIGHT*.7, width: SCREEN_WIDTH*.8, 
          paddingHorizontal: 50, resizeMode: "stretch"}}
        source={require('../assets/b.png')}
        
        
        
      />
      </View>

    </View>

    </ScrollView>

  );
}


  export default GardenScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginTop: 25,
    },
    titleName: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      fontSize: 30,
      letterSpacing: -1.5,
      color: 'white'
    }});
 