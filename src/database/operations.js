import AsyncStorage from '@react-native-async-storage/async-storage';

//Persistent note storage functions

async function UpdateNoteCount() {
  try {
    const count = parseInt(await AsyncStorage.getItem('@note-count'));
    const newCount = isNaN(count) ? 1 : count + 1
    await AsyncStorage.setItem('@note-count', JSON.stringify(newCount));
    return newCount;
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

export async function StoreNote(note) {
  try{
    note.id = (note.id == null) ? await UpdateNoteCount() : note.id;
    await AsyncStorage.setItem('@note-' + (note.id), JSON.stringify(note));
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
