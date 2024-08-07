package com.example.demo.elearnbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.elearnbackend.modal.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
