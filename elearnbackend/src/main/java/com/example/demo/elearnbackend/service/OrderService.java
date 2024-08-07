package com.example.demo.elearnbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.elearnbackend.modal.Orders;
import com.example.demo.elearnbackend.modal.Product;
import com.example.demo.elearnbackend.modal.Users;
import com.example.demo.elearnbackend.repository.OrderRepo;
import com.example.demo.elearnbackend.repository.ProductRepo;
import com.example.demo.elearnbackend.repository.UsersRepo;

@Service
public class OrderService {
    @Autowired
    private UsersRepo ur;

    @Autowired
    private ProductRepo pr;

    @Autowired
    private OrderRepo or;
     public Orders createOrder(Long userId, Long productId, String userAddress, String payMethod) {
        Users user = ur.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Product product = pr.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setProduct(product);
        order.setUserAddress(userAddress);
        order.setPayMethod(payMethod);
        order.setOrderConfirmed(false); // Default value for new orders

        return or.save(order);
    }
}


