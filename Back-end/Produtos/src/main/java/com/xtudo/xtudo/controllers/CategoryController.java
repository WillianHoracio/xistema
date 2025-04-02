package com.xtudo.xtudo.controllers;

import com.xtudo.xtudo.Services.CategoryService;
import com.xtudo.xtudo.models.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor

public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<Category> getAll(){
        return categoryService.getAll();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Category create(@RequestBody Category category){
        return categoryService.create(category);
    }

}
