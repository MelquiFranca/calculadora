import {Animated} from 'react-native';
import styled from 'styled-components/native';
export const Container = styled(Animated.View)` 
    z-index: 1;
    flex: 1;
    flex-direction: column;
    /* padding-top: 20px; */
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Text = styled.Text`
    color: blue;
`;