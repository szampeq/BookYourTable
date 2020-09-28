package com.kgaciarz.bookyourtable.services;


import com.kgaciarz.bookyourtable.model.AppTable;
import com.kgaciarz.bookyourtable.repo.AppTableRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TableService {

    private AppTableRepo appTableRepo;

    @Autowired
    public TableService(AppTableRepo appTableRepo) {
        this.appTableRepo = appTableRepo;
    }

    public Optional<AppTable> findById(Long id) {
        return appTableRepo.findById(id);
    }

    public Iterable<AppTable> findAll() {
        return appTableRepo.findAll();
    }

    public AppTable save(AppTable appTable) {
        return appTableRepo.save(appTable);
    }

    public void deleteById(Long id) {
        appTableRepo.deleteById(id);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB() {
        save(new AppTable(1, 6));
        save(new AppTable(2, 3));
    }

}