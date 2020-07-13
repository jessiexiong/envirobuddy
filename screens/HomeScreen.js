import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Header, ScrollView, Image, Animated, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
var images = [
    { id: 1, src: require('../assets/1.jpg') },
    { id: 2, src: require('../assets/2.jpg') },
    { id: 3, src: require('../assets/3.jpg') },


  ]

function HomeScreen({navigation}) {
  return (
<SafeAreaView style={{flex:1}}>
    <ScrollView style={{ flex: 1, backgroundColor: '#ffff'}}>
        {images.map(image =>{
            return(
                <TouchableWithoutFeedback key={image.id}>
                    <Animated.View
                    style={{height: SCREEN_HEIGHT - 400, width: SCREEN_WIDTH, padding: 15}}
                    >
                        <Image source={image.src}
                        style={{flex: 1, height:null, width:null,
                        resizeMode: 'cover', borderRadius: 20}}
                        />
                    </Animated.View>

                </TouchableWithoutFeedback>
            )

        })}
    </ScrollView>
</SafeAreaView>
  );
}

  export default HomeScreen;