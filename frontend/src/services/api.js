import axios from 'axios';

// Uses Railway backend in production, localhost in development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// ─── Resume ────────────────────────────────────────────────────────────────

export const resumeService = {
    viewResume: () => {
        window.open(`${API_URL}/resume/view`, '_blank');
    },
    downloadResume: () => {
        const link = document.createElement('a');
        link.href = `${API_URL}/resume/download`;
        link.setAttribute('download', 'Prashant_Sharma_Software_Developer_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
};

// Kept for backward compatibility with Home.jsx
export const downloadResume = () => `${API_URL}/resume/download`;

// ─── Contact ───────────────────────────────────────────────────────────────

export const contactService = {
    sendMessage: async (data) => {
        return await axios.post(`${API_URL}/contact`, data);
    }
};

export const sendContact = async (data) => {
    return await axios.post(`${API_URL}/contact`, data);
};
