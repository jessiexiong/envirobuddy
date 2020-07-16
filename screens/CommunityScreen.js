import React, {useState} from 'react';
import { View, Text, SafeAreaView, modalVisible, TouchableHighlight, StyleSheet, Button, Modal, ScrollView, Image, Animated, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';



let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
var images = [
    { id: 1, src: require('../assets/1.jpg') },
    { id: 2, src: require('../assets/2.jpg') },
    { id: 3, src: require('../assets/3.jpg') },
    { id: 4, src: require('../assets/germany.jpg') },
  ]

function CommunityScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

    
  return (
<SafeAreaView>
  <ScrollView style={{backgroundColor: '#ffff'}}>

    {/*Buttons and photo view*/}
        <View style= {{backgroundColor:'white', }}>
          {images.map(image =>{
              return(
                //image creation and button
                  <View 

            key={image.id}
                  style= {{flexDirection: 'row'}}
                  >
                    <View style={[{justifyContent: 'center'}]}>
            {/*Modal*/}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Are you sure you want to purchase Greece tickets?</Text>
                  {/*Buttons */}
                  <View style={{ flexDirection: 'row', marginTop: 70}}>
                  <TouchableOpacity
                    style={{ ...styles.confirmButton}}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.buttonFont}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableHighlight
                    style={{ ...styles.cancelButton}}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.buttonFont}>Cancel</Text>
                  </TouchableHighlight>
                  </View>

                </View>
              </View>
            </Modal>

            </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 1}}>
            <TouchableHighlight
              style={[styles.openButton, {marginLeft: 20, marginRight: 20}]}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.textStyle}>25,000</Text>
            </TouchableHighlight>
            </View>

            {/*image*/}
            <Animated.View
            style={{height: 300, padding: 4, flex:2}}
            >
                <Image source={image.src}
                style={{flex: 1, height:null, width:null, resizeMode: 'cover',
                  height:null, width:null,borderRadius: 20}}
                />
            </Animated.View>


          </View>
              )

          })}
          
        </View>





        
    </ScrollView>
</SafeAreaView>
  );
};


  export default CommunityScreen;

  const styles= StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      borderRadius: 10,
      paddingVertical: -100,
      paddingHorizontal: -90
    },
  
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      paddingTop: 70,
      alignItems: "center",
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      justifyContent: 'center',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#3a7838",
      borderRadius: 100,
      height: 100,
      width: 100,
      padding: 20,
      justifyContent: 'center'
    },
    confirmButton: {
      borderRadius: 40,
      width: 120,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: "#228ae6", margin: 10
    },
    cancelButton: {
      borderRadius: 40,
      width: 120,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: "#9e9e9e", margin: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    buttonFont:{
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20

    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

