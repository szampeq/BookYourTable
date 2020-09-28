package com.kgaciarz.bookyourtable.services;


import com.kgaciarz.bookyourtable.model.AppReservation;
import com.kgaciarz.bookyourtable.repo.AppReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReservationService {

    private AppReservationRepo appReservationRepo;

    @Autowired
    public ReservationService(AppReservationRepo appReservationRepo) {
        this.appReservationRepo = appReservationRepo;
    }

    public Optional<AppReservation> findById(Long id) {
        return appReservationRepo.findById(id);
    }

    public Iterable<AppReservation> findAll() {
        return appReservationRepo.findAll();
    }

    public AppReservation save(AppReservation appReservation) {
        return appReservationRepo.save(appReservation);
    }

    public void deleteById(Long id) {
        appReservationRepo.deleteById(id);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB() {

    }

}