// MotorcycleRepository.java
// Spring Data JPA Repository für Motorräder – stellt automatisch alle CRUD-Methoden bereit
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.repository;
import com.motorrad.kostenmanager.model.Motorcycle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotorcycleRepository extends JpaRepository<Motorcycle, Long> {
}