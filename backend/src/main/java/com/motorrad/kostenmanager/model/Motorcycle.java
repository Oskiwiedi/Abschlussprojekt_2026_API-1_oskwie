// Motorcycle.java
// JPA Entity für ein Motorrad, speichert Marke, Modell, Baujahr und Kennzeichen
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "motorcycle")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Motorcycle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String model;

    private Integer year;

    @Column(nullable = false)
    private String licensePlate;
}