import React from 'react';

import {Container, Botao, BotaoTexto} from './style';

export default function Teclado({handlePressBotao, temaDark}) {
    return(
        <Container>
            <Botao 
                onPress={e => handlePressBotao(e, 'C')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >C</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '+/-')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >+/-</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '%')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >%</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, 'DEL')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                > DEL </BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '7')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >7</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '8')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >8</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '9')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >9</BotaoTexto>
            </Botao>
            <Botao 
                cor={3}
                onPress={e => handlePressBotao(e, '/')}                 
            >
                <BotaoTexto                    
                cor={2}>/</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '4')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >4</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '5')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >5</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '6')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >6</BotaoTexto>
            </Botao>
            <Botao 
                cor={3}
                onPress={e => handlePressBotao(e, '*')} 
            >
                <BotaoTexto                    
                cor={2}>x</BotaoTexto>
            </Botao>
            <Botao 
                onPress={e => handlePressBotao(e, '1')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >1</BotaoTexto>
            </Botao>
            <Botao                 
                onPress={e => handlePressBotao(e, '2')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >2</BotaoTexto>
            </Botao>
            <Botao                 
                onPress={e => handlePressBotao(e, '3')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >3</BotaoTexto>
            </Botao>
            <Botao 
                cor={3}
                onPress={e => handlePressBotao(e, '-')} 
            >
                <BotaoTexto                    
                cor={2}>-</BotaoTexto>
            </Botao>
            <Botao 

                onPress={e => handlePressBotao(e, '0')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                >0</BotaoTexto>
            </Botao>
            <Botao 
                cor={3}
                onPress={e => handlePressBotao(e, '.')} 
            >
                <BotaoTexto                    
                cor={2}>.</BotaoTexto>
            </Botao>
            <Botao 
                cor={3}
                onPress={e => handlePressBotao(e, '+')} 
            >
                <BotaoTexto                    
                cor={2}>+</BotaoTexto>
            </Botao>
            <Botao cor={4}
                onPress={e => handlePressBotao(e, '=')} 
                temaDark={temaDark}
            >
                <BotaoTexto
                    temaDark={temaDark}    
                    cor={1}
                >=</BotaoTexto>
            </Botao>
        </Container>
    );
}