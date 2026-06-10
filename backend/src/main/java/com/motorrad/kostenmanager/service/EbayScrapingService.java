package com.motorrad.kostenmanager.service;

// ====================================================
// HINWEIS: Dieser Service wurde mit Unterstützung von
// KI (Claude) erstellt und angepasst.
// ====================================================

import com.motorrad.kostenmanager.model.PriceEntry;
import com.motorrad.kostenmanager.model.Product;
import com.motorrad.kostenmanager.repository.PriceEntryRepository;
import com.motorrad.kostenmanager.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;
import java.util.Map;

@Service
public class EbayScrapingService {

    @Value("${ebay.app.id}")
    private String appId;

    @Value("${ebay.cert.id}")
    private String certId;

    private final ProductRepository productRepository;
    private final PriceEntryRepository priceEntryRepository;

    public EbayScrapingService(ProductRepository productRepository, PriceEntryRepository priceEntryRepository) {
        this.productRepository = productRepository;
        this.priceEntryRepository = priceEntryRepository;
    }

    private String getAccessToken() throws Exception {
        String credentials = appId + ":" + certId;
        String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes());

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + encodedCredentials);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        String body = "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope";

        HttpEntity<String> request = new HttpEntity<>(body, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(
                "https://api.ebay.com/identity/v1/oauth2/token",
                request,
                Map.class
        );

        return (String) response.getBody().get("access_token");
    }

    public void fetchMotorcycleParts(String searchQuery) throws Exception {
        String token = getAccessToken();

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        headers.set("X-EBAY-C-MARKETPLACE-ID", "EBAY_DE");

        HttpEntity<String> request = new HttpEntity<>(headers);

        String url = "https://api.ebay.com/buy/browse/v1/item_summary/search?q="
                + searchQuery + "&category_ids=10063&limit=10";

        ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, request, Map.class);

        Map<String, Object> body = response.getBody();
        List<Map<String, Object>> items = (List<Map<String, Object>>) body.get("itemSummaries");

        if (items != null) {
            for (Map<String, Object> item : items) {
                String title = (String) item.get("title");
                Map<String, Object> priceMap = (Map<String, Object>) item.get("price");
                String priceValue = (String) priceMap.get("value");
                String itemUrl = (String) item.get("itemWebUrl");

                Product product = new Product();
                product.setName(title);
                product.setDescription("eBay Produkt");
                productRepository.save(product);

                PriceEntry priceEntry = new PriceEntry();
                priceEntry.setPrice(new java.math.BigDecimal(priceValue));
                priceEntry.setShopName("eBay");
                priceEntry.setUrl(itemUrl);
                priceEntry.setFetchedAt(LocalDateTime.now());
                priceEntry.setProduct(product);
                priceEntryRepository.save(priceEntry);
            }
        }
    }
}