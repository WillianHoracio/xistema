package com.xtudo.xtudo.Services;

import com.xtudo.xtudo.Repositories.CompositionRepository;
import com.xtudo.xtudo.models.Composition;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CompositionService {
    private final CompositionRepository compositionRepository;

    public Composition create(Composition composition){
        return compositionRepository.save(composition);
    }

    public List<Composition> findAllProductIngredients(Long id){
        return compositionRepository.findByProductId(id);
    }

}
