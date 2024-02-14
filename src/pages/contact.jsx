import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      <div>
        <h2>Contact Information</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
        <p>Social Media: <a href="https://example.com">Facebook</a>, <a href="https://example.com">Twitter</a></p>
      </div>
    </div>
  );
};

export default ContactPage;
