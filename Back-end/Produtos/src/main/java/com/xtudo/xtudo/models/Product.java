package com.xtudo.xtudo.models;


import com.xtudo.xtudo.enums.measurementUnit.MeasurementUnit;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

@Entity(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String description;
    @Enumerated
    private MeasurementUnit measurementUnit;
    @ManyToOne
    private Category category;
    private Boolean manufactured;
    private LocalDate creationDate;

}
