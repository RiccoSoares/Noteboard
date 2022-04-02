import {StyleSheet} from 'react-native'
import {COLORS} from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  noteText: {
    fontSize:30,
    color: COLORS.darkDarkBrown,
    fontWeight: '900',
    padding:10,
  }
});
