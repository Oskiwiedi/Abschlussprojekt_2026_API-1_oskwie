// ProductRepository.java
// Spring Data JPA Repository für Produkte – stellt automatisch alle CRUD-Methoden bereit
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.repository;
import com.motorrad.kostenmanager.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}