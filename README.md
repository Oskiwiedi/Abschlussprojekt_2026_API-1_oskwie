# Motorrad Kosten Manager

Eine Full-Stack Webanwendung zur Verwaltung von Motorrad-Ausgaben und Preisvergleich von Motorrad-Ersatzteilen via eBay API.

## Live Demo

- **Frontend:** https://abschlussprojekt-2026-api-1-oskwie.vercel.app
- **Backend:** https://abschlussprojekt-2026-api-1-oskwie.onrender.com
- **API Dokumentation:** https://abschlussprojekt-2026-api-1-oskwie.onrender.com/swagger-ui/index.html

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Recharts, Axios
- **Backend:** Spring Boot, Spring Data JPA, Lombok
- **Datenbank:** PostgreSQL (Neon.tech)
- **Deployment:** Render (Backend), Vercel (Frontend)
- **Externe API:** eBay Browse API

## Features

- Motorräder verwalten (hinzufügen, löschen)
- Ausgaben erfassen und kategorisieren (Benzin, Service, Versicherung, etc.)
- Ausgaben Statistik als BarChart nach Kategorie
- Preisvergleich von Motorrad-Ersatzteilen via eBay API mit Bildern und Preisen
- Dashboard mit Übersicht aller Statistiken
- Responsive Design mit Hamburger Menü

## Lokale Entwicklung

### Voraussetzungen
- Java 21
- Node.js
- Maven

### Backend starten
```bash
cd backend
mvn spring-boot:run
```

### Frontend starten
```bash
cd frontend
npm install
npm run dev
```

### Umgebungsvariablen

Erstelle `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=${SPRING_DATASOURCE_URL}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}
ebay.app.id=${EBAY_APP_ID}
ebay.cert.id=${EBAY_CERT_ID}
```

Erstelle `frontend/.env`:
VITE_API_URL=http://localhost:8080/api

## Projekt Struktur
```
├── backend/
│   ├── src/main/java/com/motorrad/kostenmanager/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   └── service/
│   └── Dockerfile
└── frontend/
    └── src/
        ├── api/
        ├── components/
        └── pages/
```

## API Endpunkte

| Methode | Endpunkt | Beschreibung |
|---------|----------|--------------|
| GET | /api/motorcycles | Alle Motorräder |
| POST | /api/motorcycles | Motorrad erstellen |
| DELETE | /api/motorcycles/{id} | Motorrad löschen |
| GET | /api/expenses | Alle Ausgaben |
| POST | /api/expenses | Ausgabe erstellen |
| DELETE | /api/expenses/{id} | Ausgabe löschen |
| GET | /api/products | Alle Produkte |
| POST | /api/scraping/fetch | eBay Produkte holen |

## Autor

Oskar Wiederkehr - AE Ausbildung 2026