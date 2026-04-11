export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)]">
      <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-on-surface font-display">
          Voxora
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-on-surface font-semibold border-b-2 border-primary pb-1"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
          >
            Pricing
          </a>
          <button
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
          >
            Get Started
          </button>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            href="https://docs.voxora.cloud/introduction"
            target="_blank"
          >
            Docs
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/voxora-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border border-outline-variant/25 bg-surface-container-low px-5 py-2.5 text-[15px] font-semibold text-on-surface shadow-[0_10px_24px_-14px_rgba(26,28,25,0.35)] transition-all hover:-translate-y-0.5 hover:bg-surface-container-high hover:shadow-[0_14px_30px_-14px_rgba(26,28,25,0.4)] active:scale-95"
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" />
            </svg>

            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
