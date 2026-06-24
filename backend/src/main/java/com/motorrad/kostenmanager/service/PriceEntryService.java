// PriceEntryService.java
// Service-Schicht für Preiseinträge – kapselt alle Datenbankzugriffe für CRUD-Operationen
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.service;

import com.motorrad.kostenmanager.model.PriceEntry;
import com.motorrad.kostenmanager.repository.PriceEntryRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PriceEntryService {

    private final PriceEntryRepository priceEntryRepository;

    public PriceEntryService(PriceEntryRepository priceEntryRepository) {
        this.priceEntryRepository = priceEntryRepository;
    }

    public List<PriceEntry> getAllPriceEntries() {
        return priceEntryRepository.findAll();
    }

    public PriceEntry getPriceEntryById(Long id) {
        return priceEntryRepository.findById(id).orElseThrow();
    }

    public PriceEntry createPriceEntry(PriceEntry priceEntry) {
        return priceEntryRepository.save(priceEntry);
    }

    public void deletePriceEntry(Long id) {
        priceEntryRepository.deleteById(id);
    }

    public PriceEntry updatePriceEntry(Long id, PriceEntry priceEntry) {
        priceEntry.setId(id);
        return priceEntryRepository.save(priceEntry);
    }
}