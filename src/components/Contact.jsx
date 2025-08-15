import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      return;
    }

    // Send the form data via EmailJS
    emailjs
      .sendForm(
        "service_2aergcr",      // Service ID (string)
        "template_yflmq3z",     // Template ID (string)
        e.target,               // Form element
        "aN_6Sat21bRkKf4w1"     // Public Key (string)
      )
      .then(
        (result) => {
          setSubmitted(true);
          setError('');
          console.log('Email sent successfully!', result.text);
        },
        (error) => {
          setError('Something went wrong. Try again.');
          console.error('Error sending email:', error.text);
        }
      );

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 scroll-smooth bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What do you want to say?"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {submitted && <p className="text-green-500 text-sm">Thanks! I’ll get back to you soon.</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
