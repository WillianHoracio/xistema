package com.xtudo.xtudo.controllers;

import com.xtudo.xtudo.Services.IngredientService;
import com.xtudo.xtudo.models.Ingredient;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredients")
@AllArgsConstructor
public class IngredientController {

    private final IngredientService ingredientService;

    @GetMapping
    public List<Ingredient> findAll(){
        return ingredientService.findAll();
    }

    @PostMapping
    public Ingredient create(@Valid @RequestBody Ingredient ingredient){
        return ingredientService.create(ingredient);
    }
}
