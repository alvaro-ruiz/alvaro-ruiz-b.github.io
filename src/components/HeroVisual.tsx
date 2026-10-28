import { hero } from '../data/content'
import { Mono } from './ui'

export default function HeroVisual() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#1b3350] bg-gradient-to-br from-[#0e2139] to-[#09162a]">
      <div className="flex items-center justify-between border-b border-line px-7 py-6">
        <div>
          <Mono className="text-[10px]">Áreas de enfoque</Mono>
          <b className="mt-1.5 block font-semibold">Software × Data × AI</b>
        </div>
        <span className="rounded-full border border-[#1d6f86] bg-[#0b2f3f] px-3.5 py-2 font-mono text-[10px] tracking-widest text-ac">
          ● EN EVOLUCIÓN
        </span>
      </div>
      <svg viewBox="0 0 480 300" className="block h-auto w-full" aria-hidden="true">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#2ee6ff" strokeOpacity=".06" />
          </pattern>
        </defs>
        <rect width="480" height="300" fill="url(#grid)" />
        <path d="M40 215C110 195 120 110 200 105S300 150 330 150 400 100 460 80" fill="none" stroke="#2ee6ff" strokeOpacity=".45" strokeWidth="1.5" />
        <path d="M30 230C120 200 160 150 210 170S330 180 380 140 440 90 470 80" fill="none" stroke="#6ea8ff" strokeOpacity=".3" />
        <g fill="#0b1c33" stroke="#1d6f86">
          <rect x="48" y="40" width="84" height="84" rx="20" />
          <rect x="198" y="136" width="84" height="84" rx="20" />
          <rect x="352" y="14" width="84" height="84" rx="20" />
        </g>
        <g fill="#2ee6ff" fontFamily="monospace" fontSize="10" textAnchor="middle" letterSpacing="2">
          <text x="90" y="108">DEV</text><text x="240" y="204">DATA</text><text x="394" y="82">AI</text>
        </g>
        <g fill="none" stroke="#2ee6ff" strokeWidth="2">
          <path d="M80 70l-8 8 8 8M100 70l8 8-8 8M94 66l-8 24" />
          <ellipse cx="240" cy="160" rx="10" ry="4" /><path d="M230 160v14c0 5 20 5 20 0v-14" />
          <path d="M394 38v14M387 45h14" />
          <circle cx="255" cy="40" r="5" /><circle cx="110" cy="150" r="5" /><circle cx="385" cy="170" r="5" />
        </g>
      </svg>
      <div className="grid grid-cols-3 border-t border-line">
        {hero.areas.map((a, i) => (
          <div key={a} className="border-r border-line p-5 text-[11px] text-mu last:border-r-0">
            <span className="mb-2.5 block font-mono text-ac">0{i + 1}</span>
            {a}
          </div>
        ))}
      </div>
    </div>
  )
}
