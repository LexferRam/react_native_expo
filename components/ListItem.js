import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity, FlatList } from 'react-native';


export default function ListItem({item,deleteItem}) {
    return (
        <TouchableOpacity key={item.id} style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                     {item.text}
                </Text>
                
                <Text style={styles.remove} onPress={() => {
                    deleteItem(item.id)
                    }}>
                     X
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth:50,
      borderColor:"#eee"
    },
    listItemView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
      remove:{
        fontSize: 20,
    color:"red"
      }
  });