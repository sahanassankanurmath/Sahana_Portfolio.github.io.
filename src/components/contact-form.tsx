"use client";

import { siteConfig } from "@/lib/content";
import type { FormEvent } from "react";
import { useState } from "react";

export function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (endpoint) {
      setStatus("sending");

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error("Message could not be sent.");

        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }

      return;
    }

    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    window.location.assign(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="hidden" name="_subject" value="New message from Sahana's portfolio" />
      <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
      <label>Message<textarea name="message" required rows={5} placeholder="Your Message......." /></label>
      <button type="submit" className="button button-accent" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"} <ArrowUpRightIcon />
      </button>
      {status === "sent" && <p className="form-status" role="status">Message sent successfully.</p>}
      {status === "error" && <p className="form-status form-status-error" role="alert">Something went wrong. Please email me directly.</p>}
    </form>
  );
}

function ArrowUpRightIcon() {
  return <span aria-hidden="true">↗</span>;
}
