package com.kgaciarz.bookyourtable.repo;

import com.kgaciarz.bookyourtable.model.AppReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppReservationRepo extends JpaRepository<AppReservation, Long> {
}
