package com.example.demo.elearnbackend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.elearnbackend.modal.Product;
import com.example.demo.elearnbackend.modal.Users;
import com.example.demo.elearnbackend.service.UserService;


@RestController()
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService uservice;

    @GetMapping("/getuser")
    public List<Users> GetUsers() {
        return uservice.getUsers();
    }

    @GetMapping("/login")
    public boolean login(@RequestParam String email, @RequestParam String password) {
        Users existingUser = uservice.findUserByEmail(email);
        return existingUser != null && existingUser.getPassword().equals(password);
    }
    
    @PostMapping("/add")
    public Users AddUsers(@RequestBody Users user) {
        return uservice.addUsers(user);
    }
    
    @DeleteMapping("/delete/{uid}")
    public String DeleteUser(@PathVariable Long uid) {
        return uservice.deleteUser(uid);
    }
    
    // <--------------------------------->
    
    @PostMapping("/addproduct")
    public Product AddUsers(@RequestBody Product product) {
        return uservice.addproducts(product);
    }
    @GetMapping("/getproduct")
    public List<Product> GetProduct() {
        return uservice.getproduct();
    }
    @DeleteMapping("/deleteproduct/{id}")
    public String DeleteProduct(@PathVariable Long id) {
        return uservice.deleteproduct(id);
    }
}
