export default function Footer() {
  return (
    <footer className="relative bg-surface-container-highest w-full py-10 px-12 overflow-hidden flex flex-col items-center justify-center">
      {/* 1. Background Layer (VOXORA text) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center mt-8">
        <span className="text-[100px] md:text-[200px] lg:text-[280px] font-black text-on-surface/10 whitespace-nowrap tracking-wide md:tracking-widest filter blur-[1px]">
          VOXORA
        </span>
      </div>

      {/* 3. Overlay Protection */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent z-[5] pointer-events-none opacity-30"></div>

      {/* 2. Content Layer */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto pt-4 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16 px-4 md:px-8 lg:px-0">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-start pr-8 mb-4 md:mb-8 lg:mb-0">
            <h3 className="text-3xl font-bold text-on-surface tracking-tighter font-display mb-4">Voxora</h3>
            <p className="text-on-surface-variant text-sm mb-2 leading-relaxed max-w-xs">
              Agentic runtime for multi-tenant AI infrastructure.
            </p>
            <p className="text-on-surface text-sm font-bold tracking-tight">
              Open source. Self-hostable. Production-ready.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary font-bold mb-2 text-[11px] tracking-widest uppercase">Platform</h4>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Agent Runtime</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Agentic Workflows</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">RAG Knowledge</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Lifecycle Engine</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Infrastructure</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary font-bold mb-2 text-[11px] tracking-widest uppercase">Developers</h4>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">API Reference</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Self-Host Guide</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Changelog</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Contributing</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary font-bold mb-2 text-[11px] tracking-widest uppercase">Community</h4>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Discord</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">X / Twitter</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Product Hunt</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Discussions</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary font-bold mb-2 text-[11px] tracking-widest uppercase">Company</h4>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">About</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Careers</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">License</a>
            <a href="#" className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold text-on-surface-variant/70">
            © 2024 Voxora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
