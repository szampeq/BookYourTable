package com.kgaciarz.bookyourtable.repo;

import com.kgaciarz.bookyourtable.model.AppTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppTableRepo extends JpaRepository<AppTable, Long> {
}
