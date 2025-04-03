package com.xtudo.xtudo.dto;

import com.xtudo.xtudo.enums.measurementUnit.MeasurementUnit;

public class MeassurementUnitDTO {

    private String name;
    private String symbol;

    public MeassurementUnitDTO(MeasurementUnit unit) {
        this.name = unit.name(); // Nome do enum (ex: UNITY, GRAM)
        this.symbol = unit.getSimbol(); // Símbolo (ex: UN, g)
    }

    public String getName(){
        return this.name;
    }

    public String getSymbol(){
        return this.symbol;
    }

}
