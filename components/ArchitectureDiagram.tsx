import { Network } from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass green-border mb-8 animate-float">
            <Network className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">System Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            How Voxora <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A clean, modular architecture built for scale. Every component connects
            seamlessly to the Voxora Core.
          </p>
        </div>

        {/* Diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-10 relative border border-border/30 overflow-hidden">

            {/* Grid overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Canvas: 560 × 460, all positions in viewBox units */}
            <div className="relative w-full" style={{ paddingBottom: "82.14%" /* 460/560 */ }}>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 560 460"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Dot markers — emerald */}
                  <marker id="dot-em" markerWidth="6" markerHeight="6" refX="3" refY="3">
                    <circle cx="3" cy="3" r="2.5" fill="#10b981" />
                  </marker>
                  <marker id="dot-ac" markerWidth="6" markerHeight="6" refX="3" refY="3">
                    <circle cx="3" cy="3" r="2.5" fill="#34d399" />
                  </marker>

                  {/* Core glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Core gradient — emerald */}
                  <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>

                  {/* Card gradient — dark emerald tint */}
                  <linearGradient id="cardGreen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#022c22" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#064e3b" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* ── Version badges (top-left) ── */}
                {/* v1.0 badge */}
                <rect x="12" y="12" width="60" height="22" rx="11"
                  fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeOpacity="0.5" strokeWidth="1" />
                <text x="42" y="27" textAnchor="middle"
                  fill="#34d399" fontSize="9" fontWeight="700" letterSpacing="0.5">v1.0</text>

                {/* Dot separator */}
                <circle cx="78" cy="23" r="2" fill="#34d399" opacity="0.4" />

                {/* "Upcoming" badge */}
                <rect x="84" y="12" width="90" height="22" rx="11"
                  fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)" strokeWidth="1" strokeDasharray="3 2" />
                {/* Pulse dot */}
                <circle cx="97" cy="23" r="3" fill="#34d399" opacity="0.3" />
                <circle cx="97" cy="23" r="1.5" fill="#34d399" opacity="0.9" />
                <text x="148" y="27" textAnchor="end"
                  fill="rgba(52,211,153,0.6)" fontSize="8" fontWeight="600" letterSpacing="0.5">v2.0 Soon</text>

                {/* ── Connector lines ── */}
                {/* Top (Agent Dashboard → Core) */}
                <line x1="280" y1="112" x2="280" y2="183"
                  stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3"
                  markerStart="url(#dot-em)" markerEnd="url(#dot-em)" />

                {/* Left (Website Widget → Core) */}
                <line x1="168" y1="230" x2="222" y2="230"
                  stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3"
                  markerStart="url(#dot-ac)" markerEnd="url(#dot-ac)" />

                {/* Bottom (Support Dashboard → Core) */}
                <line x1="280" y1="277" x2="280" y2="348"
                  stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3"
                  markerStart="url(#dot-em)" markerEnd="url(#dot-em)" />

                {/* ── CORE card (center 280,230) 116×94 ── */}
                <rect x="222" y="183" width="116" height="94" rx="18"
                  fill="url(#coreGrad)" />
                <rect x="222" y="183" width="116" height="94" rx="18"
                  fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
                {/* Core icon bg */}
                <rect x="256" y="196" width="48" height="36" rx="10"
                  fill="rgba(255,255,255,0.15)" />
                {/* Lightning bolt icon */}
                <path d="M284 201 l-6 14 h5 l-4 13 l12-17 h-6 z"
                  fill="white" opacity="0.95" />
                {/* Labels */}
                <text x="280" y="245" textAnchor="middle"
                  fill="white" fontSize="10" fontWeight="700" letterSpacing="1.5">
                  VOXORA CORE
                </text>
                <text x="280" y="257" textAnchor="middle"
                  fill="rgba(255,255,255,0.6)" fontSize="8">
                  Orchestration Engine
                </text>
                {/* Core connection dots */}
                <circle cx="280" cy="183" r="5" fill="#34d399" stroke="#0a0a0a" strokeWidth="1.5" />
                <circle cx="280" cy="277" r="5" fill="#34d399" stroke="#0a0a0a" strokeWidth="1.5" />
                <circle cx="222" cy="230" r="5" fill="#34d399" stroke="#0a0a0a" strokeWidth="1.5" />
                <circle cx="338" cy="230" r="5" fill="#34d399" stroke="#0a0a0a" strokeWidth="1.5" />

                {/* ── AGENT DASHBOARD card (top) 160×72 ── */}
                <rect x="200" y="40" width="160" height="72" rx="14"
                  fill="url(#cardGreen)" />
                <rect x="200" y="40" width="160" height="72" rx="14"
                  fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
                {/* Icon circle */}
                <circle cx="237" cy="76" r="16" fill="rgba(16,185,129,0.15)" />
                {/* User icon */}
                <circle cx="237" cy="71" r="5.5" fill="none" stroke="#34d399" strokeWidth="1.5" />
                <path d="M227 87 a10 10 0 0 1 20 0" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                {/* Text */}
                <text x="268" y="71" fill="#34d399" fontSize="10" fontWeight="700">Agent</text>
                <text x="268" y="84" fill="#34d399" fontSize="10" fontWeight="700">Dashboard</text>
                <text x="268" y="97" fill="rgba(52,211,153,0.5)" fontSize="8">Support team interface</text>
                {/* Bottom dot */}
                <circle cx="280" cy="112" r="4" fill="#10b981" stroke="#0a0a0a" strokeWidth="1.5" />

                {/* ── WEBSITE WIDGET card (left) 160×72 ── */}
                <rect x="8" y="194" width="160" height="72" rx="14"
                  fill="url(#cardGreen)" />
                <rect x="8" y="194" width="160" height="72" rx="14"
                  fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
                {/* Icon circle */}
                <circle cx="45" cy="230" r="16" fill="rgba(16,185,129,0.15)" />
                {/* Chat bubble icon */}
                <rect x="36" y="222" width="18" height="14" rx="3"
                  fill="none" stroke="#34d399" strokeWidth="1.5" />
                <path d="M40 239 l2 4 l4-4" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinejoin="round" />
                <line x1="39" y1="227" x2="51" y2="227" stroke="#34d399" strokeWidth="1" opacity="0.6" />
                <line x1="39" y1="230" x2="49" y2="230" stroke="#34d399" strokeWidth="1" opacity="0.6" />
                <line x1="39" y1="233" x2="51" y2="233" stroke="#34d399" strokeWidth="1" opacity="0.6" />
                {/* Text */}
                <text x="76" y="224" fill="#34d399" fontSize="10" fontWeight="700">Website</text>
                <text x="76" y="237" fill="#34d399" fontSize="10" fontWeight="700">Widget</text>
                <text x="76" y="250" fill="rgba(52,211,153,0.5)" fontSize="8">Embeddable chat</text>
                {/* Right dot */}
                <circle cx="168" cy="230" r="4" fill="#34d399" stroke="#0a0a0a" strokeWidth="1.5" />

                {/* ── SUPPORT DASHBOARD card (bottom) 160×72 ── */}
                <rect x="200" y="348" width="160" height="72" rx="14"
                  fill="url(#cardGreen)" />
                <rect x="200" y="348" width="160" height="72" rx="14"
                  fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
                {/* Icon circle */}
                <circle cx="237" cy="384" r="16" fill="rgba(16,185,129,0.15)" />
                {/* Support/settings icon */}
                <circle cx="237" cy="384" r="7" fill="none" stroke="#34d399" strokeWidth="1.5" />
                <circle cx="237" cy="384" r="3" fill="#34d399" />
                <line x1="237" y1="374" x2="237" y2="371" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="237" y1="394" x2="237" y2="397" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="227" y1="384" x2="224" y2="384" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="247" y1="384" x2="250" y2="384" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                {/* Text */}
                <text x="268" y="379" fill="#34d399" fontSize="10" fontWeight="700">Support</text>
                <text x="268" y="392" fill="#34d399" fontSize="10" fontWeight="700">Dashboard</text>
                <text x="268" y="405" fill="rgba(52,211,153,0.5)" fontSize="8">Customer management</text>
                {/* Top dot */}
                <circle cx="280" cy="348" r="4" fill="#10b981" stroke="#0a0a0a" strokeWidth="1.5" />

              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
