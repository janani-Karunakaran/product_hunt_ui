package com.product.producthunt.repository;

import com.product.producthunt.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProducthuntRepo extends JpaRepository<Product,String> {

    @Modifying
    @Query("UPDATE Product p SET p.productQuantity = :quantity, p.productPrice = :price WHERE p.productId = :id")
    int updateProductPartially(@Param("id") String id,@Param("price") Double price,@Param("quantity") Integer quantity);
}
