import React from 'react';
import './contact.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email
  };

  return (
    <div className='contact'>
      <header>Contact Us</header>
      <link rel="stylesheet" href="contact.css"></link>
      <form id="form" class="topBefore" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder='Name' autoComplete='off' required />
        </div>

        <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder='Email' autoComplete='off' required />
        </div>

        <div>
        <label htmlFor="message">Message: </label>
        <textarea id="message" rows="5" cols="60" name="message" placeholder='Enter Message' autoComplete='off' required></textarea>
        </div>

        <div>
        <button type="submit" id="submit">Send</button>
        </div>
      </form>

      <body>
      <h2>Contact Information</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </body>
      <div>
        
      </div>
    </div>
  );
};

export default ContactPage;
