import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //more stuff coming soon.
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
        <p>Social Media: <a href="https://example.com" className="text-blue-500 hover:underline">Facebook</a>, <a href="https://example.com" className="text-blue-500 hover:underline">Twitter</a></p>
      </div>
    </div>
  );
};

export default ContactPage;
