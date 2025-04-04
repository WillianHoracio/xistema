package com.xtudo.xtudo.controllers;
import com.xtudo.xtudo.services.IngredientService;
import com.xtudo.xtudo.enums.measurementUnit.MeasurementUnit;
import com.xtudo.xtudo.models.Ingredient;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/ingredients")
@AllArgsConstructor
public class IngredientController {

    private final IngredientService ingredientService;

    @GetMapping("/{id}")
    public Ingredient findById(@PathVariable Long id) {
        return ingredientService.findById(id);
    }

    @GetMapping("/list")
    public List<Ingredient> findAll(){
        return ingredientService.findAll();
    }

    @GetMapping("/measurement-units")
    public List<MeasurementUnit> getMeasurementUnitsList(){
        return Arrays.asList(MeasurementUnit.values());
    }

    @PostMapping
    public Ingredient create(@Valid @RequestBody Ingredient ingredient){
        return ingredientService.save(ingredient);
    }
}
