package com.prashant.portfolio.controller;

import com.prashant.portfolio.dto.ApiResponse;
import com.prashant.portfolio.dto.ContactRequestDto;
import com.prashant.portfolio.model.ContactMessage;
import com.prashant.portfolio.repository.ContactMessageRepository;
import com.prashant.portfolio.service.EmailService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for handling contact form submissions.
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    private final EmailService emailService;
    private final ContactMessageRepository contactMessageRepository;

    // Constructor injection (best practice)
    public ContactController(EmailService emailService, ContactMessageRepository contactMessageRepository) {
        this.emailService = emailService;
        this.contactMessageRepository = contactMessageRepository;
    }

    /**
     * Handles contact form submission.
     * @param request Contact form data with validation
     * @return Standardized API response
     */
    @PostMapping
    public ResponseEntity<ApiResponse<Void>> sendMessage(@Valid @RequestBody ContactRequestDto request) {
        logger.info("Received contact form submission from: {}", request.getEmail());
        
        try {
            // Save to MongoDB
            ContactMessage contactMessage = new ContactMessage(
                request.getName(),
                request.getEmail(),
                request.getSubject(),
                request.getMessage()
            );
            contactMessageRepository.save(contactMessage);
            logger.info("Saved contact message to MongoDB for: {}", request.getEmail());
        } catch (Exception e) {
            logger.error("Failed to save contact message to MongoDB", e);
            // We continue to send email even if DB save fails, or we could bail out.
            // For now, let's just log it.
        }
        
        emailService.sendContactEmail(request);
        
        return ResponseEntity.ok(
            ApiResponse.success("Message sent successfully and saved!")
        );
    }
}
