# Prashant Sharma Portfolio

A modern, production-ready full-stack personal portfolio website.

## Tech Stack
- **Backend:** Java, Spring Boot, REST APIs, Maven
- **Frontend:** React (JavaScript), Tailwind CSS, Framer Motion
- **Design:** Red & Black theme, Dark/Light mode support

## Project Structure
- `backend/`: Spring Boot application
- `frontend/`: React application

## Getting Started

### Prerequisites
- Java 17+
- Node.js 16+
- Maven (optional, wrapper included)

### Backend Setup
1. Navigate to `backend/prashant_portfolio`
2. Create a `.env` file in the root based on `.env.example` (or use the provided one)
   ```ini
   SERVER_PORT=8080
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   MAIL_FROM=your_email@gmail.com
   MAIL_TO=your_email@gmail.com
   ALLOWED_ORIGINS=http://localhost:3000
   LOGGING_LEVEL=INFO
   ```
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
   *Note: Using `.env` is safer than hardcoding credentials.*

### Frontend Setup
1. Navigate to `frontend/`
2. Create a `.env` file:
   ```ini
   REACT_APP_API_URL=http://localhost:8080/api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Features
- **Responsive Design:** Mobile-first approach using Tailwind CSS.
- **Dark Mode:** Automatic system preference detection with manual toggle.
- **Contact Form:** Real-time email delivery using Spring Boot Mail.
- **Resume Handling:** PDF preview and download capabilities.
- **Health Monitoring:** `/api/health` endpoint for uptime checks.

## Security Improvements
- **Environment Variables:** Sensitive credentials are now loaded from `.env` files (gitignored).
- **CORS Configuration:** Properly configured via environment variables.
- **Input Validation:** Backend validation ensures data integrity.
- **Exception Handling:** Global exception handler prevents stack trace leaks.

