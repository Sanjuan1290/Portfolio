import React, { useState } from "react";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { supabase } from "../lib/supabase";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Status = "idle" | "sending" | "success" | "error";

const Contact: React.FC = () => {
  const { ref: sectionRef, visible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    const { error } = await supabase
      .from("messages")
      .insert([{ name: form.name, email: form.email, message: form.message }]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0a0a0f]"
    >
      <h2
        className={`text-4xl font-bold mb-8 text-white scroll-hidden ${visible ? "scroll-visible" : ""}`}
      >
        Contact
      </h2>

      {/* Form Card */}
      <div
        className={`w-full max-w-md bg-black/30 border border-gray-700 rounded-2xl p-6 shadow-lg scroll-hidden ${visible ? "scroll-visible" : ""} delay-200`}
      >
        <div className="mb-4 text-left">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Write your message..."
          />
        </div>

        {/* Status feedback */}
        {status === "success" && (
          <p className="mb-4 text-green-400 text-sm font-medium">
            ✅ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="mb-4 text-red-400 text-sm font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send a message"}
        </button>
      </div>

      {/* Social Icons */}
      <div
        className={`flex gap-6 mt-8 text-2xl text-gray-400 scroll-hidden ${visible ? "scroll-visible" : ""} delay-400`}
      >
        <a
          href="https://github.com/Sanjuan1290"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:robertrenbysanjuan@gmail.com"
          className="hover:text-red-400 transition hover:scale-125"
        >
          <SiGmail />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition hover:scale-125"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition hover:scale-125"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;