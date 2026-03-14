'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-125 rounded-full bg-white/2 blur-3xl" />
      </div>

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-mono text-muted-foreground uppercase tracking-widest"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          test
        </motion.div>

        {/* Heading */}
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.06] mb-6">
          Your project<br />
          <span className="text-muted-foreground">is ready.</span>
        </h1>

        {/* Subtext */}
        <p className="mb-12 max-w-md text-lg leading-relaxed text-muted-foreground">
          Built with Next.js 15, Tailwind CSS v4, and shadcn/ui.
          <br />Start building your vision.
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Get started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://ghyst.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
          >
            Built with Ghyst
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 9L9 2M9 2H5M9 2V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </main>
  );
}