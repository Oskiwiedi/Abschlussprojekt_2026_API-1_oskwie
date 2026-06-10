package com.motorrad.kostenmanager.controller;

import com.motorrad.kostenmanager.model.PriceEntry;
import com.motorrad.kostenmanager.service.PriceEntryService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/price-entries")
public class PriceEntryController {

    private final PriceEntryService priceEntryService;

    public PriceEntryController(PriceEntryService priceEntryService) {
        this.priceEntryService = priceEntryService;
    }

    @GetMapping
    public List<PriceEntry> getAll() {
        return priceEntryService.getAllPriceEntries();
    }

    @GetMapping("/{id}")
    public PriceEntry getById(@PathVariable Long id) {
        return priceEntryService.getPriceEntryById(id);
    }

    @PostMapping
    public PriceEntry create(@RequestBody PriceEntry priceEntry) {
        return priceEntryService.createPriceEntry(priceEntry);
    }

    @PutMapping("/{id}")
    public PriceEntry update(@PathVariable Long id, @RequestBody PriceEntry priceEntry) {
        priceEntry.setId(id);
        return priceEntryService.updatePriceEntry(id, priceEntry);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        priceEntryService.deletePriceEntry(id);
    }
}