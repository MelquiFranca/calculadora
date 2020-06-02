import {Animated} from 'react-native';
import styled from 'styled-components/native';
export const Container = styled(Animated.View)`    
    z-index: 5;
    position: absolute; 
    top: 0;
    background: #FFF;
    width: 280px;
    height: 100%;
    /* transform: translateX(-280px); */
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0;
`;

export const BotaoMenu = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    padding: 5px 20px;
`;

export const BotaoTexto = styled.Text`
    color: #444;
    margin-left: 10px;
    font-size: 16px;
`;
export const Titulo = styled.Text`
    color: #da4336CC;
    margin: 0 20px;
    font-size: 26px;
`;