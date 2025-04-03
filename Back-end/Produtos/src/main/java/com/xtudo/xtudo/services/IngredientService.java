package com.xtudo.xtudo.services;

import com.xtudo.xtudo.repositories.IngredientRepository;
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

    public Ingredient findById(Long id){
        return ingredientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrediente não encontrado. ID [" + id +"]"));
    }
    /*public Ingredient update(Ingredient ingredient) { return ingredientRepository.}*/
}
