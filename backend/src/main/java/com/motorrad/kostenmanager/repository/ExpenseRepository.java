// ExpenseRepository.java
// Spring Data JPA Repository für Ausgaben – stellt automatisch alle CRUD-Methoden bereit
// Author: Oskar Wiederhold

package com.motorrad.kostenmanager.repository;
import com.motorrad.kostenmanager.model.Expense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}