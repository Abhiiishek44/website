import Link from "next/link";

const NAV = [
  {
    heading: "Platform",
    links: [
      { label: "Agent Runtime",     href: "#features" },
      { label: "Agentic Workflows", href: "#features" },
      { label: "RAG Knowledge",     href: "#features" },
      { label: "Lifecycle Engine",  href: "#features" },
      { label: "Infrastructure",    href: "#features" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation",   href: "https://github.com/voxora-cloud/voxora#readme" },
      { label: "API Reference",   href: "https://github.com/voxora-cloud/voxora#readme" },
      { label: "Self-Host Guide", href: "https://railway.app/template/voxora" },
      { label: "Changelog",       href: "https://github.com/voxora-cloud/voxora/releases" },
      { label: "Contributing",    href: "https://github.com/voxora-cloud/voxora/blob/main/CONTRIBUTION.md" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "GitHub",       href: "https://github.com/voxora-cloud/voxora" },
      { label: "Discord",      href: "https://discord.gg/voxora" },
      { label: "X / Twitter",  href: "https://twitter.com/voxoracloud" },
      { label: "Product Hunt", href: "https://www.producthunt.com/products/voxora" },
      { label: "Discussions",  href: "https://github.com/voxora-cloud/voxora/discussions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "https://www.voxora.cloud/" },
      { label: "Blog",    href: "https://www.voxora.cloud/" },
      { label: "Careers", href: "https://www.voxora.cloud/" },
      { label: "License", href: "https://github.com/voxora-cloud/voxora/blob/main/LICENSE" },
      { label: "Privacy", href: "https://www.voxora.cloud/" },
    ],
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/voxora-cloud/voxora",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/voxoracloud",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/voxora",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/voxora",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F2] text-[#161612]">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#059669]/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Upper section — wordmark + nav */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            {/* Wordmark */}
            <Link href="https://www.voxora.cloud/" target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-0">
              <span
                className="text-[30px] font-black italic leading-none tracking-[-0.03em] text-[#059669]"
                style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif" }}
              >
                V
              </span>
              <span
                className="text-[19px] font-semibold italic leading-none tracking-[-0.01em] text-[#161612]"
                style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif" }}
              >
                oxora
              </span>
            </Link>

            <p className="mt-4 max-w-[200px] text-sm leading-relaxed text-[#4b4b44]">
              Agentic runtime for multi-tenant AI infrastructure.
            </p>
            <p
              className="mt-2 max-w-[200px] text-sm italic text-[#6a6a61]"
              style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif" }}
            >
              Open source. Self-hostable. Production-ready.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d8d8cc] bg-[#f3f3ec] text-[#4b4b44] transition hover:border-[#059669]/40 hover:bg-[#059669]/10 hover:text-[#047857]"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-[#5f5f56] uppercase">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-[#4b4b44] transition hover:text-[#161612]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-[#d8d8cc]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Open source badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#059669]/25 bg-[#059669]/10 px-3 py-1 text-[11px] font-medium text-[#34d399]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              Open Source · MIT License
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-[#f8f8f2]/40">
              v1.0.0-beta
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-[#9a9a91]">
            © {new Date().getFullYear()} Voxora. Built for developers who ship.
          </p>

          {/* Legal links */}
          <div className="flex gap-4">
            {[
              { label: "Privacy",  href: "https://www.voxora.cloud/" },
              { label: "Terms",    href: "https://www.voxora.cloud/" },
              { label: "License",  href: "https://github.com/voxora-cloud/voxora/blob/main/LICENSE" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-[#6a6a61] transition hover:text-[#161612]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
