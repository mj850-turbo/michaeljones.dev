"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

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
    <div className="grid gap-6 md:grid-cols-5">
      {/* Left: intro / social */}
      <section
        className="md:col-span-2 rounded-2xl border p-6 ring-1 ring-inset ring-[var(--border)]"
        style={{ background: "linear-gradient(135deg, var(--panel-gradient-start) 0%, var(--panel-gradient-end) 100%)" }}
      >
        <h1 className="text-2xl font-semibold tracking-tight">Let’s connect</h1>
        <p className="mt-2 text-sm text-muted-foreground">I respond within 1–2 business days. Prefer email? Use the direct link below.</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <Link href="mailto:jonesmf58@gmail.com" className="flex items-center gap-2 rounded-lg border bg-background/40 px-3 py-2 ring-1 ring-inset ring-[var(--border)] hover:bg-accent transition-colors">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">Email</span>
          </Link>
          <Link href="https://github.com/michaelfjones" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border bg-background/40 px-3 py-2 ring-1 ring-inset ring-[var(--border)] hover:bg-accent transition-colors">
            <Github className="h-4 w-4 text-primary" />
            <span className="text-sm">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/michael-jones" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border bg-background/40 px-3 py-2 ring-1 ring-inset ring-[var(--border)] hover:bg-accent transition-colors">
            <Linkedin className="h-4 w-4 text-primary" />
            <span className="text-sm">LinkedIn</span>
          </Link>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Direct email: <a className="underline" href="mailto:jonesmf58@gmail.com">jonesmf58@gmail.com</a></p>
      </section>

      {/* Right: form */}
      <section className="md:col-span-3 rounded-2xl border bg-background/40 p-6 ring-1 ring-inset ring-[var(--border)]">
        <h2 className="font-semibold mb-4">Send a message</h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="email">Email</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="message">Message</label>
            <Textarea id="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="How can I help?" />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit">Send</Button>
            <span className="text-xs text-muted-foreground">Or email me directly.</span>
          </div>
        </form>
      </section>
    </div>
  );
}
