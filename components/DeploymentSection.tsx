export default function DeploymentSection() {
  return (
    <section className="max-w-screen-2xl mx-auto px-12 mb-20 mt-32">
      <div className="bg-surface-container-low rounded-3xl p-1 md:p-2 lg:p-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16 bg-surface rounded-2xl shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)]">
        {/* Left Text Content */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="label-intercom text-[10px] text-primary tracking-widest font-bold">
              NEW: ONE-CLICK DEPLOY
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl mb-6 text-on-surface font-display font-bold leading-[1.1]">
            Ship to any <br /> cloud in <br /> minutes, <span className="text-primary italic">not<br />hours.</span>
          </h2>
          <p className="text-xl text-on-surface-variant max-w-md mb-10 leading-relaxed">
            Deploy Voxora instantly across your infrastructure with zero friction.
            Whether you&apos;re scaling globally or testing locally, Voxora
            adapts to your workflow without complexity.
          </p>

          {/* Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] bg-primary/10 rounded-full p-0.5">
                check_circle
              </span>
              <span className="text-sm font-bold text-on-surface">Multi-cloud Support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] bg-primary/10 rounded-full p-0.5">
                check_circle
              </span>
              <span className="text-sm font-bold text-on-surface">Auto-scaling enabled</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] bg-primary/10 rounded-full p-0.5">
                check_circle
              </span>
              <span className="text-sm font-bold text-on-surface">Zero-downtime Rollouts</span>
            </div>
          </div>
        </div>

        {/* Right Visual (Deployer Card) */}
        <div className="lg:col-span-7 bg-surface rounded-[2rem] border border-outline-variant/15 shadow-[0_32px_64px_-4px_rgba(35,38,32,0.08)] p-0 w-full overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-[24px]">rocket_launch</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface leading-snug">Voxora Deployer</h3>
                  <p className="text-[10px] text-on-surface-variant tracking-widest font-bold">v2.4.0-stable</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/30"></div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 items-start">
              {/* Left Config Panel */}
              <div className="w-full xl:w-[45%] flex flex-col gap-4">
                <div>
                  <h4 className="text-[10px] tracking-widest text-on-surface-variant font-bold mb-3">TARGET PROVIDER</h4>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-surface border-2 border-primary rounded-xl p-3 shadow-sm cursor-pointer relative overflow-hidden">
                      <span className="material-symbols-outlined text-primary text-[24px] mb-2">cloud</span>
                      <h5 className="text-xs font-bold text-on-surface">AWS</h5>
                      <p className="text-[9px] text-on-surface-variant">Cloud Infrastructure</p>
                    </div>
                    <div className="flex-1 bg-surface-container-low border border-outline-variant/20 rounded-xl p-3 cursor-pointer relative overflow-hidden flex flex-col justify-between">
                      <div className="z-10">
                        <div className="w-6 h-6 mb-2"></div>
                        <h5 className="text-xs font-bold text-on-surface-variant">GCP</h5>
                        <p className="text-[9px] text-outline-variant">Cloud Platform</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] tracking-widest text-on-surface-variant font-bold mb-3">GLOBAL REGION</h4>
                  <div className="bg-surface border border-outline-variant/20 rounded-xl p-3 flex items-center justify-between shadow-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-on-surface text-[18px]">public</span>
                      <span className="text-xs font-bold text-on-surface">us-east-1 (N. Virginia)</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-[16px]">unfold_more</span>
                  </div>
                </div>

                <button className="w-full bg-[#1A1C19] text-white rounded-xl py-3 flex items-center justify-center gap-2 font-bold hover:opacity-90 active:scale-95 transition-all shadow-md mt-6">
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  Initialize Deployment
                </button>
              </div>

              {/* Right Status Panel */}
              <div className="w-full xl:w-[55%] bg-surface-container-low rounded-xl p-5 border border-outline-variant/15 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-on-surface">Live Status</h4>
                  <span className="bg-primary-container text-primary text-[9px] font-bold px-2 py-1 rounded tracking-wider">DEPLOYING</span>
                </div>
                
                <div className="w-full h-1.5 bg-outline-variant/20 rounded-full mb-6 overflow-hidden">
                  <div className="h-full w-2/3 bg-primary rounded-full"></div>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Provisioning VPC</p>
                      <p className="text-[10px] text-on-surface-variant">Completed in 14s</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 animate-spin">sync</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Setting up Kubernetes Clusters</p>
                      <p className="text-[10px] text-on-surface-variant italic">Configuring node pools...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-50">
                    <span className="material-symbols-outlined text-on-surface-variant text-[16px] mt-0.5">remove</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant">Database Migration</p>
                      <p className="text-[10px] text-on-surface-variant italic">Waiting...</p>
                    </div>
                  </div>
                </div>

                {/* Terminal logs */}
                <div className="mt-4 border-t border-outline-variant/15 pt-4">
                  <div className="font-mono text-[9px] text-on-surface-variant leading-relaxed">
                    <p className="text-on-surface font-bold">&gt; voxora init --env production</p>
                    <p>[INFO] Validating credentials...</p>
                    <p>[INFO] Pushing build to registry...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
