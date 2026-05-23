import Link from "next/link";
import Image from "next/image";
import { InteraOneLogo } from "@/components/interaone-logo";
import { InteraOneNavbar } from "@/components/interaone-navbar";

const iconFill = { fontVariationSettings: "'FILL' 1" };

export default function EnterprisePage() {
  return (
    <>
      <InteraOneNavbar active="/enterprise" />

  <main className="enterprise-editorial bg-background text-on-background font-body antialiased">
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-32 pt-24 md:px-12">
          <div className="grid-texture pointer-events-none absolute inset-0 z-0 opacity-30" />
          <div className="relative z-10 flex max-w-4xl flex-col items-start">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-secondary-container px-3 py-1.5 font-label text-xs font-semibold uppercase tracking-wider text-on-secondary-container shadow-[0_10px_20px_rgba(107,58,74,0.04)]">
              <span className="material-symbols-outlined text-[16px]" style={iconFill}>
                verified
              </span>
              <span className="h-3 w-px bg-on-secondary-container/30" />
              <span>Enterprise-grade agentic infrastructure</span>
            </div>
            <h1 className="mb-6 font-headline text-5xl font-bold leading-tight tracking-tight text-on-background md:text-7xl">
              Built for teams that demand <span className="font-medium italic text-primary-container">extraordinary</span> control
            </h1>
            <p className="mb-10 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Deploy InteraOne inside your own infrastructure with full control over agentic runtimes, real-time data streams, security policies, and audit trails.
            </p>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link className="flex items-center justify-center gap-2 rounded-lg bg-primary-container px-8 py-3.5 font-label text-base font-medium text-on-primary shadow-[0_10px_20px_rgba(107,58,74,0.15)] transition-colors hover:bg-primary" href="mailto:sales@interaone.com">
                Talk to Sales
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant/50 bg-transparent px-8 py-3.5 font-label text-base font-medium text-primary transition-colors hover:bg-surface-container-low" href="/developers">
                View Docs
                <span className="material-symbols-outlined text-sm">menu_book</span>
              </Link>
            </div>
          </div>

          <div className="absolute right-0 top-10 z-0 hidden h-full w-1/3 lg:block">
            <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-surface-container-highest opacity-50 blur-3xl mix-blend-multiply" />
            <div className="absolute right-32 top-40 h-48 w-48 rounded-full bg-primary-container opacity-10 blur-3xl mix-blend-multiply" />
          </div>
        </section>

        <section className="relative bg-surface-container-low px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="mb-6 font-headline text-4xl font-bold leading-tight text-on-background md:text-5xl">
                Open-source.
                <br />
                Agentic.
                <br />
                Manageable.
              </h2>
              <div className="mb-6 h-px w-10 bg-surface-variant" />
              <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                Critical automation infrastructure should never be a black box. InteraOne Enterprise gives teams the tooling to orchestrate agentic workflows while keeping observability, auditability, and compliance visible at every layer.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
              <article className="rounded-2xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(107,58,74,0.04)] transition-shadow hover:shadow-[0_20px_40px_rgba(107,58,74,0.08)]">
                <span className="material-symbols-outlined mb-4 text-3xl text-primary-container" style={iconFill}>
                  code
                </span>
                <h3 className="mb-2 font-headline text-xl font-semibold text-on-background">Open Source</h3>
                <p className="font-body text-sm text-on-surface-variant">Inspect, audit, and adapt the platform runtime for your organization.</p>
              </article>
              <article className="rounded-2xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(107,58,74,0.04)] transition-shadow hover:shadow-[0_20px_40px_rgba(107,58,74,0.08)] sm:-translate-y-4">
                <span className="material-symbols-outlined mb-4 text-3xl text-primary-container" style={iconFill}>
                  smart_toy
                </span>
                <h3 className="mb-2 font-headline text-xl font-semibold text-on-background">Agentic Runtime</h3>
                <p className="font-body text-sm text-on-surface-variant">Run autonomous agents with deterministic state and governed execution.</p>
              </article>
              <article className="rounded-2xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(107,58,74,0.04)] transition-shadow hover:shadow-[0_20px_40px_rgba(107,58,74,0.08)]">
                <span className="material-symbols-outlined mb-4 text-3xl text-primary-container" style={iconFill}>
                  bolt
                </span>
                <h3 className="mb-2 font-headline text-xl font-semibold text-on-background">Real-Time Infra</h3>
                <p className="font-body text-sm text-on-surface-variant">Power low-latency event streams over a robust WebSocket layer.</p>
              </article>
              <article className="rounded-2xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(107,58,74,0.04)] transition-shadow hover:shadow-[0_20px_40px_rgba(107,58,74,0.08)] sm:-translate-y-4">
                <span className="material-symbols-outlined mb-4 text-3xl text-primary-container" style={iconFill}>
                  fact_check
                </span>
                <h3 className="mb-2 font-headline text-xl font-semibold text-on-background">Full Auditability</h3>
                <p className="font-body text-sm text-on-surface-variant">Trace every agent action, state mutation, and approval event.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background px-6 py-32 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-outline/20 bg-on-secondary-fixed shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-inverse-surface/80 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <Image
                  alt="InteraOne enterprise dashboard"
                  className="aspect-[4/3] h-auto w-full object-cover opacity-90 mix-blend-luminosity"
                  height={960}
                  src="/dashboard.jpeg"
                  width={1280}
                />
              </div>
            </div>

            <div className="relative z-20 lg:col-span-5 lg:-ml-16">
              <div className="rounded-3xl border border-surface-variant/50 bg-surface-container-lowest/90 p-10 shadow-[0_20px_40px_rgba(107,58,74,0.08)] backdrop-blur-xl">
                <div className="mb-8 h-1 w-12 bg-primary-container" />
                <h2 className="mb-8 font-headline text-3xl font-bold text-on-background">Enterprise Security</h2>
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 rounded-xl bg-surface-container-low p-3">
                      <span className="material-symbols-outlined text-primary-container" style={iconFill}>
                        shield
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-headline text-lg font-semibold text-on-background">Multi-Tenant Isolation</h4>
                      <p className="font-body text-sm leading-relaxed text-on-surface-variant">Logical and physical data separation keeps teams, workspaces, and agent runtimes isolated.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 rounded-xl bg-surface-container-low p-3">
                      <span className="material-symbols-outlined text-primary-container" style={iconFill}>
                        lock
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-headline text-lg font-semibold text-on-background">Zero-Trust Architecture</h4>
                      <p className="font-body text-sm leading-relaxed text-on-surface-variant">Continuous verification, granular RBAC, audit logs, encryption, and SOC 2-ready workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-surface-container-low px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex flex-col lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_10px_20px_rgba(107,58,74,0.02)]">
                  <span className="material-symbols-outlined mb-3 text-2xl text-secondary">moving</span>
                  <div className="font-headline text-2xl font-bold text-on-background">Auto-Scaling</div>
                  <div className="mt-1 font-body text-xs uppercase tracking-wider text-on-surface-variant">Dynamic provisioning</div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_10px_20px_rgba(107,58,74,0.02)] sm:-translate-y-4">
                  <span className="material-symbols-outlined mb-3 text-2xl text-secondary">data_usage</span>
                  <div className="font-headline text-2xl font-bold text-on-background">10M+</div>
                  <div className="mt-1 font-body text-xs uppercase tracking-wider text-on-surface-variant">Events/Day</div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_10px_20px_rgba(107,58,74,0.02)]">
                  <span className="material-symbols-outlined mb-3 text-2xl text-secondary">verified</span>
                  <div className="font-headline text-2xl font-bold text-on-background">99.99%</div>
                  <div className="mt-1 font-body text-xs uppercase tracking-wider text-on-surface-variant">Uptime SLA</div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_10px_20px_rgba(107,58,74,0.02)] sm:-translate-y-4">
                  <span className="material-symbols-outlined mb-3 text-2xl text-secondary">speed</span>
                  <div className="font-headline text-2xl font-bold text-on-background">&lt;50ms</div>
                  <div className="mt-1 font-body text-xs uppercase tracking-wider text-on-surface-variant">Global latency</div>
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col lg:order-2 lg:pl-12">
              <h2 className="mb-6 font-headline text-4xl font-bold leading-tight text-on-background md:text-5xl">Scales with your team</h2>
              <div className="mb-6 h-px w-10 bg-surface-variant" />
              <p className="mb-8 font-body text-lg leading-relaxed text-on-surface-variant">
                InteraOne&apos;s distributed architecture handles massive concurrency without degrading performance. Queue management, horizontal pod scaling, and multi-region support keep agent work responsive during burst traffic.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background px-6 py-32 md:px-12">
          <div className="grid-texture pointer-events-none absolute inset-0 z-0 opacity-40" />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
            <h2 className="mb-16 text-center font-headline text-4xl font-bold text-on-background md:text-5xl">Modular by design</h2>
            <div className="relative mx-auto flex aspect-[4/3] w-full max-w-4xl items-center justify-center sm:aspect-[2/1]">
              <div className="absolute z-20 flex flex-col items-center rounded-2xl border border-white/10 bg-primary-container px-8 py-6 text-center text-on-primary shadow-[0_20px_40px_rgba(107,58,74,0.2)]">
                <span className="material-symbols-outlined mb-2 text-3xl" style={iconFill}>
                  hub
                </span>
                <span className="font-headline text-xl font-bold">Event-Driven Core</span>
              </div>
              <div className="absolute left-0 top-0 z-10 flex w-40 flex-col items-center rounded-xl border border-surface-variant bg-surface-container-lowest px-6 py-4 text-center shadow-[0_10px_20px_rgba(107,58,74,0.05)] sm:left-[10%]">
                <span className="material-symbols-outlined mb-1 text-secondary">wifi_tethering</span>
                <span className="font-label text-sm font-semibold text-on-surface">WebSocket Layer</span>
              </div>
              <div className="absolute right-0 top-0 z-10 flex w-40 flex-col items-center rounded-xl border border-surface-variant bg-surface-container-lowest px-6 py-4 text-center shadow-[0_10px_20px_rgba(107,58,74,0.05)] sm:right-[10%]">
                <span className="material-symbols-outlined mb-1 text-secondary">smart_toy</span>
                <span className="font-label text-sm font-semibold text-on-surface">Agent Runtime</span>
              </div>
              <div className="absolute bottom-0 left-0 z-10 flex w-40 flex-col items-center rounded-xl border border-surface-variant bg-surface-container-lowest px-6 py-4 text-center shadow-[0_10px_20px_rgba(107,58,74,0.05)] sm:left-[10%]">
                <span className="material-symbols-outlined mb-1 text-secondary">api</span>
                <span className="font-label text-sm font-semibold text-on-surface">REST + gRPC APIs</span>
              </div>
              <div className="absolute bottom-0 right-0 z-10 flex w-40 flex-col items-center rounded-xl border border-surface-variant bg-surface-container-lowest px-6 py-4 text-center shadow-[0_10px_20px_rgba(107,58,74,0.05)] sm:right-[10%]">
                <span className="material-symbols-outlined mb-1 text-secondary">extension</span>
                <span className="font-label text-sm font-semibold text-on-surface">Plugin System</span>
              </div>
              <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" preserveAspectRatio="none">
                <line className="opacity-50" stroke="#d5c2c6" strokeDasharray="4 4" strokeWidth="2" x1="20%" x2="50%" y1="20%" y2="50%" />
                <line className="opacity-50" stroke="#d5c2c6" strokeDasharray="4 4" strokeWidth="2" x1="80%" x2="50%" y1="20%" y2="50%" />
                <line className="opacity-50" stroke="#d5c2c6" strokeDasharray="4 4" strokeWidth="2" x1="20%" x2="50%" y1="80%" y2="50%" />
                <line className="opacity-50" stroke="#d5c2c6" strokeDasharray="4 4" strokeWidth="2" x1="80%" x2="50%" y1="80%" y2="50%" />
              </svg>
            </div>
          </div>
        </section>

        <section className="relative border-t border-surface-variant/50 bg-surface-container-low px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="mb-6 font-headline text-4xl font-bold leading-tight text-on-background md:text-5xl">Self-host in seconds</h2>
              <div className="mb-6 h-px w-10 bg-surface-variant" />
              <p className="mb-8 font-body text-lg leading-relaxed text-on-surface-variant">
                Deploy with Docker images, Kubernetes Helm charts, or a local enterprise instance. InteraOne fits cleanly into existing CI/CD pipelines and supports air-gapped deployment patterns.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="rounded-md border border-outline-variant/30 bg-surface-container-lowest px-3 py-1.5 font-label text-xs font-semibold text-on-surface shadow-sm">Docker</span>
                <span className="rounded-md border border-outline-variant/30 bg-surface-container-lowest px-3 py-1.5 font-label text-xs font-semibold text-on-surface shadow-sm">Kubernetes</span>
                <span className="rounded-md border border-outline-variant/30 bg-surface-container-lowest px-3 py-1.5 font-label text-xs font-semibold text-on-surface shadow-sm">Helm</span>
                <span className="rounded-md border border-outline-variant/30 bg-surface-container-lowest px-3 py-1.5 font-label text-xs font-semibold text-on-surface shadow-sm">Air-gapped</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-outline/20 bg-on-secondary-fixed shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/5 bg-inverse-surface/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-4 font-mono text-xs text-white/40">bash — interaone</span>
              </div>
              <div className="overflow-x-auto p-6 font-mono text-sm text-white/80">
                <div className="mb-2 flex">
                  <span className="mr-2 text-primary-fixed">$</span>
                  <span className="text-white">npx interaone start --enterprise</span>
                </div>
                <div className="mb-1 text-white/50">Downloading core dependencies...</div>
                <div className="mb-1 text-tertiary-fixed-dim">✓ Environment validated</div>
                <div className="mb-1 text-tertiary-fixed-dim">✓ Enterprise license verified</div>
                <div className="mb-4 text-tertiary-fixed-dim">✓ Agentic runtime initialized on port 3000</div>
                <div className="text-white">
                  InteraOne Enterprise ready at{" "}
                  <a className="text-primary-fixed underline transition-colors hover:text-white" href="http://localhost:3000">
                    http://localhost:3000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-background px-6 py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest p-12 text-center shadow-[0_20px_40px_rgba(107,58,74,0.06)] md:p-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-container/5 blur-3xl" />
              <h2 className="relative z-10 mb-6 font-headline text-3xl font-bold text-on-background md:text-5xl">Ready to scale InteraOne across your org?</h2>
              <p className="relative z-10 mb-10 max-w-2xl font-body text-lg text-on-surface-variant">
                Talk to our team and get a custom deployment plan for secure, open-source agentic infrastructure.
              </p>
              <div className="relative z-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Link className="w-full rounded-lg bg-primary-container px-8 py-4 font-label text-base font-semibold text-on-primary shadow-[0_10px_20px_rgba(107,58,74,0.15)] transition-colors hover:bg-primary sm:w-auto" href="/signin">
                  Get Started
                </Link>
                <Link className="w-full rounded-lg border border-outline-variant/50 bg-transparent px-8 py-4 font-label text-base font-semibold text-primary transition-colors hover:bg-surface-container-low sm:w-auto" href="mailto:sales@interaone.com">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative w-full overflow-hidden bg-[#342936] px-12 py-16 dark:bg-[#221824]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-4 select-none text-center font-headline text-[18vw] font-extrabold leading-none tracking-tight text-white/[0.035]"
        >
          InteraOne
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-t border-[#845c6c]/10 pt-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <InteraOneLogo
              className="mb-6 inline-flex"
              height={14}
              imageClassName="brightness-0 invert"
              href="/"
              tone="dark"
              width={50}
            />
            <p className="text-sm leading-relaxed text-white/40">
              The autonomous deep-work environment for the next generation of software engineering.
            </p>
          </div>
          <div>
            <h5 className="mb-8 font-label text-xs uppercase tracking-widest text-white/60">Product</h5>
            <ul className="space-y-4">
              <li>
                <Link className="text-sm text-white/40 transition-colors hover:text-white" href="/">
                  Download
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/40 transition-colors hover:text-white" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <a className="text-sm text-white/40 transition-colors hover:text-white" href="#">
                  Changelog
                </a>
              </li>
              <li>
                <a className="text-sm text-white/40 transition-colors hover:text-white" href="#">
                  System Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-8 font-label text-xs uppercase tracking-widest text-white/60">Developers</h5>
            <ul className="space-y-4">
              <li>
                <Link className="text-sm text-white/40 transition-colors hover:text-white" href="/developers">
                  Documentation
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/40 transition-colors hover:text-white" href="/protocol">
                  API Reference
                </Link>
              </li>
              <li>
                <a className="text-sm text-white/40 transition-colors hover:text-white" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="text-sm text-white/40 transition-colors hover:text-white" href="#">
                  Open Source
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-8 font-label text-xs uppercase tracking-widest text-white/60">Company</h5>
            <ul className="space-y-4">
              <li>
                <Link className="text-sm text-white/40 transition-colors hover:text-white" href="/solutions">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/40 transition-colors hover:text-white" href="/enterprise">
                  Security
                </Link>
              </li>
              <li>
                <a className="text-sm text-white/40 transition-colors hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-sm text-white/40 transition-colors hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-20 flex max-w-[1440px] flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-label text-xs uppercase tracking-widest text-white/60">
            © 2024 interaOne. Engineered for Atmospheric Precision.
          </p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined cursor-pointer text-white/40 transition-colors hover:text-[#845c6c]">
              language
            </span>
            <span className="material-symbols-outlined cursor-pointer text-white/40 transition-colors hover:text-[#845c6c]">
              terminal
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        .enterprise-editorial {
          min-height: max(884px, 100dvh);
        }

        .enterprise-editorial .grid-texture {
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </>
  );
}
