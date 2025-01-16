package com.product.producthunt.controller;

import com.product.producthunt.model.ErrorModel;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ProducthuntExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRunTimeException(RuntimeException ex){

        ErrorModel model=new ErrorModel(HttpStatus.NOT_FOUND.toString(),ex.getMessage(),ex.getMessage());

        return new ResponseEntity<>(model,HttpStatus.NOT_FOUND);
    }

}
