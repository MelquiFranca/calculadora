import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {Animated} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {  Container, BotaoTexto, BotaoMenu, Titulo } from "./style";

export default function Menu({translateX}) {
    
    const AnimatedHandle = Animated.event([{
        nativeEvent: {
            translationX: translateX
        }
    }], {useNativeDriver: false});
       
    function moverHandle(event) {
        if(event.nativeEvent.oldState === State.ACTIVE) {
            const { translationX } = event.nativeEvent;

            if(translationX < -100) {
                translateX.setValue(-280);
            }
            else {
                translateX.setValue(0); 
            }
        }
        
    }

    return (
        <PanGestureHandler 
            onGestureEvent={AnimatedHandle} 
            onHandlerStateChange={moverHandle}
        >
            <Container style={{         
                shadowColor: "#000",
                shadowOffset: {
                    width: 100,
                    height: 100,
                },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: translateX.interpolate({
                    inputRange: [-100, 0],
                    outputRange: [0, 600],
                    extrapolate: 'clamp',
                }),       
                opacity: translateX.interpolate({
                    inputRange: [-300, 0],
                    outputRange: [0.8, 1],
                    extrapolate: 'clamp'
                }),
                transform: [{
                    translateX: translateX.interpolate({
                        inputRange: [-200, 0],
                        outputRange: [-280, 0],
                        extrapolate: 'clamp',
                    })
                }],
                
            }}>
                <Titulo>Calculadora</Titulo>
                <BotaoMenu>
                    <FontAwesome5 name='calculator' size={24} color="#da4336CC"/>
                    <BotaoTexto>Calculadora</BotaoTexto>
                </BotaoMenu>
                <BotaoMenu>
                    <FontAwesome5 name='history' size={24} color="#da4336CC"/>
                    <BotaoTexto>Histórico</BotaoTexto>
                </BotaoMenu>
            </Container>
        </PanGestureHandler>
    );
}
