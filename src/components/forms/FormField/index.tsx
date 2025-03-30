import { View } from "react-native";
import styled from "styled-components/native";

interface cellProps{
    title: string;
    placeHolder: string;
    value: string;
    handleValue: (value: string) => void;
}

export function FormField({title,placeHolder,value,handleValue}: cellProps){

    return(
        <Container>
            <TextField>
                {title}
            </TextField>
            <Input placeholder={placeHolder} value={value} onChangeText={handleValue} multiline={true}/>
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    height: auto;
    justify-content: center;
    padding: 5px;
`;

const TextField = styled.Text`
    font-size: 16px;
    font-weight: 800;
`;

const Input = styled.TextInput`
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
`;