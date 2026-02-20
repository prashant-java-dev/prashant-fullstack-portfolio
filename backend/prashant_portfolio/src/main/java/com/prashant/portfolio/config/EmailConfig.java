package com.prashant.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * Email configuration properties.
 * Centralizes email-related configuration.
 */
@Configuration
public class EmailConfig {

    @Value("${app.mail.from}")
    private String fromEmail;

    @Value("${app.mail.to}")
    private String toEmail;

    public String getFromEmail() {
        return fromEmail;
    }

    public String getToEmail() {
        return toEmail;
    }
}
