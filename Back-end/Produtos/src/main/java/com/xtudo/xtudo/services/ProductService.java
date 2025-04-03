package com.xtudo.xtudo.services;

import com.xtudo.xtudo.repositories.ProductRepository;
import com.xtudo.xtudo.models.Product;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

}
