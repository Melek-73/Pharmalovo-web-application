package com.pharmalovo.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import com.pharmalovo.backend.model.Medication;
import com.pharmalovo.backend.model.Pharmacy;
import com.pharmalovo.backend.model.Profile;
import com.pharmalovo.backend.repository.MedicationRepository;
import com.pharmalovo.backend.repository.PharmacyRepository;
import com.pharmalovo.backend.repository.ProfileRepository;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.UUID;

@SpringBootApplication
public class PharmalovoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmalovoBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadData(ProfileRepository profileRepository, PharmacyRepository pharmacyRepository, MedicationRepository medicationRepository) {
		return args -> {
			if (medicationRepository.count() > 0) {
				return; // Data already loaded
			}

			// Create profile
			Profile owner = Profile.builder()
					.id(UUID.randomUUID())
					.fullName("John Doe")
					.role(Profile.UserRole.PHARMACY_OWNER)
					.build();
			profileRepository.save(owner);

			// Create pharmacy
			Pharmacy pharmacy = Pharmacy.builder()
					.name("Pharmacie Centrale")
					.address("123 Avenue Habib Bourguiba, Tunis")
					.city("Tunis")
					.phone("+216 71 123 456")
					.email("contact@pharmaciecentrale.tn")
					.latitude(36.8065)
					.longitude(10.1815)
					.isOpen(true)
					.owner(owner)
					.build();
			pharmacyRepository.save(pharmacy);

			// Create medications
			Medication[] medications = {
				Medication.builder()
					.name("Paracetamol 500mg").genericName("Acetaminophen").description("Pain reliever and fever reducer")
					.category("Pain Relief").manufacturer("Generic").dosage("500mg").form("Tablet")
					.price(BigDecimal.valueOf(3.50)).stockQuantity(100).requiresPrescription(false).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Amoxicillin 500mg").genericName("Amoxicillin").description("Antibiotic for bacterial infections")
					.category("Antibiotics").manufacturer("Generic").dosage("500mg").form("Capsule")
					.price(BigDecimal.valueOf(12.00)).stockQuantity(50).requiresPrescription(true).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Insulin Glargine 100U/ml").genericName("Insulin Glargine").description("Long-acting insulin for diabetes")
					.category("Diabetes").manufacturer("Sanofi").dosage("100U/ml").form("Injection")
					.price(BigDecimal.valueOf(45.00)).stockQuantity(20).requiresPrescription(true).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Omeprazole 20mg").genericName("Omeprazole").description("Proton pump inhibitor for acid reflux")
					.category("Digestive Health").manufacturer("Generic").dosage("20mg").form("Capsule")
					.price(BigDecimal.valueOf(8.50)).stockQuantity(75).requiresPrescription(false).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Ventolin Inhaler").genericName("Salbutamol").description("Bronchodilator for asthma")
					.category("Respiratory").manufacturer("GlaxoSmithKline").dosage("100mcg").form("Inhaler")
					.price(BigDecimal.valueOf(18.00)).stockQuantity(30).requiresPrescription(true).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Aspirin 100mg").genericName("Acetylsalicylic Acid").description("Antiplatelet for cardiovascular health")
					.category("Cardiovascular").manufacturer("Bayer").dosage("100mg").form("Tablet")
					.price(BigDecimal.valueOf(4.00)).stockQuantity(200).requiresPrescription(false).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Metformin 850mg").genericName("Metformin").description("Oral diabetes medication")
					.category("Diabetes").manufacturer("Generic").dosage("850mg").form("Tablet")
					.price(BigDecimal.valueOf(15.00)).stockQuantity(60).requiresPrescription(true).isAvailable(true).pharmacy(pharmacy).build(),
				Medication.builder()
					.name("Cetirizine 10mg").genericName("Cetirizine").description("Antihistamine for allergies")
					.category("Allergy").manufacturer("Generic").dosage("10mg").form("Tablet")
					.price(BigDecimal.valueOf(6.50)).stockQuantity(90).requiresPrescription(false).isAvailable(true).pharmacy(pharmacy).build()
			};

			medicationRepository.saveAll(Arrays.asList(medications));
			System.out.println("✅ Sample data loaded successfully!");
		};
	}

}
