import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../styles/colors.js';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {StoreNewNote} from '../database/operations';
import {Note} from '../Note';

function SaveButton({onPress}) {
  return (
    <View style={{alignSelf:'flex-end', bottom:75, position:'absolute'}}>
      <TouchableOpacity style={{borderRadius:70, width:70, height:70, backgroundColor: COLORS.darkBrown, 
        justifyContent:'center', alignItems:'center', elevation:5, shadowColor:'black', margin:20}} onPress={onPress}
        >
        <Ionicons name='save-sharp' size={30} color='white'/>
      </TouchableOpacity>
    </View>
  );
}

export function EditNote({route, navigation}) {
  const {note} = route.params;
  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.bodyText)
  console.log(note.title);
  console.log(note.bodyText);
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: COLORS.yellow, justifyContent:'flex-start', alignItems:'flex-start'}]}>
      <FocusAwareStatusBar/>
      <TextInput 
        onChangeText={value => setTitle(value)} 
        value={title} style={styles.noteTitle} 
        placeholder='Title ' placeholderTextColor='#c9d1a1'/>
      <TextInput 
        onChangeText={value => setText(value)} 
        value={text}  style={styles.noteBody} 
        placeholder='Text ' placeholderTextColor='#c9d1a1' 
        multiline={true} textAlignVertical='top' numberOfLines={10}/>
      <SaveButton 
        onPress={() => {
          let createdNote = new Note(title, text, 'color-example');
          StoreNewNote(createdNote); setTitle(''); setText('')}}/>
    </SafeAreaView>
  );
}
