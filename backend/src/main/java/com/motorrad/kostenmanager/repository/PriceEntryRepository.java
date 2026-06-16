package com.motorrad.kostenmanager.repository;

import com.motorrad.kostenmanager.model.PriceEntry;
import com.motorrad.kostenmanager.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceEntryRepository extends JpaRepository<PriceEntry, Long> {
    PriceEntry findByProduct(Product product);
}