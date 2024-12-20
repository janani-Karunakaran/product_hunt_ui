package com.product.producthunt.controller;

import com.product.producthunt.model.Product;
import com.product.producthunt.service.ProducthuntServiceImpl;
import jakarta.websocket.server.PathParam;
import org.hibernate.annotations.PartitionKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProducthuntController {

    @Autowired
    ProducthuntServiceImpl service;

    @GetMapping("/getAllProductList")
    public List<Product> getAllProductList(){
       return service.getAllProductList();
    }

    @PostMapping("/addNewProduct")
    public Product addNewProduct(@RequestBody Product product){
        return service.addNewProduct(product);
    }

    @GetMapping("/getProduct")
    public Product getProduct(@RequestParam String productId){
        return service.getProduct(productId).get();
    }

    @DeleteMapping("/deleteProduct")
    public void deleteProduct(@RequestParam String productId){
        service.deleteProduct(productId);
    }

    @PutMapping("/updateProduct")
    public void updateProduct(@RequestBody Product product){
        service.updateProduct(product);
    }

    @PatchMapping("/updateProductPriceQuantity/{productId}")
    public void updateProductPriceQuantity(@PathVariable String productId, @RequestParam Double price, @RequestParam int quantity){
        service.updateProductPriceQuantity(productId,price,quantity);
    }
}
