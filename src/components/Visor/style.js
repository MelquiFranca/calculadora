
import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`   
    height: 35%;
    width: 100%;
    flex-direction: column;
    background: ${props => props.temaDark ? '#333' : '#F5F5F5' }; 
    padding: 10px;
`;

export const Topo = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-start;    
`;

export const TopoTexto = styled.Text`
    font-size: 24px;
    font-weight: 100;
    color: ${props => props.temaDark ? '#FFF' : '#da4336CC'};
    margin-left: 10px;
    `;
export const BotaoMenu = styled.TouchableOpacity`

`;

export const Painel = styled.View`
    flex: 3;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
`;
export const PainelTextoSuperior = styled.Text`
    flex: 1;
    font-size: 20px;
    font-weight: 100;
    opacity: 0.8;
    color: ${props => props.temaDark ? '#FFF' : '#da4336CC'};
`;
export const PainelTextoInferior = styled.Text`
    flex: 1;
    font-size: 30px;
    font-weight: 100;
    color: ${props => props.temaDark ? '#FFF' : '#da4336CC'};
`;