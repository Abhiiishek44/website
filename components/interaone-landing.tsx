"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { InteraOneLogo } from "@/components/interaone-logo";
import { InteraOneNavbar } from "@/components/interaone-navbar";

const FadeIn = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
  >
    {children}
  </motion.div>
);

const trustedLogos = [
  { name: "Slack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/3FCF8E" },
];

const integrationNodes = [
  {
    name: "Google Cloud",
    src: "/logos/googleCloud.png",
  },
  {
    name: "Docker",
    src: "/logos/Docker.png",
  },
  {
    name: "AWS",
    src: "/logos/aws.webp",
  },
  {
    name: "Railway",
    src: "/logos/Railway.png",
  },
  {
    name: "Hostinger",
    src: "/logos/hostinger.png",
  },
  {
    name: "DigitalOcean",
    src: "/logos/DOCN.png",
  },
];

const heroBadgeMessages = [
  "Autonomous Intelligence v2.0",
  "MCP-ready integrations",
  "Parallel agent execution",
  "Context-aware automation",
];

export function InteraOneLanding() {
  const [badgeMessageIndex, setBadgeMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBadgeMessageIndex((index) => (index + 1) % heroBadgeMessages.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <InteraOneNavbar active="/" />

      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-24">
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <FadeIn delay={0.05}>
              <div className="hero-badge-gleam mb-8 inline-flex items-center gap-3 rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant">
                <span aria-hidden className="hero-badge-star hero-badge-star-one" />
                <span aria-hidden className="hero-badge-star hero-badge-star-two" />
                <InteraOneLogo
                  className="logo-wipe-badge inline-flex shrink-0"
                  width={24}
                />
                <span className="h-4 w-px bg-on-primary-fixed-variant/20" />
                <span className="relative inline-flex w-[17.5rem] max-w-[calc(100vw-8rem)] justify-start overflow-hidden text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      className="block"
                      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      key={heroBadgeMessages[badgeMessageIndex]}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      {heroBadgeMessages[badgeMessageIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="mx-auto mb-8 max-w-4xl text-6xl font-extrabold leading-[1.1] text-on-surface md:text-7xl">
                Built to make you <span className="text-primary italic">extraordinarily</span> productive
              </h1>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mx-auto mb-12 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
                A deep-work environment where autonomous AI agents handle the mechanical tasks with surgical precision,
                allowing you to inhabit the flow state.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="gradient-primary rounded-xl px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Get started for Free
                </button>
                <button className="rounded-xl bg-surface-container-high px-8 py-4 text-lg font-bold text-on-surface transition-all hover:bg-surface-container-highest">
                  Self host
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-full w-full -translate-x-1/2 blur-[120px] opacity-40">
            <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20" />
            <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-tertiary/10" />
          </div>
        </section>

        <section className="px-6 py-12">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="atmos-shadow overflow-hidden rounded-[2rem] bg-surface-container-low p-3 md:p-4">
              <div className="relative overflow-hidden rounded-3xl border border-outline-variant/15 bg-surface-container-lowest">
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tr from-primary/35 to-transparent mix-blend-overlay" />
                <img
                  alt="interaOne dashboard walkthrough"
                  className="relative z-0 h-auto w-full object-contain object-center"
                  src="/demo-interaone.gif"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="bg-surface py-20">
          <div className="px-6 text-center">
            <FadeIn>
              <p className="mb-12 font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                TRUSTED BY TEAMS AT THE FOREFRONT OF TECHNOLOGY
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                {trustedLogos.map((logo) => (
                  <div className="flex h-16 w-36 items-center justify-center px-3" key={logo.name}>
                    <img
                      alt={logo.name}
                      className="max-h-9 w-auto max-w-full object-contain"
                      src={logo.src}
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 md:grid-cols-2">
            <FadeIn className="order-2 md:order-1">
              <div className="atmos-shadow relative aspect-square overflow-hidden rounded-[3rem] bg-surface-container-high">
                <img
                  alt="Precision Agents"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaDGyqxUcfFd-0sjSIQL9aDkxFQCIBPnQp59ZhHvBIxsSZlDs4AIYtfDWlIWxrkokY_O_sUw5Qn9V1FyOovt5a0aKxLhWKCVSFhrQr_0KxgttePX96cqvYEwmNc5Lqk0r4o7edElgJ8eP6vdf1937GAKHFszLtUiXW3EQk6exOHyhVs1CFYdBYCrg0eLTLRuOfQw6pOD8HdphonfkPgzvRaCb2GwgUwm3lXLm8ahoXddXjq9xzgHWCDCZumQL_Z0ANIdcOk9CY2nw8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="order-1 md:order-2">
              <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">Precision-built agents</h2>
              <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                Our agents aren&apos;t just wrappers for LLMs. They are natively integrated into your local context,
                understanding the semantic architecture of your entire codebase before typing a single character.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    visibility
                  </span>
                  <div>
                    <h4 className="text-lg font-bold">Context-Awareness</h4>
                    <p className="text-sm text-on-surface-variant">Real-time indexing of project structures and dependencies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_fix_high
                  </span>
                  <div>
                    <h4 className="text-lg font-bold">Predictive Action</h4>
                    <p className="text-sm text-on-surface-variant">Anticipates your next intent to pre-generate suggestions.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start gap-16 md:flex-row">
              <FadeIn className="w-full md:w-1/2">
                <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">Parallel execution</h2>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  Stop waiting for refactors. interaOne spawns sandboxed background environments to perform security
                  audits, dependency updates, and complex refactors while you stay in the zone.
                </p>
              </FadeIn>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-1/2">
                <FadeIn delay={0.05} className="atmos-shadow rounded-2xl bg-surface-container-lowest p-8">
                  <span
                    className="material-symbols-outlined mb-4 text-3xl text-success"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield_with_heart
                  </span>
                  <h4 className="mb-2 text-xl font-bold">Security Audits</h4>
                  <p className="text-sm text-on-surface-variant">Continuous background scanning for vulnerabilities.</p>
                </FadeIn>
                <FadeIn delay={0.1} className="atmos-shadow rounded-2xl bg-surface-container-lowest p-8">
                  <span
                    className="material-symbols-outlined mb-4 text-3xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    dynamic_feed
                  </span>
                  <h4 className="mb-2 text-xl font-bold">Refactor Pools</h4>
                  <p className="text-sm text-on-surface-variant">Execute large-scale transformations in the background.</p>
                </FadeIn>
                <FadeIn delay={0.15} className="atmos-shadow rounded-2xl bg-surface-container-lowest p-8">
                  <span
                    className="material-symbols-outlined mb-4 text-3xl text-warning"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    history_edu
                  </span>
                  <h4 className="mb-2 text-xl font-bold">State Recovery</h4>
                  <p className="text-sm text-on-surface-variant">Zero-loss environment snapshots for every execution.</p>
                </FadeIn>
                <FadeIn delay={0.2} className="atmos-shadow rounded-2xl bg-surface-container-lowest p-8">
                  <span
                    className="material-symbols-outlined mb-4 text-3xl text-on-secondary-fixed-variant"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    memory
                  </span>
                  <h4 className="mb-2 text-xl font-bold">Auto-Scaling</h4>
                  <p className="text-sm text-on-surface-variant">Compute resources adjust to task complexity.</p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <div className="mb-32 text-center">
                <h2 className="mb-6 text-4xl font-extrabold text-on-surface md:text-5xl">Integrated Features</h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                  Seamless capabilities to keep your teams connected and productive.
                </p>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-24 md:gap-32">
              <FadeIn className="group relative flex w-full flex-col md:block md:h-[500px]">
                <div className="atmos-shadow relative w-full aspect-square overflow-hidden rounded-xl sm:aspect-video md:absolute md:inset-y-0 md:left-0 md:w-[75%] md:aspect-auto">
                  <img src="/conversation.jpeg" alt="Smart Conversations" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="atmos-shadow relative z-10 mx-6 -mt-16 w-auto rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest/80 p-8 shadow-2xl backdrop-blur-2xl md:absolute md:left-[60%] md:top-1/2 md:mx-0 md:mt-0 md:w-[40%] md:-translate-y-1/2 md:p-12">
                  <h3 className="mb-4 text-3xl font-extrabold text-on-surface">Smart Conversations</h3>
                  <p className="text-lg leading-relaxed text-on-surface-variant">
                    Keep your chats organized and context-aware, enabling your team to focus on meaningful work without distractions.
                  </p>
                  <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                      <div>
                        <h4 className="text-base font-bold text-on-surface">Threaded Context</h4>
                        <p className="text-sm text-on-surface-variant">Deeply nested threads ensure complete history.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
                      <div>
                        <h4 className="text-base font-bold text-on-surface">Noise Reduction</h4>
                        <p className="text-sm text-on-surface-variant">AI automatically filters out the noise.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.05} className="group relative flex w-full flex-col md:block md:h-[500px]">
                <div className="atmos-shadow relative w-full aspect-square overflow-hidden rounded-xl sm:aspect-video md:absolute md:inset-y-0 md:right-0 md:w-[75%] md:aspect-auto">
                  <img src="/QrCodeGeneration.jpeg" alt="QR Code Generation" className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="atmos-shadow relative z-10 mx-6 -mt-16 w-auto rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest/80 p-8 shadow-2xl backdrop-blur-2xl md:absolute md:right-[60%] md:top-1/2 md:mx-0 md:mt-0 md:w-[40%] md:-translate-y-1/2 md:p-12">
                  <h3 className="mb-4 text-3xl font-extrabold text-on-surface">QR Generation</h3>
                  <p className="text-lg leading-relaxed text-on-surface-variant">
                    Instantly create and share branded QR codes to bridge the gap between offline interactions and digital workflows.
                  </p>
                  <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
                      <div>
                        <h4 className="text-base font-bold text-on-surface">Dynamic Targeting</h4>
                        <p className="text-sm text-on-surface-variant">Update destination URLs without regenerating.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                      <div>
                        <h4 className="text-base font-bold text-on-surface">Custom Branding</h4>
                        <p className="text-sm text-on-surface-variant">Embed logos and brand colors on the fly.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.1} className="group relative flex w-full flex-col md:block md:h-[500px]">
                <div className="atmos-shadow relative w-full aspect-square overflow-hidden rounded-xl sm:aspect-video md:absolute md:inset-y-0 md:left-0 md:w-[75%] md:aspect-auto">
                  <img src="/teams.jpeg" alt="Team Workspaces" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="atmos-shadow relative z-10 mx-6 -mt-16 w-auto rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest/80 p-8 shadow-2xl backdrop-blur-2xl md:absolute md:left-[60%] md:top-1/2 md:mx-0 md:mt-0 md:w-[40%] md:-translate-y-1/2 md:p-12">
                  <h3 className="mb-4 text-3xl font-extrabold text-on-surface">Team Workspaces</h3>
                  <p className="text-lg leading-relaxed text-on-surface-variant">
                    Collaborate effortlessly across versatile workspaces designed strictly for agile software engineering teams.
                  </p>
                  <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                      <div>
                        <h4 className="text-base font-bold text-on-surface">Unified Sync</h4>
                        <p className="text-sm text-on-surface-variant">Share variables and env configs seamlessly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                      <div>
                        <h4 className="text-base font-bold text-on-surface">Role Isolation</h4>
                        <p className="text-sm text-on-surface-variant">Strict bounds for different workspace access.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="mcp-grid-bg relative overflow-hidden border-y border-outline-variant/15 px-6 py-32">
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <FadeIn>
              <h2 className="mb-4 text-4xl font-extrabold text-on-surface md:text-5xl">Seamless Integrations & MCP</h2>
              <p className="mx-auto mb-20 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Connect InteraOne natively to the tools and platforms your team already uses.
              </p>
            </FadeIn>
            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 overflow-hidden border-y border-outline-variant/20 py-12 md:grid-cols-[1fr_260px_1fr] md:gap-12">
              <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-outline-variant/40 md:block" />
              <div className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-outline-variant/30 md:block" />

              <div className="grid gap-5">
                {integrationNodes.slice(0, 3).map((node) => (
                  <FadeIn className="relative z-10 flex items-center justify-between border-b border-outline-variant/20 py-4 text-left" key={node.name}>
                    <span className="font-label text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                      {node.name}
                    </span>
                    <img alt={node.name} className="max-h-8 w-auto max-w-[8rem] object-contain" src={node.src} />
                  </FadeIn>
                ))}
              </div>

              <FadeIn className="relative z-10 mx-auto flex w-full max-w-[260px] flex-col items-center justify-center border-y border-outline-variant/30 py-8 md:border-x md:border-y-0 md:px-8 md:py-14">
                <span className="mb-5 font-label text-xs font-bold uppercase tracking-[0.28em] text-on-surface-variant">
                  MCP Control Plane
                </span>
                <InteraOneLogo width={64} className="mb-4 inline-flex" />
                <p className="max-w-[13rem] text-center text-sm leading-relaxed text-on-surface-variant">
                  Governed access, context routing, and tool execution from one secure layer.
                </p>
              </FadeIn>

              <div className="grid gap-5">
                {integrationNodes.slice(3).map((node) => (
                  <FadeIn className="relative z-10 flex items-center justify-between border-b border-outline-variant/20 py-4 text-left" key={node.name}>
                    <img alt={node.name} className="max-h-8 w-auto max-w-[8rem] object-contain" src={node.src} />
                    <span className="font-label text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                      {node.name}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold">Recent Updates</h2>
                  <p className="text-on-surface-variant">The latest from our engineering floor.</p>
                </div>
                <a className="flex items-center gap-1 font-bold text-primary hover:underline" href="#">
                  View Changelog <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </FadeIn>
            <div className="space-y-1">
              <FadeIn delay={0.05} className="group flex cursor-pointer items-center justify-between rounded-2xl p-6 transition-all hover:bg-surface-container-low">
                <div className="flex items-center gap-6">
                  <span className="w-24 text-xs font-bold text-on-surface-variant/50">OCT 24</span>
                  <h4 className="font-bold transition-colors group-hover:text-primary">Multi-model reasoning bridge</h4>
                </div>
                <span className="material-symbols-outlined opacity-0 transition-opacity group-hover:opacity-100">north_east</span>
              </FadeIn>
              <FadeIn delay={0.1} className="group flex cursor-pointer items-center justify-between rounded-2xl p-6 transition-all hover:bg-surface-container-low">
                <div className="flex items-center gap-6">
                  <span className="w-24 text-xs font-bold text-on-surface-variant/50">OCT 12</span>
                  <h4 className="font-bold transition-colors group-hover:text-primary">Local context window expansion (1M tokens)</h4>
                </div>
                <span className="material-symbols-outlined opacity-0 transition-opacity group-hover:opacity-100">north_east</span>
              </FadeIn>
              <FadeIn delay={0.15} className="group flex cursor-pointer items-center justify-between rounded-2xl p-6 transition-all hover:bg-surface-container-low">
                <div className="flex items-center gap-6">
                  <span className="w-24 text-xs font-bold text-on-surface-variant/50">SEP 28</span>
                  <h4 className="font-bold transition-colors group-hover:text-primary">Neural-symbolic execution engine v0.8</h4>
                </div>
                <span className="material-symbols-outlined opacity-0 transition-opacity group-hover:opacity-100">north_east</span>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <FadeIn className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-outline-variant/15 bg-surface-container-lowest p-16 text-center text-on-surface shadow-2xl shadow-primary/5 md:p-24">
            <div className="relative z-10">
              <h2 className="mb-8 font-headline text-5xl font-extrabold text-on-surface md:text-6xl">Try interaOne now</h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-on-surface-variant md:text-xl">
                Experience the precision of autonomous deep-work. Free for individual engineers, powerful for elite
                teams.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <button className="gradient-primary rounded-xl px-10 py-4 text-lg font-bold text-on-primary shadow-xl shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]">
                  Get Started for Free
                </button>
                <button className="rounded-xl border border-outline-variant/40 px-10 py-4 text-lg font-bold text-on-surface transition-all hover:bg-surface-container-low">
                  Schedule a Demo
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -right-1/4 -top-1/2 h-full w-full rounded-full bg-primary/10 blur-[150px]" />
              <div className="absolute -bottom-1/2 -left-1/4 h-full w-full rounded-full bg-tertiary/10 blur-[150px]" />
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="relative w-full overflow-hidden bg-inverse-surface px-12 py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-4 select-none text-center font-headline text-[18vw] font-extrabold leading-none tracking-tight text-inverse-on-surface/[0.035]"
        >
          InteraOne
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-t border-primary/10 pt-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <InteraOneLogo
              showBackgroundColor={false}
              className="mb-8 inline-flex"
              href="/"
              tone="light"
              width={52}
            />
            <p className="max-w-[240px] text-sm leading-relaxed text-inverse-on-surface/60">
              The autonomous deep-work environment for the next generation of software engineering.
            </p>
          </div>
          <div>
            <h5 className="mb-8 font-label text-xs uppercase tracking-widest text-inverse-on-surface/60">Product</h5>
            <ul className="space-y-4">
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Download
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Changelog
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  System Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-8 font-label text-xs uppercase tracking-widest text-inverse-on-surface/60">Developers</h5>
            <ul className="space-y-4">
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  API Reference
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Open Source
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-8 font-label text-xs uppercase tracking-widest text-inverse-on-surface/60">Company</h5>
            <ul className="space-y-4">
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-sm text-inverse-on-surface/60 transition-colors hover:text-primary-fixed" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-20 flex max-w-[1440px] flex-col items-center justify-between gap-6 border-t border-inverse-on-surface/10 pt-8 md:flex-row">
          <p className="font-label text-xs uppercase tracking-widest text-inverse-on-surface/60">
            © 2024 interaOne. Engineered for Atmospheric Precision.
          </p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined cursor-pointer text-inverse-on-surface/40 transition-colors hover:text-primary">
              language
            </span>
            <span className="material-symbols-outlined cursor-pointer text-inverse-on-surface/40 transition-colors hover:text-primary">
              terminal
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
