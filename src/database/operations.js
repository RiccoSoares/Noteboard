import AsyncStorage from '@react-native-async-storage/async-storage';

//Persistent note storage functions

async function getNoteCount() {
  try {
    const count = await AsyncStorage.getItem('@note-count');
    if (isNaN(count))
      return 0;
    else 
      return parseInt(count);
  } catch (error) {
    console.warn(error);
  }
}

async function getNote(id) {
  try{
    const note = await AsyncStorage.getItem('@note-' + JSON.stringify(id));
    return JSON.parse(note);
  } catch (error) {
    console.warn(error);
  }
}

export async function getLastNote() {
  try{
    const count = await getNoteCount();
    const note = await getNote(count);
    return note;
  } catch (error) {
    console.warn(error);
  }
}

export async function StoreNewNote(note) {
  try{
    const count = await getNoteCount();
    await AsyncStorage.setItem('@note-count', JSON.stringify(count + 1));
    await AsyncStorage.setItem('@note-' + (count + 1), JSON.stringify(note));
  } catch (error) {
    console.warn(error);
  }
}

export async function getAllNotes() {
  try{
    const notes = []

    const ids = await AsyncStorage.getAllKeys()
    const data = await AsyncStorage.multiGet(ids)
    data.forEach(pair => {if(pair[0] !== '@note-count')notes.push(JSON.parse(pair[1]))})

    return notes
  } catch (error) {
    console.warn(error);
  }
}
