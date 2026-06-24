// PriceEntryRepository.java
// Spring Data JPA Repository für Preiseinträge – mit benutzerdefinierter Suchmethode nach Produkt
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.repository;

import com.motorrad.kostenmanager.model.PriceEntry;
import com.motorrad.kostenmanager.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceEntryRepository extends JpaRepository<PriceEntry, Long> {
    // Spring Data leitet aus dem Methodennamen automatisch die SQL-Abfrage ab (WHERE product_id = ?)
    PriceEntry findByProduct(Product product);
}