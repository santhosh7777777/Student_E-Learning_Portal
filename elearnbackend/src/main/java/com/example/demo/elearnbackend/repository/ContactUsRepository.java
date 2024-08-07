package com.example.demo.elearnbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.elearnbackend.modal.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {
}
