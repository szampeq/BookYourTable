package com.kgaciarz.bookyourtable.api;

import com.kgaciarz.bookyourtable.model.AppReservation;
import com.kgaciarz.bookyourtable.services.ReservationService;
import com.kgaciarz.bookyourtable.model.AppReservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/reservations")
@CrossOrigin
public class ReservationsApi {

    private ReservationService reservationService;

    @Autowired
    public ReservationsApi(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/all")
    public Iterable<AppReservation> getAll() {
        return reservationService.findAll();
    }

    @GetMapping
    public Optional<AppReservation> getById(@RequestParam Long index) {
        return reservationService.findById(index);
    }

    @PostMapping("/add")
    public AppReservation addAppReservation(@RequestBody AppReservation appReservation) {
        return reservationService.save(appReservation);
    }

    @PutMapping
    public AppReservation updateAppReservation(@RequestBody AppReservation appReservation) {
        return reservationService.save(appReservation);
    }

    @DeleteMapping("/delete")
    public void deleteAppReservation(@RequestParam Long id) {
        reservationService.deleteById(id);
    }
}