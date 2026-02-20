package com.prashant.portfolio.service;

import com.prashant.portfolio.config.EmailConfig;
import com.prashant.portfolio.dto.ContactRequestDto;
import com.prashant.portfolio.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * Service for handling email operations.
 * Sends contact form submissions via email.
 */
@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;
    private final EmailConfig emailConfig;

    // Constructor injection (recommended over field injection)
    public EmailService(JavaMailSender mailSender, EmailConfig emailConfig) {
        this.mailSender = mailSender;
        this.emailConfig = emailConfig;
    }

    /**
     * Sends a contact form email.
     * @param request Contact form data
     * @throws BusinessException if email sending fails
     */
    public void sendContactEmail(ContactRequestDto request) {
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setFrom(emailConfig.getFromEmail());
            mail.setTo(emailConfig.getToEmail());
            mail.setSubject("Portfolio Contact: " + request.getSubject());
            mail.setText(buildEmailBody(request));

            mailSender.send(mail);
            logger.info("Contact email sent successfully from: {}", request.getEmail());

        } catch (Exception e) {
            logger.error("Failed to send contact email from: {}", request.getEmail(), e);
            throw new BusinessException("Failed to send email. Please try again later.", 
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Builds the email body from contact form data.
     */
    private String buildEmailBody(ContactRequestDto request) {
        return String.format(
            "New Contact Form Submission\n\n" +
            "From: %s (%s)\n" +
            "Subject: %s\n\n" +
            "Message:\n%s",
            request.getName(),
            request.getEmail(),
            request.getSubject(),
            request.getMessage()
        );
    }
}

