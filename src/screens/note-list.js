
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
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.brown}]}>
      <FocusAwareStatusBar/>
      <FlatList
        style={{flex:1, maxWidth:700, width: '100%'}}
        contentContainerStyle={{alignItems:'flex-start', margin:20, paddingBottom:100}}
        data={notes.sort((a,b) => a.title > b.title)}
        //for debug: {'title:' + item.title + ' body:' + item.bodyText + ' color:' + item.color}
        renderItem={({item}) => {return <View style={{flexDirection: 'row'}}>
        <Text style={styles.noteText}>
          {item.title + ' - ' + item.bodyText.substring(0,6)}
        </Text>

          <Button 
          onPress={() => {}} 
          title='Edit' 
          color='#876759'/>

          <Button 
          onPress={() => {}} 
          title='Board' 
          color='#876759'/>

          </View>}
        }/>
    </SafeAreaView>
  );
}