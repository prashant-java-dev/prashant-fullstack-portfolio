package com.prashant.portfolio.controller;

import com.prashant.portfolio.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Health check controller for monitoring application status.
 * Essential for production environments (e.g. AWS, Render).
 */
@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> healthCheck() {
        return ResponseEntity.ok(ApiResponse.success(
            "Application is running smoothly",
            Map.of("status", "UP", "timestamp", java.time.Instant.now().toString())
        ));
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse<String>> home() {
        return ResponseEntity.ok(ApiResponse.success("Welcome to Prashant Portfolio API! Go to /api/health for status."));
    }
}
