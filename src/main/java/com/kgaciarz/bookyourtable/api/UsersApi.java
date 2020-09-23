package com.kgaciarz.bookyourtable.api;

import com.kgaciarz.bookyourtable.UserDetailsServiceImpl;
import com.kgaciarz.bookyourtable.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UsersApi {


    private UserDetailsServiceImpl usersDetailsService;

    @Autowired
    public UsersApi(UserDetailsServiceImpl usersDetailsService) {
        this.usersDetailsService = usersDetailsService;
    }

    @GetMapping("/users")
    public Iterable<AppUser> getAll() {
        return usersDetailsService.findAll();
    }


}
