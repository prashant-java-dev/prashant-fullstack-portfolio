import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { sendContact } from '../services/api';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const toggleOpen = () => setOpen(!open);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContact(form);
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Error sending message.');
    }
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-4 flex flex-col gap-2 transition-all">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg text-black dark:text-white">Chat with me</h3>
            <button onClick={toggleOpen}>
              <X size={20} className="text-black dark:text-white" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-2 border rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-2 border rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
            />
            <textarea
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="p-2 border rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors"
            >
              Send
            </button>
            {status && <p className="text-sm text-center text-green-500">{status}</p>}
          </form>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="p-3 bg-red-600 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors"
        aria-label="Open Chat"
      >
        <MessageCircle size={24} className="text-white" />
      </button>
    </div>
  );
}
