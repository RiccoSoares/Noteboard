/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {COLORS} from './styles/colors';
import {styles} from './styles/stylesheets';

import {Board} from './screens/board'
import {EditNote} from './screens/edit-note'
import {NoteList} from './screens/note-list'

//Screens and app drawing
const Tab = createBottomTabNavigator();

function Screens() {
  return(
    <Tab.Navigator initialRouteName='Board' backBehavior='none' screenOptions={({route}) => ({
        headerTitle: 'noteboard.',
        headerTintColor: COLORS.darkBrown,
        headerTitleAlign: 'center',
        headerStyle: {height: 40, backgroundColor: COLORS.beige, shadowColor: 'black', elevation:5},
        tabBarActiveTintColor: COLORS.darkBrown,
        tabBarLabelStyle: { fontSize:14, flex:1, alignItems: 'center'},
        tabBarIconStyle: { margin: 5},
        tabBarStyle: {
          backgroundColor: COLORS.beige,
          position: 'absolute',
          justifyContent: 'center',
          margin: 15,
          height: 60,  
          borderRadius: 15,
          ...styles.shadow
        },
        fontSize: 50,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'Board')
            iconName = focused ? 'easel' : 'easel-outline'
          else if (route.name == 'Edit Note') 
            iconName = focused ? 'document-text' : 'document-text-outline'
          else if (route.name == 'Note List') 
            iconName = focused ? 'file-tray' : 'file-tray-outline'

          return <Ionicons name={iconName} size={size} color={color}/>; 
        }
        })}>
      <Tab.Screen name='Board' component={Board}/>
      <Tab.Screen name='Edit Note' component={EditNote} />
      <Tab.Screen name='Note List' component={NoteList} />
    </Tab.Navigator>
  );
}

function Main() {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Main;