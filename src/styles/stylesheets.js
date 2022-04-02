import {StyleSheet} from 'react-native'
import {COLORS} from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  noteText: {
    fontSize:25,
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
