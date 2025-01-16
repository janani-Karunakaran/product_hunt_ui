package com.product.producthunt.model;

public class ErrorModel {
    String errorCode;
    String message;
    String details;

    public ErrorModel(String errorCode, String message, String details) {
        this.errorCode = errorCode;
        this.message = message;
        this.details = details;
    }
}
