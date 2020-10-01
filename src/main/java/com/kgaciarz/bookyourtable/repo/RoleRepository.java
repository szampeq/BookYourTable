package com.kgaciarz.bookyourtable.repo;

import com.kgaciarz.bookyourtable.model.ERole;
import com.kgaciarz.bookyourtable.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
