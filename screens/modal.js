import React,  { Component }  from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';

const ModalComponent =()=>{


        return(
            <View style={styles.centeredView}>
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
                  <Text style={styles.modalText}>Hello World!</Text>
      
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
      
            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
          </View>
        )
    

}

export default ModalComponent;