package com.pharmalovo.backend.service;

import com.pharmalovo.backend.model.Medication;
import com.pharmalovo.backend.repository.MedicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MedicationService {
    private final MedicationRepository medicationRepository;

    public List<Medication> getAllMedications() {
        return medicationRepository.findAll();
    }

    public List<Medication> searchMedications(String name) {
        return medicationRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Medication> getMedicationsByCategory(String category) {
        return medicationRepository.findByCategoryIgnoreCase(category);
    }

    public List<Medication> getMedicationsByPharmacy(UUID pharmacyId) {
        return medicationRepository.findByPharmacyId(pharmacyId);
    }

    public Medication getMedicationById(UUID id) {
        return medicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medication not found with id: " + id));
    }

    @Transactional
    public Medication createMedication(Medication medication) {
        return medicationRepository.save(medication);
    }

    @Transactional
    public Medication updateMedication(UUID id, Medication medicationDetails) {
        Medication medication = getMedicationById(id);
        medication.setName(medicationDetails.getName());
        medication.setGenericName(medicationDetails.getGenericName());
        medication.setDescription(medicationDetails.getDescription());
        medication.setCategory(medicationDetails.getCategory());
        medication.setPrice(medicationDetails.getPrice());
        medication.setStockQuantity(medicationDetails.getStockQuantity());
        medication.setRequiresPrescription(medicationDetails.getRequiresPrescription());
        medication.setIsAvailable(medicationDetails.getIsAvailable());
        return medicationRepository.save(medication);
    }

    @Transactional
    public void deleteMedication(UUID id) {
        medicationRepository.deleteById(id);
    }
}
