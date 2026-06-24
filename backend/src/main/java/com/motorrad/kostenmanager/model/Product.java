// Product.java
// JPA-Entity für ein Produkt aus dem eBay-Scraping – speichert Name, Beschreibung und Bild-URL
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    // Länge auf 1000 Zeichen erhöht, da eBay-Bild-URLs sehr lang sein können
    @Column(length = 1000)
    private String imageUrl;
}