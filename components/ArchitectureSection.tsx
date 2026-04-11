export default function ArchitectureSection() {
  return (
    <section id="features" className="max-w-screen-2xl mx-auto px-12 mb-40 scroll-mt-28">
      <div className="bg-surface-container-low rounded-3xl p-1 md:p-2 lg:p-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-12 lg:p-20 bg-surface rounded-2xl shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)]">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <span className="label-intercom text-xs text-primary mb-4 block tracking-widest font-bold">
            ARCHITECTURE
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-on-surface leading-tight font-display font-bold">
            Built to scale <br /> across <span className="text-primary">teams</span>,<br /> customers, and<br /> environments.
          </h2>
          <p className="text-xl md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
            Voxora is designed with a powerful multi-tenant architecture that lets you manage multiple customers, workspaces, or organizations from a single system. Isolate data, customize workflows, and scale effortlessly—without duplicating infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="editorial-gradient text-on-primary btn-intercom hover:opacity-90 active:scale-95 text-base cursor-pointer shadow-[0_8px_16px_-4px_rgba(0,107,74,0.2)] font-bold">
              Manage at scale
            </button>
            <a    target="_blank" href="https://docs.voxora.cloud/introduction" className="bg-surface text-on-surface border-2 border-outline-variant/30 rounded-[1.5rem] px-5 py-2.5 hover:bg-surface-container-low transition-colors font-bold shadow-sm">
              View documentation
            </a>
          </div>
          <div className="flex space-x-16">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary mb-1">99.99%</span>
              <span className="label-intercom text-[10px] text-on-surface-variant font-bold">UPTIME SLA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary mb-1">&lt; 50ms</span>
              <span className="label-intercom text-[10px] text-on-surface-variant font-bold">DATA ISOLATION</span>
            </div>
          </div>
        </div>

        {/* Visual Content (Dashboard Replica) */}
        <div className="relative">
          {/* Main Dashboard Card */}
          <div className="bg-surface rounded-3xl border border-outline-variant/15 shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)] overflow-hidden w-full max-w-2xl ml-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-outline-variant/15 bg-surface">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border border-outline-variant/20 rounded-lg px-3 py-1.5 shadow-sm bg-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">business</span>
                  <span className="text-sm font-bold text-on-surface">Acme Inc.</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">expand_more</span>
                </div>
                <div className="h-4 w-px bg-outline-variant/30 hidden md:block"></div>
                <span className="hidden md:inline-flex bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">
                  PRODUCTION
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-6 h-6 rounded-full border-2 border-surface" />
                  <img src="https://i.pravatar.cc/100?img=4" alt="Avatar" className="w-6 h-6 rounded-full border-2 border-surface" />
                </div>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer text-[20px]">settings</span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row min-h-[380px]">
              {/* Sidebar */}
              <div className="w-full md:w-56 border-r border-outline-variant/15 p-6 bg-surface-container-low hidden md:block">
                <div className="mb-8">
                  <h4 className="text-[10px] tracking-widest text-on-surface-variant font-bold mb-4">WORKSPACES</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 bg-primary-container/40 p-2 rounded-lg text-primary font-bold text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary relative left-1"></div>
                      <span className="ml-1">Acme Inc.</span>
                    </div>
                    <div className="flex items-center gap-3 hover:bg-surface-container p-2 rounded-lg text-on-surface-variant font-semibold text-sm cursor-pointer transition-colors">
                      <div className="w-2 h-2 rounded-full bg-outline-variant/60 relative left-1"></div>
                      <span className="ml-1">NovaTech</span>
                    </div>
                    <div className="flex items-center gap-3 hover:bg-surface-container p-2 rounded-lg text-on-surface-variant font-semibold text-sm cursor-pointer transition-colors">
                      <div className="w-2 h-2 rounded-full bg-outline-variant/60 relative left-1"></div>
                      <span className="ml-1">FinEdge</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[10px] tracking-widest text-on-surface-variant font-bold mb-4">RESOURCES</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 hover:bg-surface-container p-2 rounded-lg text-on-surface-variant font-semibold text-sm cursor-pointer transition-colors">
                      <span className="material-symbols-outlined text-[18px]">bar_chart</span>
                      <span>Usage Metrics</span>
                    </div>
                    <div className="flex items-center gap-3 hover:bg-surface-container p-2 rounded-lg text-on-surface-variant font-semibold text-sm cursor-pointer transition-colors">
                      <span className="material-symbols-outlined text-[18px]">group</span>
                      <span>Team Members</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 p-6 md:p-8 bg-surface">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-on-surface mb-1">Acme Inc. Dashboard</h2>
                    <p className="text-xs text-on-surface-variant">Tenant ID: vox_tnt_82931-acme</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary-container px-2 py-1 rounded-full border border-primary/20 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-[9px] font-bold text-on-primary-container tracking-wider">ACTIVE</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="border border-outline-variant/20 rounded-xl p-4 shadow-sm bg-surface">
                    <p className="text-[10px] font-bold text-on-surface-variant mb-2">Total Requests</p>
                    <p className="text-2xl font-bold text-on-surface mb-2">1.2M</p>
                    <div className="flex items-center gap-1 text-primary text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[12px] leading-none">trending_up</span>
                      <span>+12.5% vs LW</span>
                    </div>
                  </div>
                  <div className="border border-outline-variant/20 rounded-xl p-4 shadow-sm bg-surface">
                    <p className="text-[10px] font-bold text-on-surface-variant mb-2">Conversations</p>
                    <p className="text-2xl font-bold text-on-surface mb-2">48.2k</p>
                    <div className="flex items-center gap-1 text-primary text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[12px] leading-none">trending_up</span>
                      <span>+4.2% vs LW</span>
                    </div>
                  </div>
                  <div className="border border-outline-variant/20 rounded-xl p-4 shadow-sm bg-surface">
                    <p className="text-[10px] font-bold text-on-surface-variant mb-2">API Latency</p>
                    <p className="text-2xl font-bold text-on-surface mb-2">34ms</p>
                    <div className="flex items-center gap-1 text-on-surface-variant text-[10px] font-bold tracking-wider">
                      <span>STABLE</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-[10px] tracking-widest text-on-surface font-bold">ACTIVE DEPLOYMENTS</h4>
                    <span className="text-primary text-[10px] font-bold cursor-pointer">View All</span>
                  </div>
                  <div className="border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm bg-surface">
                    <div className="flex justify-between items-center p-3 sm:p-4 border-b border-outline-variant/15">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface text-[16px]">terminal</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-on-surface mb-0.5">production-v2-stable</p>
                          <p className="text-[10px] text-on-surface-variant">Last updated 2m ago</p>
                        </div>
                      </div>
                      <span className="bg-primary-container text-on-primary-container text-[9px] font-bold px-2 py-0.5 rounded border border-primary/20">Deployed</span>
                    </div>
                    <div className="flex justify-between items-center p-3 sm:p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface text-[16px]">database</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-on-surface mb-0.5">staging-db-replica</p>
                          <p className="text-[10px] text-on-surface-variant">Last updated 14h ago</p>
                        </div>
                      </div>
                      <span className="bg-surface-container-high text-on-surface-variant text-[9px] font-bold px-2 py-0.5 rounded border border-outline-variant/20">Standby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 'Isolated Compute' Card */}
          <div className="absolute -bottom-8 -left-4 sm:left-4 z-10 w-64 bg-surface rounded-2xl border border-outline-variant/15 shadow-[0_24px_48px_-4px_rgba(26,28,25,0.1)] p-5 hidden md:block">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">security</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Isolated Compute</h4>
                <p className="text-[9px] text-on-surface-variant font-bold tracking-widest">SECURITY LAYER</p>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
              Data is strictly partitioned at the DB level, ensuring zero leakage between tenant workspaces.
            </p>
            <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden mb-2">
              <div className="w-full h-full bg-primary rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-on-surface-variant tracking-widest font-bold">COMPLIANCE CHECK</span>
              <span className="text-[9px] text-primary tracking-widest font-bold">VERIFIED</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
