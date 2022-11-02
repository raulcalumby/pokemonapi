import styled, {css} from "styled-components/native";


export const Container = styled.TouchableOpacity`
        ${({ theme }) => css`
            width: 50%;
            height: 50px;
            background-color: ${theme.colors.dark};
            margin-top: 20px;
            border-radius: 20px;
            justify-content:center;
            align-items: center;
        `} 
`;


export const Title = styled.Text`
        ${({ theme }) => css`
           font-size: 15px;
           color: ${theme.colors.text_white};
        `} 
`;