import React from "react";
import { FaGithub, FaGoogle, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0a0a0f]"
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Contact</h2>

      {/* Form Card */}
      <form className="w-full max-w-md bg-black/30 border border-gray-700 rounded-2xl p-6 shadow-lg">
        <div className="mb-4 text-left">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
        >
          Send a message
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8 text-2xl text-gray-400">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="mailto:robert@example.com" className="hover:text-white">
          <FaGoogle />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
