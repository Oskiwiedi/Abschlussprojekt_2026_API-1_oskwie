// MotorcycleController.java
// REST-Controller für Motorräder – stellt CRUD-Endpunkte unter /api/motorcycles bereit
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.controller;

import com.motorrad.kostenmanager.model.Motorcycle;
import com.motorrad.kostenmanager.service.MotorcycleService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/motorcycles")
public class MotorcycleController {

    private final MotorcycleService MotorcycleService;

    public MotorcycleController(MotorcycleService MotorcycleService) {
        this.MotorcycleService = MotorcycleService;
    }

    @GetMapping
    public List<Motorcycle> getAll() {
        return MotorcycleService.getAllMotorcycle();
    }

    @GetMapping("/{id}")
    public Motorcycle getById(@PathVariable Long id) {
        return MotorcycleService.getMotorcycleById(id);
    }

    @PostMapping
    public Motorcycle create(@RequestBody Motorcycle Motorcycle) {
        return MotorcycleService.createMotorcycle(Motorcycle);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        MotorcycleService.deleteMotorcycle(id);
    }

    @PutMapping("/{id}")
    public Motorcycle update(@PathVariable Long id, @RequestBody Motorcycle motorcycle) {
        return MotorcycleService.updateMotorcycle(id, motorcycle);
    }
}