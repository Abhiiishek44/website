export default function SectionConnector() {
  return (
    <div className="relative py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Connection Visual */}
        <div className="relative h-32">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 128" preserveAspectRatio="none">
            {/* Main connecting wire */}
            <path
              d="M 0 64 Q 200 20 400 64 Q 600 108 800 64"
              fill="none"
              className="wire-animation"
            />
            
            {/* Secondary wire paths */}
            <path
              d="M 0 80 Q 150 40 300 80 Q 450 120 600 80 Q 700 60 800 80"
              fill="none"
              className="wire-animation"
              style={{ animationDelay: "0.5s", strokeWidth: "1.5", opacity: "0.6" }}
            />
            
            <path
              d="M 0 48 Q 250 10 500 48 Q 650 86 800 48"
              fill="none"
              className="wire-animation"
              style={{ animationDelay: "1s", strokeWidth: "1", opacity: "0.4" }}
            />

            {/* Pulsing connection dots */}
            <circle cx="100" cy="64" r="4" className="pulse-dot" style={{ animationDelay: "0s" }} />
            <circle cx="200" cy="50" r="3" className="pulse-dot" style={{ animationDelay: "0.3s" }} />
            <circle cx="300" cy="78" r="2.5" className="pulse-dot" style={{ animationDelay: "0.6s" }} />
            <circle cx="400" cy="64" r="4" className="pulse-dot" style={{ animationDelay: "0.9s" }} />
            <circle cx="500" cy="52" r="3" className="pulse-dot" style={{ animationDelay: "1.2s" }} />
            <circle cx="600" cy="76" r="2.5" className="pulse-dot" style={{ animationDelay: "1.5s" }} />
            <circle cx="700" cy="64" r="3.5" className="pulse-dot" style={{ animationDelay: "1.8s" }} />
          </svg>

          {/* Connection labels */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass green-border">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-mono text-primary">Infrastructure Flow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flow indicators */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h4 className="text-sm font-mono text-foreground/80 mb-2">Deploy</h4>
            <p className="text-xs text-foreground/60 font-mono">One-click deployment to your chosen platform</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h4 className="text-sm font-mono text-foreground/80 mb-2">Scale</h4>
            <p className="text-xs text-foreground/60 font-mono">Auto-scaling based on your traffic requirements</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-sm font-mono text-foreground/80 mb-2">Calculate</h4>
            <p className="text-xs text-foreground/60 font-mono">Estimate costs and plan your infrastructure</p>
          </div>
        </div>
      </div>
    </div>
  );
}