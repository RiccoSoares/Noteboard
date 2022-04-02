import React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {COLORS} from '../styles/colors.js'

export function FocusAwareStatusBar() {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar barStyle='dark-content' backgroundColor={COLORS.beige}/> : null;
}