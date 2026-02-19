package com.pharmalovo.backend.repository;

import com.pharmalovo.backend.model.Medication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface MedicationRepository extends JpaRepository<Medication, UUID> {
    List<Medication> findByNameContainingIgnoreCase(String name);
    List<Medication> findByCategoryIgnoreCase(String category);
    List<Medication> findByPharmacyId(UUID pharmacyId);
    List<Medication> findByIsAvailableTrue();
}
