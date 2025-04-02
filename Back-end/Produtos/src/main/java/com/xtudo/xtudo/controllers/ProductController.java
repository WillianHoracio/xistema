package com.xtudo.xtudo.controllers;

import com.xtudo.xtudo.Services.ProductService;
import com.xtudo.xtudo.models.Product;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@AllArgsConstructor
public class ProductController{

    private final ProductService productService;

    @GetMapping("/list")
    public List<Product> findAll(){
        return productService.findAll();
    }

    @PostMapping
    public Product save(@RequestBody Product product){
        return productService.save(product);
    }

}
