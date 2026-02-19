package com.pharmalovo.backend.repository;

import com.pharmalovo.backend.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, UUID> {
    List<Pharmacy> findByCityIgnoreCase(String city);
    List<Pharmacy> findByNameContainingIgnoreCase(String name);
    List<Pharmacy> findByOwnerId(UUID ownerId);
}
