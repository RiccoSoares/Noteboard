import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {getAllNotes, getLastNote} from '../database/operations';
import {Note} from '../Note';
import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {NoteComponent} from '../components/note-component';

export function Board() {
  
  const [note, setNote] = useState([]);
  //getLastNote().then(retrievedNote => {setNote(retrievedNote)});

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:COLORS.green}]}>
      <FocusAwareStatusBar/>

    </SafeAreaView>
  );
}
