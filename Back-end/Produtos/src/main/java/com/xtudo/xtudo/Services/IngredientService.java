package com.xtudo.xtudo.Services;

import com.xtudo.xtudo.Repositories.IngredientRepository;
import com.xtudo.xtudo.models.Ingredient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public Ingredient create(Ingredient ingredient){
        return ingredientRepository.save(ingredient);
    }

    public List<Ingredient> findAll(){
        return ingredientRepository.findAll();
    }

    /*public Ingredient update(Ingredient ingredient) { return ingredientRepository.}*/
}
