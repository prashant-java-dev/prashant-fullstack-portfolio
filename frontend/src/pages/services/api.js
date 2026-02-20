import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  sendMessage: (data) => api.post('/contact', data)
};

export const resumeService = {
  // Open the PDF in a new browser tab for preview
  viewResume: () => {
    window.open(`${API_BASE_URL}/resume/view`, '_blank');
  },
  // Force download of the PDF
  downloadResume: () => {
    window.open(`${API_BASE_URL}/resume/download`, '_blank');
  }
};

// Optional convenience exports
export const sendContactMessage = contactService.sendMessage;
export const downloadResume = resumeService.downloadResume;
export const viewResume = resumeService.viewResume;

export default api;
