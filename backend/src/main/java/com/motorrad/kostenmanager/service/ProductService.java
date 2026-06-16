package com.motorrad.kostenmanager.service;

import com.motorrad.kostenmanager.model.Product;
import com.motorrad.kostenmanager.model.ProductWithPriceDto;
import com.motorrad.kostenmanager.repository.PriceEntryRepository;
import com.motorrad.kostenmanager.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final PriceEntryRepository priceEntryRepository;

    public ProductService(ProductRepository productRepository, PriceEntryRepository priceEntryRepository) {
        this.productRepository = productRepository;
        this.priceEntryRepository = priceEntryRepository;
    }

    public List<ProductWithPriceDto> getAllProductsWithPrice() {
        return productRepository.findAll().stream()
                .map(product -> {
                    var priceEntry = priceEntryRepository.findByProduct(product);
                    return new ProductWithPriceDto(
                            product.getId(),
                            product.getName(),
                            product.getImageUrl(),
                            priceEntry != null ? priceEntry.getPrice() : null,
                            priceEntry != null ? priceEntry.getUrl() : null
                    );
                })
                .collect(Collectors.toList());
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Long id, Product product) {
        product.setId(id);
        return productRepository.save(product);
    }
}