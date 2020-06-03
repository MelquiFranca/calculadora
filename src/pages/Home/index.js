import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Container} from './style.js';
import {Animated} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

// import Anuncio from '../../components/Anuncio';
import Teclado from '../../components/Teclado';
import Visor from '../../components/Visor';
import Menu from '../../components/Menu';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';

export default function Home({temaDark}) {
    
    const [translateX] = useState(new Animated.Value(-280));
    const [visorHistorico, setVisorHistorico] = useState('');
    const [visorHistoricoNumero, setVisorHistoricoNumero] = useState('');
    const [numeroAtual, setNumeroAtual] = useState('');    
    
    function handlePressBotao(e, valor) {
        
        if(Number.isInteger(parseInt(valor)) || valor == '.') {
            
            if(valor != '.' || (numeroAtual.length && numeroAtual.indexOf('.') < 0)) {
                if(valor === '.' && numeroAtual.length == 0 || numeroAtual.length > 15)  {
                    return;
                }

                setNumeroAtual(`${numeroAtual}${valor}`);
            }

        } else { 
            let valorAtual;
            if(numeroAtual.length && numeroAtual.charAt(numeroAtual.length - 1) == '.') {
                valorAtual = numeroAtual.replace('.', '');
            } else {
                valorAtual = numeroAtual;
            }

            let verdadeiro = true;
            while(verdadeiro) {  
                if(valorAtual.length){
                    if(valorAtual.charAt(0) == '0' && valorAtual.charAt(1) != '.') {
                        valorAtual = valorAtual.substring(1, valorAtual.length);
                    } else {
                        verdadeiro = false;
                    }
                    
                } else {
                    verdadeiro = false;
                }
            }

            switch(valor) {
                case '=':                    
                    if(visorHistoricoNumero.length && valorAtual.length) {
                        const resultado = eval(`${visorHistoricoNumero}${valorAtual}`);
                        setVisorHistorico(`${visorHistorico}${valorAtual}${valor}`);            
                        setVisorHistoricoNumero(`${resultado}`);            
                        setNumeroAtual(`${resultado}`); 
                    }

                    return;
                case 'C':
                    setVisorHistorico('');            
                    setVisorHistoricoNumero('');            
                    setNumeroAtual(''); 
                    return;
                case 'DEL':
                    setNumeroAtual(valorAtual.slice(0, valorAtual.length - 1));
                    return;
                case '+/-':
                    if(parseFloat(valorAtual) >= 0) {
                        setNumeroAtual(`-${valorAtual}`);
                    } else {
                        const valor =  valorAtual.replace('-', '');
                        setNumeroAtual(valor);
                    }
                    return;
            }

            if(valorAtual.length) {
                setVisorHistorico(`${visorHistorico}${valorAtual}${valor}`);
                
                if(visorHistoricoNumero.length) {
                    setVisorHistoricoNumero(`${visorHistoricoNumero}${valor}`);
                } else {
                    setVisorHistoricoNumero(`${valorAtual}${valor}`);
                }
    
                setNumeroAtual(''); 
            }

        }
    }

    function moverHandle(event) {
        const { translationX } = event.nativeEvent;

        if(event.nativeEvent.oldState === State.ACTIVE) {
            if(translationX > 100) {
                translateX.setValue(0);
            }
        }
    }
    return (
        <>
            <StatusBar backgroundColor={temaDark ? "#333" : "white"} barStyle={temaDark ? "light-content" : "dark-content"}/>
            <PanGestureHandler
                onHandlerStateChange={moverHandle}
            >
                <Container>	
                    <Visor 
                        translateX={translateX} 
                        visorHistorico={visorHistorico} 
                        visorNumeroAtual={numeroAtual}
                        temaDark={temaDark}
                    />  
                    <Teclado 
                        handlePressBotao={handlePressBotao} 
                        temaDark={temaDark}/>

                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-2855368523447036~3684952469" // Test ID, Replace with your-admob-unit-id
                    // servePersonalizedAds // true or false
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} />            
                </Container>
            </PanGestureHandler>
            <Menu translateX={translateX} temaDark={temaDark}/>
        </>
    );
}
