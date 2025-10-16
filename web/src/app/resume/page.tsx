import Link from "next/link";

export const metadata = {
  title: "Resume — Michael Jones",
  description: "Download or view my resume.",
};

export default function ResumePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
      <p className="text-muted-foreground">
        A PDF resume can be placed at <code className="px-1 py-0.5 rounded bg-muted">/public/resume.pdf</code>. If present, the
        button below will open it.
      </p>
      <div>
        <Link className="underline" href="/resume.pdf" target="_blank" rel="noreferrer">
          Open resume.pdf
        </Link>
      </div>
    </div>
  );
}

