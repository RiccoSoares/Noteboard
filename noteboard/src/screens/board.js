import React from 'react';
import {SafeAreaView} from 'react-native';

import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';

export function Board() {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:COLORS.green}]}>
      <FocusAwareStatusBar/>
    </SafeAreaView>
  );
}