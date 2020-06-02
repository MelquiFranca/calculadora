const CORES = {
    1: '#FFF',
    2: '#555',
    3: '#DDD',
    4: '#da4336CC'
}
import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`   
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 1px solid black; */
`;

export const Botao = styled.TouchableOpacity`
    background: ${props => props.cor ? CORES[props.cor]: props.temaDark ? '#444': '#FFF'};
    width: 25%;
    height: 20%;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props =>props.temaDark ? '#555': '#EEE'};
`;

export const BotaoTexto = styled.Text`
    font-size: 34px;
    font-weight: 100;
    color: ${props => props.cor ? CORES[props.cor] : props.temaDark ? '#FFF': '#444'};
`;