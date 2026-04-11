export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-40 pt-25 bg-[linear-gradient(180deg,rgba(0,107,74,0.08)_0%,rgba(0,107,74,0.02)_34%,rgba(255,255,255,0)_70%)]">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.15]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(6,183,127,0.10),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.07)_0%,transparent_38%,rgba(0,107,74,0.06)_72%,transparent_100%)]" />
      <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[80%] w-[60%] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[5%] -left-[5%] h-[60%] w-[40%] rounded-full bg-secondary-container/20 blur-[100px]" />
      <div className="pointer-events-none absolute left-[30%] top-[15%] h-44 w-44 rounded-full bg-primary/12 blur-[95px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="font-headline text-6xl font-extrabold leading-[1.05] tracking-tight text-on-surface md:text-7xl">
               Deliver fast, <br />
                <span className="gradient-text">effortless customer support with Voxora AI.</span>
              </h1>
              <p className="max-w-lg text-xl font-medium leading-relaxed text-on-surface-variant">
                Voxora brings every customer conversation into one place — with AI that helps you reply in seconds.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="primary-cta-gradient flex items-center gap-2 rounded-2xl px-8 py-4 font-bold text-on-primary shadow-[0_20px_40px_-8px_rgba(0,107,74,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-12px_rgba(0,107,74,0.4)] active:scale-95">
                Get Started
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <a    target="_blank" href="https://github.com/voxora-cloud" className="flex items-center gap-2 rounded-2xl px-8 py-4 font-bold text-on-surface transition-all hover:bg-surface-container-high active:scale-95">
                View on GitHub
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase">
                Trusted by developers &amp; startups
              </span>
              <div className="flex items-center gap-10 opacity-40 grayscale transition-all hover:grayscale-0">
                <img
                  alt="TechStream logo"
                  className="h-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmh1_8C15k_iNLyb33lno6sfyvNcI7TLI76TECVpcXBGJs9QDIrANdJ_NNM8QsN1eVFs6bqoZ98efRhJMOWFhiIMvRZFMarufPzUXSX3zYcYFTG5HJAaTFBlnEZZu-WnoZWeuoEu8CVPhDKLlKztOFTTARcw5m96_VVbubVoaDcNiDKFvUTNBBi-xZlUscEVWCwdFROogctEfhgLVAutuSqQ7bmFzY3uHLH0nUPedRcMPsUk5GZNbvXY9fyTXTSM9_dwPc0BJo-N3-"
                />
                <img
                  alt="NeuralLink logo"
                  className="h-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcBEp_AWlRvk-Y1NzYBjH3OoYVDRT8xdegqpPSsBPiidasHUmcEU0SYzR1sIOmGJftc7qpqkeh78VMTTPGDHI2kFQNm2dfHYMU5wz_oVhjt2jeXZ-DcXgqoX6gqqmxCtQ5rOpL1n_znX9ocY_OZFq56smeFyaA33Vz9V0XFh-hyu4V53G71MMZ-ajH8RATK5EUsC5KdIq2Pc4RuYGgC5byAZa09BhQBYPvh12HTrnTB2UG8STcEOqUHuWx8_htHYNhPU9BI2C1K9ml"
                />
                <img
                  alt="DataCore logo"
                  className="h-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPI1fYC_mt8YDYwDLiCKuZnT3aGbgsUYNQ603ChnW9BvfrO5sM7AMjjqzyLOMFYjZ8gE8OhRSiYO3xKLk-nqlQm8B0xjrl7Fc-hWg9fuvA0FTPa0MYegJBZSwKeg7GHK2kjSDyitit38xBacoQQxhMv35dmsgb1sbHtq6ryfDg7NHrQ1FQFjZ8It4vyL4amZ2EvZTtw3EqUI0NFMxulr_B57ymBVSdt3uzBR24heWJwKxjhA1MtZgzGnsyQg0j_5o9bi0jNIKLMzZz"
                />
                <img
                  alt="CloudVox logo"
                  className="h-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU-8oIaf2hsTe0ygJ4qxzxzrH5T2fOgBAswpFdJYOLOx95Hq2JeYm0ExNOhozWnh3vv3nK_TwvVEgrT0v6qDzyP02MU5908gkEjdD3RjQaTeAJST_ORJDEZ4KtZvsTKo5BQ7dBqpSlEpMJx1wCI3cUHqo7ZKsk8S90qfaK8L5Bo_KxQAaqXm-MywCQOE9AtYTNo6yheDZ7YcoajdDBazpBsKukvSJuY9KetOeF_nafPkppVtXEvYzVCQeKJ92C5aqkj1mLqkZn2QTe"
                />
              </div>
            </div>
          </div>

          <div className="relative flex h-[600px] items-center justify-center lg:h-[700px]">
            <div className="absolute left-[5%] top-[10%] w-[80%] -rotate-3 rounded-2xl border border-outline-variant/10 bg-surface-container-lowest/80 p-6 shadow-[0_32px_64px_-16px_rgba(26,28,25,0.08)] backdrop-blur-2xl transition-transform duration-700 hover:rotate-0">
              <div className="mb-6 flex items-center gap-3">
                <div className="primary-cta-gradient flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-[16px] text-white">smart_toy</span>
                </div>
                <span className="text-sm font-bold">Voxora AI Assistant</span>
              </div>
              <div className="space-y-4">
                <div className="w-3/4 rounded-xl rounded-tl-none bg-surface-container-low p-3">
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    Customer: Hi, where is my order? It still says processing.
                  </p>
                </div>
                <div className="ml-auto w-2/3 rounded-xl rounded-tr-none bg-primary/10 p-3">
                  <p className="text-xs font-medium leading-relaxed text-primary">
                    AI suggestion: I checked it for you — your order ships today.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-[0%] top-[35%] z-10 w-[75%] rotate-2 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/90 p-8 shadow-[0_48px_96px_-24px_rgba(26,28,25,0.12)] backdrop-blur-2xl transition-transform duration-700 hover:rotate-0">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">account_tree</span>
                  <span className="text-sm font-bold">Support Chat Flow</span>
                </div>
                <div className="rounded px-2 py-1 text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10">
                  Live
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container">
                    <span className="material-symbols-outlined text-on-surface-variant">input</span>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant">Customer</span>
                </div>

                <div className="mx-2 h-[1px] flex-1 bg-gradient-to-r from-outline-variant/30 via-primary to-outline-variant/30" />

                <div className="flex flex-col items-center gap-2">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white">memory</span>
                    <div className="absolute inset-0 rounded-2xl animate-pulse bg-white/20" />
                  </div>
                  <span className="text-[10px] font-bold text-primary">AI Help</span>
                </div>

                <div className="mx-2 h-[1px] flex-1 bg-outline-variant/30" />

                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container">
                    <span className="material-symbols-outlined text-on-surface-variant">output</span>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant">Reply</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[10%] left-[10%] z-20 w-[60%] -rotate-1 rounded-2xl border border-white/5 bg-on-background/95 p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-transform duration-700 hover:rotate-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    First Reply
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">42s</span>
                    <span className="mb-1 text-[10px] font-bold text-primary">faster</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    AI Assist
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">68%</span>
                    <div className="mb-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,107,74,0.8)]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex h-8 items-end gap-1">
                <div className="h-[40%] flex-1 rounded-sm bg-primary/20" />
                <div className="h-[60%] flex-1 rounded-sm bg-primary/40" />
                <div className="h-[50%] flex-1 rounded-sm bg-primary/60" />
                <div className="h-[90%] flex-1 rounded-sm bg-primary" />
                <div className="h-[70%] flex-1 rounded-sm bg-primary/70" />
                <div className="h-[40%] flex-1 rounded-sm bg-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
