package com.xtudo.xtudo.services;

import com.xtudo.xtudo.exceptions.GlobalExceptionHandler;
import com.xtudo.xtudo.exceptions.ResourceNotFoundException;
import com.xtudo.xtudo.repositories.IngredientRepository;
import com.xtudo.xtudo.models.Ingredient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public Ingredient save(Ingredient ingredient){
        return ingredientRepository.save(ingredient);
    }

    public List<Ingredient> findAll(){
        return ingredientRepository.findAll();
    }

    public Ingredient findById(Long id){
        return ingredientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrediente não encontrado. ID [" + id +"]"));
    }

    public Ingredient delete(Long id) {
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ingrediente com ID " + id + " não encontrado."));

        ingredientRepository.delete(ingredient);
        return ingredient;
    }
    /*public Ingredient update(Ingredient ingredient) { return ingredientRepository.}*/
}
