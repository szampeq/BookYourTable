package com.kgaciarz.bookyourtable.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collection;
import java.util.Collections;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class AppReservation extends AppMainEntity{

    private LocalDate date;
    private LocalTime time;
    private int bookingTime;

    @ManyToOne
    @JoinColumn(name = "apptable_id")
    private AppTable appTable;

    @ManyToOne
    @JoinColumn(name = "appuser_id")
    private AppUser appUser;


}