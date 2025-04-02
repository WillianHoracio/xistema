package com.xtudo.xtudo.enums.measurementUnit;

public enum MeasurementUnit {
    UNITY("UN"),
    GRAM("g"),
    KILOGRAM("Kg"),
    SECOND("s"),
    MINUTE("m"),
    HOUR("h"),
    DAY("d"),
    WEEK("w"),
    MONTH("m");

    private final String simbol;

    MeasurementUnit(String simbol){
        this.simbol = simbol;
    }
    public String getSimbol(){
        return simbol;
    }


}
