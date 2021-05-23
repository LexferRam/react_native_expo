import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity,Alert } from 'react-native';

export default function Header({title}) {
 

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 15,
    backgroundColor: 'gainsboro',
    paddingTop:50
  },
  text:{
      color:"black",
      fontSize:23
    }
});
