import { ingredientService } from '../../services/modules/ingredients/ingredientService'
import { Ingredient } from "../../services/modules/ingredients/ingredientTypes";
import { Alert } from "react-native"

interface IngredientInterface { 
    name: string; 
    description : string;
};

//METODOS INACABADOS. FALTA IMPLEMENTAR MELHOR TRATATIVA DE ERROS ADEQUADA. MANTIDA A GENERICA TEMPORARIAMENTE

export async function saveIngredient({name,description}: IngredientInterface){
    if (!name.trim()) {
        Alert.alert("Erro", "O nome do ingrediente é obrigatório!");
        return;
    }

    const newIngredient: Ingredient = { name, description };

    try {
        await ingredientService.createIngredient(newIngredient);
        Alert.alert("Sucesso", "Ingrediente cadastrado com sucesso!");
    } catch (error) {
        Alert.alert("Erro", "Ocorreu um erro ao salvar o ingrediente.");
    }
}

export async function getAllIngredients() {
    try{
        const ingredientList = await ingredientService.getIngredients();
        return ingredientList || [];;
    } catch (error) {
        Alert.alert("Erro", "Não foi possível encontrar a lista de ingredientes.");
        return []
    }
}