/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  mainText: {
    fontSize:20,
    color: "#ffffff",
    fontWeight: '800'
  }
});

const storeNote = async(note) => {
  try {
    await AsyncStorage.setItem('@storage_Key', note) //stores only string, objects need to be serialized
  } catch (e) {
    // ERROR!
  }
}

const getNote = async() => {
  try {
    const note = await AsyncStorage.getItem('@storage_key')
    if(value !== null) {
      return value;
    }
  } catch(e) {
    // ERROR!
  }

}

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
  return (
    <View style={[styles.container, { backgroundColor: "#bfb67c" }]}>
      <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between', alignItems: "center", width: "60%"}}>
        <TextInput style={styles.mainText} placeholder="Type new note here " maxLength={18}/>
        <Button title="Save" color="#997e6b"/>
      </View>
    </View>
  );
}

function NoteList() {
  return (
    <View style={[styles.container, { backgroundColor: "#997e6b" }]}>
      <Text style={styles.mainText}>
        Note list will be here!!
      </Text>
    </View>
  );
}

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