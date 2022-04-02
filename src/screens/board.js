import React, {useRef} from 'react';
import {SafeAreaView, View, PanResponder, Animated, Text} from 'react-native';

import {COLORS} from '../styles/colors';
import {styles} from '../styles/stylesheets';
import {FocusAwareStatusBar} from '../components/status-bar';


export function Board() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event([null,{dx: pan.x, dy: pan.y}],{useNativeDriver:false}),
      onPanResponderRelease: () => {pan.flattenOffset()}
    })
  ).current;
  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:COLORS.green}]}>
      <FocusAwareStatusBar/>
      <Animated.View style={[styles.note, pan.getLayout()]} {...panResponder.panHandlers}>
        <Text style={{color:COLORS.darkBrown, fontWeight:'400', margin:5}}>Text</Text>
      </Animated.View>
    </SafeAreaView>
  );
}
