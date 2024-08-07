package com.example.demo.elearnbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.elearnbackend.modal.Product;

public interface ProductRepo extends JpaRepository<Product,Long>{

    
} 