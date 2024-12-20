package com.product.producthunt.service;

import com.product.producthunt.model.Product;
import com.product.producthunt.repository.ProducthuntRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProducthuntServiceImpl {

    @Autowired
    ProducthuntRepo repo;

    public List<Product> getAllProductList() {
        List<Product> productList=repo.findAll();
        //Creating a dummy list and returning it - update it with getting data from database
//        Product p1=new Product("p1","pen","The product is pen which is used to write in paper/rough surface",20.00,10);
//        Product p2=new Product("p2","pencil","The product is pencil which is used to write in paper/rough surface",10.00,20);
//        Product p3=new Product("p3","eraser","The product is eraser which is used to erase writings from paper/rough surface",5.00,10);
//
//        productList.add(p1);
//        productList.add(p2);
//        productList.add(p3);

        return productList;
    }

    public Product addNewProduct(Product product) {
        return repo.save(product);
    }

    public Optional<Product> getProduct(String productId) {
        return repo.findById(productId);
    }

    public void deleteProduct(String productId) {
        repo.deleteById(productId);
    }

    public void updateProduct(Product product) {
        Product existingProduct=repo.findById(product.getProductId())
                .orElseThrow(()-> new RuntimeException("Product doesn't exist"));

        existingProduct.setProductDescription(product.getProductDescription());
        existingProduct.setProductName(product.getProductName());
        existingProduct.setProductPrice(product.getProductPrice());
        existingProduct.setProductQuantity(product.getProductQuantity());

        repo.save(existingProduct);
    }

    @Transactional
    public void updateProductPriceQuantity(String productId, Double price, int quantity) {
        Product existingProduct=repo.findById(productId)
                .orElseThrow(()-> new RuntimeException("Product doesn't exist"));

        int rowsUpdated=repo.updateProductPartially(productId,price,quantity);

        if(rowsUpdated==0){
            new RuntimeException("No rows Updated");
        }
    }
}
