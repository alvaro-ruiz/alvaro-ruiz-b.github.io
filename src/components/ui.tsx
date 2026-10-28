import type { ReactNode } from 'react'

export const Mono = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`font-mono text-[11px] uppercase tracking-[.2em] text-mu ${className}`}>{children}</span>
)

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="mr-1.5 mt-1.5 inline-block rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ac2">
    {children}
  </span>
)

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-2xl border border-line bg-card p-6">{children}</div>
)

export const Section = ({
  id, label, title, children, last = false,
}: { id: string; label: string; title: string; children: ReactNode; last?: boolean }) => (
  <section
    id={id}
    className={`flex flex-col justify-center px-5 py-14 lg:min-h-screen lg:px-16 lg:py-20 ${last ? '' : 'border-b border-line'}`}
  >
    <Mono>{label}</Mono>
    <h2 className="mb-7 mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">{title}</h2>
    {children}
  </section>
)

const paths: Record<string, string> = {
  home: 'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  user: 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 21c0-4 4-6 8-6s8 2 8 6',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5',
  cap: 'M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5',
  mail: 'M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z',
}

export const Icon = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth={1.6} aria-hidden="true">
    <path d={paths[name]} />
  </svg>
)
