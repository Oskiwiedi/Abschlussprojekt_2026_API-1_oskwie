// ExpenseService.java
// Serviceschicht für Ausgaben, enthält Geschäftslogik und verknüpft Ausgaben mit Motorrädern
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager.service;

import com.motorrad.kostenmanager.model.Expense;
import com.motorrad.kostenmanager.model.Motorcycle;
import com.motorrad.kostenmanager.repository.ExpenseRepository;
import com.motorrad.kostenmanager.repository.MotorcycleRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final MotorcycleRepository motorcycleRepository;

    public ExpenseService(ExpenseRepository expenseRepository, MotorcycleRepository motorcycleRepository) {
        this.expenseRepository = expenseRepository;
        this.motorcycleRepository = motorcycleRepository;
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Expense getExpenseById(Long id) {
        return expenseRepository.findById(id).orElseThrow();
    }

    public Expense createExpense(Expense expense, Long motorcycleId) {
        // Motorrad aus der Datenbank laden und der Ausgabe zuweisen, bevor sie gespeichert wird
        Motorcycle motorcycle = motorcycleRepository.findById(motorcycleId)
                .orElseThrow();
        expense.setMotorcycle(motorcycle);
        return expenseRepository.save(expense);
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    public Expense updateExpense(Long id, Expense expense) {
        expense.setId(id);
        return expenseRepository.save(expense);
    }
}