import React, {Component} from 'react';
import {Animated, Text, PanResponder} from 'react-native';

import {styles} from '../styles/stylesheets';
import {COLORS} from '../styles/colors';

export class NoteComponent extends Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderRelease: () => this.state.position.flattenOffset(),
            onPanResponderMove: (event, gesture) => {
                this.state.position.setValue({
                    x:gesture.dx, y:gesture.dy
                })
                Animated.event([null,{dx:this.state.position.x,dy:this.state.position.y}],{useNativeDriver:false})
            },
            onPanResponderGrant: () => {
                this.state.position.setOffset({
                    x:this.state.position.x._value,
                    y:this.state.position.y._value
                })
            }
        });
        this.state = {
            position,
            panResponder
        };
    }
    render() {
        return (
            <Animated.View style={[styles.note, this.state.position.getLayout()]} {...this.state.panResponder.panHandlers}>
                <Text style={{color:COLORS.darkBrown, fontWeight:'400', margin:5}}>Text</Text>
            </Animated.View>
        );
    }
    
}