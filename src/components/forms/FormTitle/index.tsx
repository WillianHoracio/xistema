import styled  from "styled-components/native"

interface formTitleProps{
    title: string;
}

export function FormTitle({title}: formTitleProps){
    return(
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.View`
    text-align: center;
`;

const Title = styled.Text`
    font-size: 20;
    font-weight: bolder;
`;