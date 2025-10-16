"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download, ExternalLink } from "lucide-react";

export default function ResumePreview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#resume") {
      setOpen(true);
    }
  }, []);

  return (
    <section
      id="resume"
      className="relative overflow-hidden rounded-2xl border ring-1 ring-inset ring-[var(--border)] p-6"
      style={{ background: "linear-gradient(135deg, var(--panel-gradient-start) 0%, var(--panel-gradient-end) 100%)" }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight">Resume</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            View my latest experience snapshot or download the PDF for offline review.
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="self-end sm:self-auto"
        >
          {open ? (
            <span className="inline-flex items-center gap-2">Hide preview <ChevronUp className="h-4 w-4" /></span>
          ) : (
            <span className="inline-flex items-center gap-2">View preview <ChevronDown className="h-4 w-4" /></span>
          )}
        </Button>
      </div>

      <div
        className={`transition-[max-height] duration-500 ease-out ${open ? "max-h-[1200px] mt-4" : "max-h-0"}`}
      >
        <div className={`overflow-hidden rounded-xl border bg-background/70 ${open ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        >
          <object
            data="/resume.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0"
            type="application/pdf"
            className="h-[32rem] w-full"
          >
            <div className="flex flex-col items-start gap-2 p-6 text-sm text-muted-foreground">
              <p>Inline preview isn&apos;t available in this browser.</p>
              <a href="/resume.pdf" className="underline" target="_blank" rel="noreferrer">
                Download resume.pdf
              </a>
            </div>
          </object>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button asChild>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2">
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <ExternalLink className="h-4 w-4" /> Open in new tab
          </a>
        </Button>
      </div>
    </section>
  );
}

