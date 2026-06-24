// PriceEntry.java
// JPA Entity für einen Preiseintrag, verknüpft einen Preis mit dem zugehörigen Produkt und Abfragezeitpunkt
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.Date;
import java.time.LocalDateTime;
import lombok.Setter;

@Entity
@Table(name = "price_entry")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PriceEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private String shopName;

    @Column(length = 1000)
    private String url;

    @Column(nullable = false)
    private LocalDateTime fetchedAt;

    // Jeder Preis-Eintrag gehört genau einem Produkt (n:1 Beziehung, Fremdschlüssel: product_id)
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}