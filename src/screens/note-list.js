
import React, {useState, useRef, useLayoutEffect} from 'react';
import {SafeAreaView, FlatList, Text, View, Button, TouchableOpacity, Switch} from 'react-native';

import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {getAllNotes, StoreNote} from '../database/operations';
import {RemoveNote} from '../database/operations';
import {NavigationContainer} from '@react-navigation/native';
import {creatNativeStackNavigator} from '@react-navigation/native-stack';

export function NoteList({navigation}) {

  const [notes, setNotes] = useState([])

  const whenFocused = navigation.addListener('focus', () => {
    getAllNotes().then(notes => {setNotes(notes)});
  });


  return (
    <SafeAreaView style={[styles.container, {backgroundColor: COLORS.darkYellow}]}>
      <FocusAwareStatusBar/>
      <FlatList
        style={{flex:1, maxWidth:700, width: '100%', marginVertical:6}}
        contentContainerStyle={{paddingBottom:100}}
        data={notes.sort((a,b) => a.id > b.id)}
        //for debug: {'title:' + item.title + ' body:' + item.bodyText + ' color:' + item.color}
        renderItem={({item}) => {return (
          <TouchableOpacity
          style={[styles.modelView]}
          onLongPress={() => {
            navigation.navigate('Edit Note', {
              note: item
            });
          }}
          >
        <View style={{flexDirection: 'row', justifyContent:'space-between', margin:6, backgroundColor:COLORS.brown, borderRadius:15}}>
          <Text numberOfLines={1} style={[styles.noteText, {height:50, width:270}]}>
            {item.id + ' ' + item.title + ' - ' + item.bodyText }
          </Text>
          <View style={{flex:1, maxWidth:115, marginHorizontal:10, alignSelf:'center', flexDirection:'row', justifyContent:'space-between'}}>
            {/*<Button style={{}} onPress={() => {}} title='Add'  color='#876759'/>*/}
            <Switch trackColor={{false: COLORS.darkYellow, true: COLORS.green}} 
              thumbColor={COLORS.darkBrown} 
              onValueChange={(value)=>{
                item.inBoard = value;
                StoreNote(item);
                getAllNotes().then(notes => {setNotes(notes)});
              }}
              value={item.inBoard}/>
            <Button style={{}} onPress={() => {
              RemoveNote(item)
              getAllNotes().then(notes => {setNotes(notes)});
            }} title='Delete' color='#876759'/>
          </View>
        </View>
        </TouchableOpacity>
        )}}/>
    </SafeAreaView>
  );
}