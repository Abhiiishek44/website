export default function ChatWidgetPreview() {
  return (
    <section className="max-w-screen-2xl mx-auto px-12 mb-40">
      <div className="bg-surface-container-low rounded-3xl p-1 md:p-2 lg:p-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-12 lg:p-20 bg-surface rounded-2xl shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)]">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl mb-6 text-on-surface">
              Agentic Intelligence That Feels Native
            </h2>
            <p className="text-lg mb-10 text-on-surface-variant">
              Orchestrate complex long-running tasks with our stateful execution
              engine. Built-in error recovery, tool-calling protocols, and
              reasoning traces come standard.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-surface-container p-3 rounded-2xl">
                  <span className="material-symbols-outlined text-primary">
                    auto_awesome
                  </span>
                </div>
                <div>
                  <h5 className="text-base mb-1 text-on-surface">Self-healing Workflows</h5>
                  <p className="text-sm text-on-surface-variant">
                    Automatic retry with exponential backoff for flaky tool outputs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-surface-container p-3 rounded-2xl">
                  <span className="material-symbols-outlined text-primary">
                    memory
                  </span>
                </div>
                <div>
                  <h5 className="text-base mb-1 text-on-surface">Universal Memory</h5>
                  <p className="text-sm text-on-surface-variant">
                    Persistent cross-session context that evolves with your users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative">
              <div className="bg-surface rounded-3xl shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)] overflow-hidden flex flex-col min-h-[600px] transform lg:translate-x-4 border border-outline-variant/15">
                {/* Chat Header */}
                <div className="px-8 py-5 border-b border-outline-variant/15 flex items-center justify-between bg-surface">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary font-bold">
                        smart_toy
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-tight text-on-surface">
                        Voxora AI
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="label-intercom text-[10px] text-on-surface-variant">
                          System Active
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined">
                        unfold_more
                      </span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined">minimize</span>
                    </button>
                  </div>
                </div>
                {/* Chat Content Area */}
                <div className="flex-1 p-8 space-y-6 overflow-y-auto editorial-gradient">
                  <div className="flex justify-end">
                    <div className="bg-surface/20 backdrop-blur-md text-white p-5 rounded-2xl rounded-tr-none max-w-[80%] border border-surface/20">
                      <p className="text-sm font-medium text-white">
                        Can you help me refactor the authentication module to use
                        JWT instead of sessions?
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-surface/10 backdrop-blur-sm rounded-2xl p-6 border border-surface/10">
                      <div className="flex items-center justify-between mb-4 cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-white/70 text-sm">
                            psychology
                          </span>
                          <span className="label-intercom text-[10px] text-white/90">
                            Thought Process
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-white/50 text-sm">
                          expand_more
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/80">
                          <span className="material-symbols-outlined text-[14px] text-primary-container">
                            check_circle
                          </span>
                          <span className="text-xs font-medium">
                            Analyzing migration context...
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <div className="w-3.5 h-3.5 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                          </div>
                          <span className="text-xs font-bold">
                            Generating response...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-surface text-on-surface p-6 rounded-2xl rounded-tl-none max-w-[90%] shadow-xl">
                        <p className="text-[15px] leading-relaxed font-semibold text-on-surface">
                          Certainly! I&apos;ve analyzed your core architecture. To
                          migrate to JWT, we&apos;ll need to implement a Token Service
                          and update your middleware to verify the Authorization
                          header.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Input Box */}
                <div className="p-6 bg-surface border-t border-outline-variant/15">
                  <div className="relative flex items-center">
                    <input
                      className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-6 pr-14 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant font-medium outline-hidden text-on-surface"
                      placeholder="Type your message..."
                      type="text"
                    />
                    <button className="absolute right-3 w-10 h-10 bg-primary text-on-primary rounded-xl flex items-center justify-center hover:opacity-90 transition-all shadow-md shadow-primary/20 cursor-pointer">
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </button>
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
