/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Stylesheets
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  mainText: {
    fontSize:20,
    color: "#ffffff",
    fontWeight: '800'
  },
  noteListText: {
    fontSize:30,
    color: "#ffffff",
    fontWeight: '800',
    padding:10,
  }
});


//Persistent note storage functions
async function getNoteCount() {
  try {
    const count = await AsyncStorage.getItem("@note-count");
    if (isNaN(count))
      return 0;
    else 
      return parseInt(count);
  } catch (error) {
    console.warn(error);
  }
}

async function StoreNewNote(note) {
  try{
    const count = await getNoteCount();
    await AsyncStorage.setItem("@note-count", JSON.stringify(count + 1));
    await AsyncStorage.setItem("@note-" + (count + 1), note);
  } catch (error) {
    console.warn(error);
  }
}

async function getNote() {
  try{
    const note = await AsyncStorage.getItem("@note-" + id);
    return note;
  } catch (error) {
    console.warn(error);
  }
}

async function getAllNotes() {
  try{
    const notes = []

    const ids = await AsyncStorage.getAllKeys()
    const data = await AsyncStorage.multiGet(ids)
    data.forEach(pair => notes.push(pair[1]))

    return notes
  } catch (error) {
    console.warn(error);
  }
}

//Functional components (screen functions)
function Board() {
  return (
    <View style={[styles.container, { backgroundColor: "#8cab90" }]}>
      <Text style={styles.mainText}>
        Noteboard will be here!!
      </Text>
    </View>
  );
}

function NewNote() {
  const [text, setText] = useState('')
  return (
    <View style={[styles.container, { backgroundColor: "#bfb67c" }]}>
      <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between', alignItems: "center", width: "60%"}}>
        <TextInput onChangeText={note => setText(note)} style={styles.mainText} placeholder="Type new note here " maxLength={18}/>
        <Button onPress={() => StoreNewNote(text)} title="Save" color="#997e6b"/>
      </View>
    </View>
  );
}

function NoteList() {
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])
  getAllNotes().then(notes => {setNotes(notes)})
  return (
    <View style={[styles.container, { backgroundColor: "#997e6b" }]}>
      <FlatList
        style={{flex:1, maxWidth:700, width: "100%"}}
        contentContainerStyle={{alignItems:'center'}}
        data={notes}
        renderItem={({item}) => {return <Text style={styles.noteListText}>{item}</Text>}}/>
    </View>
  );
}


//Screens and app drawing
const Tab = createBottomTabNavigator();

function Screens() {
  return(
    <Tab.Navigator initialRouteName="Board" screenOptions={{
        tabBarActiveTintColor: "#4d342a",
        tabBarLabelStyle: { fontSize:14 },
        fontSize: 50}}>
      <Tab.Screen name="Board" component={Board} />
      <Tab.Screen name="New Note" component={NewNote} />
      <Tab.Screen name="Note List" component={NoteList} />
    </Tab.Navigator>
  );
}

function App() {
  return(
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default App;