package com.motorrad.kostenmanager.controller;

// ====================================================
// HINWEIS: Dieser Controller wurde mit Unterstützung
// von KI (Claude) erstellt und angepasst.
// ====================================================

import com.motorrad.kostenmanager.service.EbayScrapingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/scraping")
public class ScrapingController {

    private final EbayScrapingService ebayScrapingService;

    public ScrapingController(EbayScrapingService ebayScrapingService) {
        this.ebayScrapingService = ebayScrapingService;
    }

    @PostMapping("/fetch")
    public ResponseEntity<String> fetch(@RequestParam String query) {
        try {
            ebayScrapingService.fetchMotorcycleParts(query);
            return ResponseEntity.ok("Produkte erfolgreich geholt!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Fehler: " + e.getMessage());
        }
    }
}