/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { Text, View, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Board() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ebc69d" }}>
      <Text style={{ fontSize:20, color: "#ffffff", fontWeight: '800'}}>
        Noteboard will be here!!
      </Text>
    </View>
  );
}

function NewNote() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#faeaaa" }}>
      <Text style={{ fontSize:20, color: "#ffffff", fontWeight: '800'}}>
        Note creation will be here!!
      </Text>
    </View>
  );
}

function NoteList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#997e6b" }}>
      <Text style={{ fontSize:20, color: "#ffffff", fontWeight: '800'}}>
        Note list will be here!!
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return(
    <Tab.Navigator initialRouteName="Board" screenOptions={{
        tabBarActiveTintColor: "#4d342a",
        tabBarLabelStyle: { fontSize:14 }}}>
      <Tab.Screen name="Board" component={Board} />
      <Tab.Screen name="New Note" component={NewNote} />
      <Tab.Screen name="Note List" component={NoteList} />
    </Tab.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

