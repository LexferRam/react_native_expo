import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity,Alert, FlatList } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import SectionList from './components/SectionList'


export default function App() {
 
  const [items, setItems] = useState([
    {id:1, text:"Ejercicio"},
    {id:2, text:"Estudiar"},
    {id:3, text:"comer"},
    {id:4, text:"Programar"},
    {id:5, text:"comer"}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
     return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
   // alert(text)
   if(text == '') {
      // Alert.alert('Error', 'Inserte un valor', {text: 'Ok'})
      alert('Inserte una tarea')
    }else{
      setItems(prevItems => {
       return [{id:Math.random(), text},...prevItems ]
      })
    }
  }

  return (
    <View style={styles.container}>
      {/* <Header title="Lista de Tareas de Lexfer"/>
      <Text style={styles.title}>Prueba de Lexfer Ramirez</Text>
     <AddItem addItem={addItem} />
     <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      /> */}
      <SectionList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f7f7f7',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    color:'red', 
    fontSize:30
  },
  image:{
    width:100, 
    height:100,
    borderRadius:50,
    resizeMode:'contain'
  },
  button:{
    backgroundColor:"deepskyblue",
    padding:7,
    marginTop:10,
    borderRadius:10
  },
  buttonText:{
    color:"#fff", 
    fontSize:20
  }
});
