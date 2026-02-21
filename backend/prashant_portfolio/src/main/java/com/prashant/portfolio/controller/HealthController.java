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

    private final org.springframework.data.mongodb.core.MongoTemplate mongoTemplate;

    public HealthController(org.springframework.data.mongodb.core.MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> healthCheck() {
        String mongoStatus = "DOWN";
        try {
            mongoTemplate.getDb().runCommand(new org.bson.Document("ping", 1));
            mongoStatus = "UP";
        } catch (Exception e) {
            mongoStatus = "DOWN (" + e.getMessage() + ")";
        }

        return ResponseEntity.ok(ApiResponse.success(
            "Application status",
            Map.of(
                "status", mongoStatus.startsWith("UP") ? "UP" : "DOWN",
                "database", mongoStatus,
                "timestamp", java.time.Instant.now().toString()
            )
        ));
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse<String>> home() {
        return ResponseEntity.ok(ApiResponse.success("Welcome to Prashant Portfolio API! Go to /api/health for status."));
    }
}
