// WebConfig.java
// Konfiguriert CORS Einstellungen, damit das Frontend auf die Backend API zugreifen darf
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Erlaubt API-Zugriff vom lokalen Entwicklungsserver und dem produktiven Frontend
                registry.addMapping("/api/**")
                        .allowedOrigins(
                                "http://localhost:5173",
                                "https://abschlussprojekt-2026-api-1-oskwie.vercel.app"
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}