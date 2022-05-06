import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {getAllNotes, getAllBoardNotes} from '../database/operations';
import {Note} from '../Note';
import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {NoteComponent} from '../components/note-component';

export function Board({navigation}) {
  
  const whenFocused = navigation.addListener('focus', () => {
    getAllBoardNotes().then(retrievedNotes => {setNotes(retrievedNotes)});
  });
  //const [note, setNote] = useState([]);
  const [notes, setNotes] = useState([]);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:COLORS.green}]}>
      <FocusAwareStatusBar/>
      {notes.map(item => (
      <NoteComponent note={item} key={item.id}/>
      ))}
    </SafeAreaView>
  );
}
