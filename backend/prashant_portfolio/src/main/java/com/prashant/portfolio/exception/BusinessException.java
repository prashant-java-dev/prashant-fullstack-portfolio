package com.prashant.portfolio.exception;

import org.springframework.http.HttpStatus;

/**
 * Custom exception for business logic errors.
 * Allows throwing meaningful exceptions with appropriate HTTP status codes.
 */
public class BusinessException extends RuntimeException {

    private final HttpStatus status;

    public BusinessException(String message) {
        super(message);
        this.status = HttpStatus.BAD_REQUEST;
    }

    public BusinessException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
