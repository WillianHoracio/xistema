import { View, Text } from "react-native";
import styled  from "styled-components/native"


interface formTitleProps{
    title: string;
}

const Container = styled.View`
    text-align: center;
`;

const Title = styled.Text`
    font-size: 20;
    font-weight: bolder;
`;


export function FormTitle({title}: formTitleProps){

    return(
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}