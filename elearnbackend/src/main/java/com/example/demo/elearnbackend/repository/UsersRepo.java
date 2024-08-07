package com.example.demo.elearnbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.elearnbackend.modal.Users;


public interface UsersRepo extends JpaRepository<Users,Long> {
    Users findByEmail(String email);
}
