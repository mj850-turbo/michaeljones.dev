"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = new URL(`mailto:jonesmf58@gmail.com`);
    const subject = `Portfolio contact from ${name || "Someone"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold tracking-tight mb-4">Contact</h1>
      <p className="text-muted-foreground mb-6">
        I’ll do my best to respond within 1–2 business days. You can also email
        me directly at <a className="underline" href="mailto:jonesmf58@gmail.com">jonesmf58@gmail.com</a>.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <Textarea id="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
