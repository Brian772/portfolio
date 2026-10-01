"use client";

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);
  const contactRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = contactRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        const error = await response.json();
        setStatus(`Error: ${error.message || "Failed to send message"}`);
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full pt-8 sm:pt-12 lg:pt-16 pb-6 lg:pb-12"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="order-2 md:order-1">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-2xl border border-theme-border bg-surface soft-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-tint flex items-center justify-center">
                  <Globe size={18} className="text-brand" aria-hidden="true" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-theme-muted font-medium text-xs uppercase tracking-wider">
                    Location
                  </span>
                  <p className="theme-base mt-0.5 text-base sm:text-lg text-theme-heading">
                    Malang, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-2xl border border-theme-border bg-surface soft-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-tint flex items-center justify-center">
                  <Mail size={18} className="text-brand" aria-hidden="true" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-theme-muted font-medium text-xs uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:ardhisswara@gmail.com"
                    className="theme-base mt-0.5 font-medium text-theme-heading hover:text-brand transition-colors"
                  >
                    ardhisswara@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-2xl border border-theme-border bg-surface soft-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-coral-tint flex items-center justify-center">
                  <Phone size={18} className="text-coral" aria-hidden="true" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-theme-muted font-medium text-xs uppercase tracking-wider">
                    Social
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a
                      href="https://github.com/brian772"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-base font-medium text-theme-heading hover:text-brand transition-colors text-sm"
                    >
                      GitHub
                    </a>
                    <span className="text-theme-muted text-sm">/</span>
                    <a
                      href="https://linkedin.com/in/brianardhisswara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-base font-medium text-theme-heading hover:text-brand transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full">
            <div className="bg-surface rounded-2xl border border-theme-border p-5 sm:p-6 lg:p-8 soft-shadow">
              <h2
                id="contact-heading"
                className="theme-base text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-theme-heading mb-6"
              >
                Get in Touch
              </h2>

              {status && (
                <div className="mb-5 p-4 rounded-xl bg-brand-tint text-brand text-sm sm:text-base">
                  {status}
                </div>
              )}

              <form
                ref={contactRef}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="theme-base text-sm font-medium block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="theme-base w-full rounded-md border border-theme-border bg-subtle px-4 py-3 text-sm sm:text-base outline-none transition-colors focus:border-brand focus:bg-surface-elevated"
                    />
                  </div>
                  <div>
                    <label
                      className="theme-base text-sm font-medium block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="theme-base w-full rounded-md border border-theme-border bg-subtle px-4 py-3 text-sm sm:text-base outline-none transition-colors focus:border-brand focus:bg-surface-elevated"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="theme-base text-sm font-medium block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="theme-base w-full rounded-md border border-theme-border bg-subtle px-4 py-3 text-sm sm:text-base resize-y min-h-[120px] outline-none transition-colors focus:border-brand focus:bg-surface-elevated"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="theme-base w-full sm:w-auto rounded-md py-3.5 px-8 bg-brand text-white font-medium hover:bg-brand-hover hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}