
import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';

import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {getAllNotes} from '../database/operations';

export function NoteList() {
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])
  getAllNotes().then(notes => {setNotes(notes)})
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.brown}]}>
      <FocusAwareStatusBar/>
      <FlatList
        style={{flex:1, maxWidth:700, width: '100%'}}
        contentContainerStyle={{alignItems:'flex-start', margin:20}}
        data={notes}
        renderItem={({item}) => {return <Text style={styles.noteText}>{item}</Text>}}/>
    </SafeAreaView>
  );
}