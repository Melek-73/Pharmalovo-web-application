package com.pharmalovo.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {
    @Id
    private UUID id;

    @Column(nullable = false)
    private String fullName;

    private String avatarUrl;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public enum UserRole {
        CUSTOMER, PHARMACY_OWNER, ADMIN
    }

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
