// MotorcycleService.java
// Serviceschicht für Motorräder, kapselt alle Datenbankzugriffe für CRUD Operationen
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.service;

import com.motorrad.kostenmanager.model.Motorcycle;
import com.motorrad.kostenmanager.repository.MotorcycleRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Service
public class MotorcycleService {

    private final MotorcycleRepository motorcycleRepository;

    public MotorcycleService(MotorcycleRepository motorcycleRepository) {
        this.motorcycleRepository = motorcycleRepository;
    }

    public List<Motorcycle> getAllMotorcycle() {
        return motorcycleRepository.findAll();
    }

    public Motorcycle getMotorcycleById(Long id) {
        return motorcycleRepository.findById(id).orElseThrow();
    }

    public Motorcycle createMotorcycle(Motorcycle motorcycle) {
        return motorcycleRepository.save(motorcycle);
    }

    public void deleteMotorcycle(Long id) {
        motorcycleRepository.deleteById(id);
    }

    public Motorcycle updateMotorcycle(Long id, Motorcycle motorcycle) {
        motorcycle.setId(id);
        return motorcycleRepository.save(motorcycle);
    }
}