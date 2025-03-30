import { FlatList } from 'react-native';
import { NewCell } from '../../components/NewCell';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';
import { IngredientsForm } from './ingredientsForm';
import { getAllIngredients } from './ingredientRequests';
import { IngredientCell } from '../../components/IngredientCell/IngredientCell';
import styled from "styled-components/native";
import { View } from 'react-native';

export function Ingredients() {
    const theme = useTheme();
    const [id, setId] = useState(0);
    const [formVisible, setFormVisible] = useState(false);
    const [ingredients, setIngredients] = useState<any[]>([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const ingredientsList = await getAllIngredients();
                setIngredients(ingredientsList);
            } catch (error) {
                console.error("Erro ao buscar ingredientes:", error);
            }
        };

        fetchIngredients();
    }, []);

    const toggleForm = (ingredientId: number) => {
        setId(ingredientId);
        setFormVisible(true);
    };

    return (
        <Container>
            <FlatList
                data={ingredients}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Para manter duas colunas
                columnWrapperStyle={{ justifyContent: "space-around" }} // Mantém espaçamento entre os itens
                contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
                renderItem={({ item }) => (
                    <IngredientCell
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        width="45%"
                        height="150px"
                        handleClick={() => toggleForm(item.id)}
                    />
                )}
                ListFooterComponent={() => (
                    <FooterArea>
                        <NewCell width="45%" height="150px" handleClick={() => toggleForm(0)} />
                    </FooterArea>
                )}
            />

            <IngredientsForm 
                ingredientId={id} 
                formVisible={formVisible} 
                setFormVisible={setFormVisible}
            />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 10px;
`;

const FooterArea = styled.View`
    margin-left: 10px;
`;