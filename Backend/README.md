# Pharmalovo Backend - Spring Boot

Ce projet est le backend de l'application **Pharmalovo**, une plateforme de santé numérique. Il est construit avec **Spring Boot 3** et respecte les principes de l'**API REST**.

## 🚀 Fonctionnalités
- Gestion des médicaments (Medications)
- Gestion des pharmacies (Pharmacies)
- Gestion des profils utilisateurs (Profiles)
- Gestion des commandes (Orders)
- Intégration avec H2 (base de données en mémoire) pour le développement local
- Configuration prête pour PostgreSQL

## 🛠️ Prérequis
- **Java 17** ou supérieur
- **Maven 3.6+** (ou utiliser le wrapper `./mvnw` inclus)

## 🏃 Comment exécuter le projet localement

1. **Extraire l'archive :**
   ```bash
   unzip Backend.zip
   cd Backend
   ```

2. **Lancer l'application :**
   Utilisez le wrapper Maven fourni :
   ```bash
   ./mvnw spring-boot:run
   ```
   *Sur Windows :* `mvnw.cmd spring-boot:run`

3. **Accéder à l'API :**
   L'application sera disponible sur `http://localhost:8080`.

4. **Console H2 (Base de données) :**
   Vous pouvez visualiser les données en temps réel via la console H2 :
   - URL : `http://localhost:8080/h2-console`
   - JDBC URL : `jdbc:h2:mem:pharmalovodb`
   - User : `sa`
   - Password : (laisser vide)

## 📡 Endpoints Principaux (Exemples)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/medications` | Liste tous les médicaments |
| GET | `/api/medications?name=paracetamol` | Recherche par nom |
| GET | `/api/medications/{id}` | Détails d'un médicament |
| POST | `/api/medications` | Ajouter un médicament |
| GET | `/api/pharmacies` | Liste les pharmacies |

## 📁 Structure du Projet
- `model/` : Entités JPA (Database schema)
- `repository/` : Interfaces Spring Data JPA
- `service/` : Logique métier
- `controller/` : Points d'entrée de l'API REST
- `security/` : Configuration CORS et Sécurité
- `config/` : Configurations diverses
