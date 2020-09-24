package com.kgaciarz.bookyourtable.api;

import com.kgaciarz.bookyourtable.services.TableService;
import com.kgaciarz.bookyourtable.model.AppTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/tables")
@CrossOrigin
public class TablesApi {

    private TableService tableService;

    @Autowired
    public TablesApi(TableService tableService) {
        this.tableService = tableService;
    }

    @GetMapping("/all")
    public Iterable<AppTable> getAll() {
        return tableService.findAll();
    }

    @GetMapping
    public Optional<AppTable> getById(@RequestParam Long index) {
        return tableService.findById(index);
    }

    @PostMapping("/add")
    public AppTable addAppTable(@RequestBody AppTable appTable) {
        return tableService.save(appTable);
    }

    @PutMapping
    public AppTable updateAppTable(@RequestBody AppTable appTable) {
        return tableService.save(appTable);
    }

    @DeleteMapping("/delete")
    public void deleteAppTable(@RequestParam Long id) {
        tableService.deleteById(id);
    }
}