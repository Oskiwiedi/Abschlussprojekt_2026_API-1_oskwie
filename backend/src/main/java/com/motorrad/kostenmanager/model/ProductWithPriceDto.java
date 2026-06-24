// ProductWithPriceDto.java
// Datentransferobjekt, das ein Produkt mit seinem aktuellen Preis und der Shop URL kombiniert
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class ProductWithPriceDto {
    private Long id;
    private String name;
    private String imageUrl;
    private BigDecimal price;
    private String url;
}