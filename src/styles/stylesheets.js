import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native'
import {COLORS} from './colors'


const {HEIGHT, WIDTH} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  noteTitle: {
    fontSize:30,
    color: COLORS.darkDarkBrown,
    fontWeight: '900',
    padding:10,
    marginHorizontal:10,
    marginTop:20,
  },
  noteBody: {
    fontSize:20,
    color: COLORS.darkBrown,
    fontWeight: '900',
    padding:10,
    marginHorizontal:10,
    paddingBottom:100,
  },
  noteText: {
    fontSize:20,
    color: COLORS.darkDarkBrown,
    fontWeight: '900',
    padding:10,
  },
  note: {
    backgroundColor: COLORS.yellow,
    width: 70,
    height:65,
    elevation:7
  }
});
