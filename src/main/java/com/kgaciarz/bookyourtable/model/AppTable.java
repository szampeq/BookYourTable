package com.kgaciarz.bookyourtable.model;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;
import java.util.Set;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class AppTable extends AppMainEntity{

    private int seats;

    @OneToMany(mappedBy = "appTable")
    private Set<AppReservation> reservations;

}