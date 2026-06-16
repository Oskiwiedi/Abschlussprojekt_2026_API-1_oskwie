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