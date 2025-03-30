import { Modal } from 'react-native'
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { FormTitle } from '../../components/forms/FormTitle';
import { FormField } from '../../components/forms/FormField';
import { BasicButton } from '../../components/buttons/Button';
import { saveIngredient } from './ingredientRequests'

import styled from "styled-components/native";

interface IngredientsForm {
    ingredientId: number;
    formVisible: boolean;
    setFormVisible: (visible: boolean) => void;
}

export function IngredientsForm({ingredientId, formVisible, setFormVisible}: IngredientsForm) {

    const theme = useTheme();

    const [id, setId]                   = useState(ingredientId)
    const [name, setName]               = useState("");
    const [description, setDescription] = useState("");

    const closeModal = () => {
        setFormVisible(false);
        setName("");
        setDescription("");
        setId(0);
    }

    return (
        <Modal visible={formVisible} 
               animationType="fade" 
               transparent={true}
               onRequestClose={closeModal}>
            <ModalContainer>
                <ModalContent>
                    <FormTitle title="Cadastro de ingredientes" />
                    <FormField 
                        title="Nome"
                        placeHolder="Nome do ingrediente"
                        value={name}
                        handleValue={setName}
                    />
                    <FormField 
                        title="Descrição"
                        placeHolder="Descreva seu ingrediente"
                        value={description}
                        handleValue={setDescription}
                    />
                    <ButtonSection>
                        <BasicButton
                            text="Salvar"
                            buttonColor={theme.colors.green}
                            fontColor={theme.colors.white}
                            eventHandler={() => saveIngredient({name, description})}
                        />
                        <BasicButton
                            text="Cancelar"
                            buttonColor={theme.colors.secondary}
                            fontColor={theme.colors.white}
                            eventHandler={closeModal}
                        />
                    </ButtonSection>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
}


const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);  /* Fundo semi-transparente */
`;

const ModalContent = styled.View`
  width: 80%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  align-items: center;
`;

const ButtonSection = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;