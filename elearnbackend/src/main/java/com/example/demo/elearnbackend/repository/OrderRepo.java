package com.example.demo.elearnbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.elearnbackend.modal.Orders;


public interface OrderRepo extends JpaRepository<Orders, Long> {
}