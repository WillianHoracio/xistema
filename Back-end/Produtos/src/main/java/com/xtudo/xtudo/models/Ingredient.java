package com.xtudo.xtudo.models;

import com.xtudo.xtudo.enums.measurementUnit.MeasurementUnit;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

@Entity (name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "O nome do ingrediente é obrigatório.")
    private String name;
    @NotBlank(message = "Nenhuma unidade de medida informada para ingrediente.")
    private MeasurementUnit measurementUnit;
    @Positive(message = "O custo do ingrediente precisa ser maior que zero.")
    private Float cost;
    private LocalDate validity;
    private Boolean manufactured;
    @ManyToOne
    private Category category;

}
