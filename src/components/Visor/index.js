import React, {useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {Animated} from 'react-native';
import { Container, Painel, PainelTextoInferior, PainelTextoSuperior, Topo, TopoTexto, Menu, BotaoMenu } from './style';

export default function Visor({translateX, visorHistorico, visorNumeroAtual, temaDark}) {

    return (
        <Container temaDark={temaDark}>
            <Topo>                
                <BotaoMenu onPress={() => {
                    // translateX.setValue(0)
                    Animated.timing(translateX, {
                        toValue: 0,
                        duration: 500,
                      }).start();
                }}>
                    <FontAwesome5 name='bars' size={30} color={temaDark ? '#FFF' : '#da4336CC'}/>
                </BotaoMenu>
                <TopoTexto temaDark={temaDark}>Calculadora</TopoTexto>
            </Topo>
            <Painel>
                <PainelTextoSuperior temaDark={temaDark}>{visorHistorico}</PainelTextoSuperior>
                <PainelTextoInferior temaDark={temaDark}>{visorNumeroAtual}</PainelTextoInferior>
            </Painel>
        </Container>
    );
}
