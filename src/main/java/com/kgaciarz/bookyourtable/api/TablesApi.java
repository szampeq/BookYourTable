package com.kgaciarz.bookyourtable.api;

import com.kgaciarz.bookyourtable.manager.TableManager;
import com.kgaciarz.bookyourtable.model.AppTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/tables")
@CrossOrigin
public class TablesApi {

    private TableManager tableManager;

    @Autowired
    public TablesApi(TableManager tableManager) {
        this.tableManager = tableManager;
    }

    @GetMapping("/all")
    public Iterable<AppTable> getAll() {
        return tableManager.findAll();
    }

    @GetMapping
    public Optional<AppTable> getById(@RequestParam Long index) {
        return tableManager.findById(index);
    }

    @PostMapping("/add")
    public AppTable addAppTable(@RequestBody AppTable appTable) {
        return tableManager.save(appTable);
    }

    @PutMapping
    public AppTable updateAppTable(@RequestBody AppTable appTable) {
        return tableManager.save(appTable);
    }

    @DeleteMapping("/delete")
    public void deleteAppTable(@RequestParam Long id) {
        tableManager.deleteById(id);
    }
}