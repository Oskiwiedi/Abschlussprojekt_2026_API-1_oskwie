// ProductController.java
// REST Controller für Produkte, stellt CRUD Endpunkte unter /api/products bereit
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.controller;

import com.motorrad.kostenmanager.model.ProductWithPriceDto;
import com.motorrad.kostenmanager.model.Product;
import com.motorrad.kostenmanager.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Gibt Produkte mit ihrem aktuellen Preis zurück (zusammengeführt aus Product und PriceEntry)
    @GetMapping
    public List<ProductWithPriceDto> getAll() {
        return productService.getAllProductsWithPrice();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    public Product create(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}