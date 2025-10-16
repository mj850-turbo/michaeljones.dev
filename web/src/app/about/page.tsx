export const metadata = {
  title: "About — Michael Jones",
  description: "Frontend‑leaning full‑stack developer based in Fayetteville, AR.",
};

export default function AboutPage() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>About</h1>
      <p>
        I’m a frontend‑leaning full‑stack developer focused on building fast,
        accessible products with Next.js, TypeScript, Tailwind, and Supabase.
        I studied Computer Science at the University of Arkansas and worked at
        Turbo Labs, where I built modern web apps and explored agentic AI
        workflows.
      </p>
      <h2>Quick facts</h2>
      <ul>
        <li>Location: Fayetteville, Arkansas</li>
        <li>Focus: React/Next.js, TypeScript, UI/UX</li>
        <li>Interests: product design, clean systems, teaching</li>
      </ul>
    </article>
  );
}

