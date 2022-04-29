import React, {useState, useRef} from 'react';
import {SafeAreaView, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../styles/colors.js';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';
import {StoreNote} from '../database/operations';
import {Note} from '../Note';

function SaveButton({onPress}) {
  return (
    <View style={{alignSelf:'flex-end', bottom:75, position:'absolute'}}>
      <TouchableOpacity style={{borderRadius:70, width:70, height:70, backgroundColor: COLORS.darkBrown, 
        justifyContent:'center', alignItems:'center', elevation:5, shadowColor:'black', margin:20}} onPress={onPress}>
        <Ionicons name='save-sharp' size={30} color='white'/>
      </TouchableOpacity>
    </View>
  );
}

export function EditNote({route, navigation}) {
  const whenExited = navigation.addListener('blur', () => {
    navigation.setParams({note: new Note('','','')});
  });
  
  const {note, noteId} = route.params;
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.bodyText);


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
          note.title = title;
          note.bodyText = text;
          StoreNote(note).then(()=> {
            navigation.navigate('Note List', {});
          });
        }}/>
    </SafeAreaView>
  );
}
