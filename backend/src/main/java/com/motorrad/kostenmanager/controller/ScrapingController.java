// ScrapingController.java
// REST Controller zum Auslösen des eBay Scrapings, Endpunkt unter /api/scraping/fetch
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.controller;

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
            // Fehlerdetails im Response-Body zurückgeben, damit das Frontend informiert wird
            return ResponseEntity.status(500).body("Fehler: " + e.getMessage());
        }
    }
}