import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
  export default FiltersScreen;