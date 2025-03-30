import api from "../../api";
import { Ingredient } from "./ingredientTypes";

//O BACK-END AINDA NÃO POSSUI TRATAMENTO DE ERROS ADEQUADO, NEM TODOS OS END-POINTS DISPONÍVES
//AINDA ESTÁ EM CONSTRUÇÃO
export const ingredientService = {
    getIngredients: async (): Promise<Ingredient[]> => {
        const response = await api.get("/ingredient");
        return response.data;
    },

    getIngredientById: async (id: string): Promise<Ingredient> => {
        const response = await api.get(`/ingredient/${id}`);
        return response.data;
    },

    createIngredient: async (ingredientData: Ingredient): Promise<Ingredient> => {
        const response = await api.post("/ingredient", ingredientData);
        return response.data;
    },

    deleteIngredient: async (id: string): Promise<void> => {
        await api.delete(`/ingredient/${id}`);
    },
};