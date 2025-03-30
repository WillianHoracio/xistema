import { View, Text, Alert, Modal, TextInput } from 'react-native'
import styled from "styled-components/native";

interface basicButtonProps {
    text: string;
    buttonColor: string;
    fontColor: string;
    eventHandler: () => void | Promise<void>;
}


const CustomButton = styled.TouchableOpacity<{ buttonColor: string}>`
    background-color: ${({ buttonColor }) => buttonColor};
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    width: 1fr;
    min-width: 120px;
`;

const ButtonText = styled.Text<{ fontColor: string}>`
    color: ${({fontColor}) => fontColor};
    font-size: 16px;
    font-weight: 800;
    text-align: center;
`;

export function BasicButton({text,buttonColor,fontColor,eventHandler}: basicButtonProps){
    
    return(
        <CustomButton buttonColor={buttonColor}>
            <ButtonText fontColor={fontColor} onPress={eventHandler}>
                {text}
            </ButtonText>
        </CustomButton>
    )
}