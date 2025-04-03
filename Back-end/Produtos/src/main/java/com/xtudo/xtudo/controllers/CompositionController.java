package com.xtudo.xtudo.controllers;

import com.xtudo.xtudo.services.CompositionService;
import com.xtudo.xtudo.models.Composition;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/composition")
@AllArgsConstructor
public class CompositionController {

    private final CompositionService compositionService;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Composition> findAllProductIngredients(@PathVariable("id") Long id){
        return compositionService.findAllProductIngredients(id);
    }

    @PostMapping("/{id}/add")
    public Composition create(@RequestBody Composition composition){
        return compositionService.create(composition);
    }
}
