import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Button} from 'react-native';

import {COLORS} from '../styles/colors.js';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {StoreNewNote} from '../database/operations';
import {Note} from '../Note';

export function NewNote() {
  const [text, setText] = useState('')
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: COLORS.yellow}]}>
      <FocusAwareStatusBar/>
      <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', width: '60%', position:'absolute', top:100}}>
        <TextInput 
          onChangeText={note => setText(note)} 
          value={text} style={styles.noteText} 
          placeholder='Type note ' placeholderTextColor='#c9d1a1' 
          maxLength={10} 
          autoCorrect={false}/>
        <Button 
          onPress={() => {
            let createdNote = new Note(text, 'body-example', 'color-example');
            StoreNewNote(createdNote); setText('')}} 
          title='Save' 
          color='#876759'/>
      </View>
    </SafeAreaView>
  );
}
