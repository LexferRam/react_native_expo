import React, {useState} from 'react'
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native';

function AddItem({addItem}) {
    const [text, setText] = useState("")

    const onChange = (textvalue) => setText(textvalue)

    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={() => {
                addItem(text)
                }}>
                <Text style={styles.btnText}>+ Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
    height:60,
    padding:8,
    fontSize:16
    },
    btn:{
        backgroundColor:"#c2bad8",
        padding:9,
        margin:5
    },
    btnText:{
        fontSize: 20,
    color:"white",
    textAlign:"center"
      }
  });

export default AddItem
