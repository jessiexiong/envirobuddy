import React , { useState, useRef } from 'react';
import { View, FlatList, TouchableHighlight, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalComponent from './modal'
import RBSheet from "react-native-raw-bottom-sheet";

function Mess({navigation}) {

  
  return (
    <FlatList 
    numColumns={2}
      


    />

  );


}

const styles= StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 40,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

  export default Mess;