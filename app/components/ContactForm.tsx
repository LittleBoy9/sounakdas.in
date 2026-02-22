"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/common";

const ContactForm = () => {
  const [error, setError] = useState<{ email: boolean; required: boolean }>({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      await axios.post(`/api/contact`, userInput);
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 lg:p-10">
      <form onSubmit={handleSendMail} className="flex flex-col gap-5">
        <div>
          <label className="text-xs text-[#64748b] uppercase tracking-wider mb-2 block">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Your name"
            maxLength={100}
            required
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
            onBlur={checkRequired}
            value={userInput.name}
          />
        </div>

        <div>
          <label className="text-xs text-[#64748b] uppercase tracking-wider mb-2 block">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            placeholder="you@example.com"
            maxLength={100}
            required
            value={userInput.email}
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
          />
          {error.email && (
            <p className="text-xs text-red-400 mt-1.5">
              Please provide a valid email address.
            </p>
          )}
        </div>

        <div>
          <label className="text-xs text-[#64748b] uppercase tracking-wider mb-2 block">
            Message
          </label>
          <textarea
            className="form-input resize-none"
            placeholder="Tell me about your project or opportunity..."
            maxLength={500}
            required
            onChange={(e) =>
              setUserInput({ ...userInput, message: e.target.value })
            }
            onBlur={checkRequired}
            rows={5}
            value={userInput.message}
          />
        </div>

        {error.required && (
          <p className="text-xs text-red-400">All fields are required.</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-white font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-[#00f0ff]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
