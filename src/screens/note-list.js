
import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text, View, Button} from 'react-native';

import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {getAllNotes} from '../database/operations';
import {Note} from '../Note';

export function NoteList() {
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])
  getAllNotes().then(notes => {setNotes(notes)})
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: COLORS.darkYellow}]}>
      <FocusAwareStatusBar/>
      <FlatList
        style={{flex:1, maxWidth:700, width: '100%', marginVertical:6}}
        contentContainerStyle={{paddingBottom:100}}
        data={notes.sort((a,b) => a.title > b.title)}
        //for debug: {'title:' + item.title + ' body:' + item.bodyText + ' color:' + item.color}
        renderItem={({item}) => {return (
        <View style={{flexDirection: 'row', justifyContent:'space-between', margin:6, backgroundColor:COLORS.brown, borderRadius:15}}>
          <Text numberOfLines={1} style={[styles.noteText, {height:50, width:270}]}>
            {item.title + ' - ' + item.bodyText }
          </Text>
          <View style={{flex:1, maxWidth:115, marginHorizontal:10, alignSelf:'center', flexDirection:'row', justifyContent:'space-between'}}>
            <Button style={{}} onPress={() => {}} title='Edit'  color='#876759'/>
            <Button style={{}} onPress={() => {}} title='Board' color='#876759'/>
          </View>
        </View>
        )}}/>
    </SafeAreaView>
  );
}