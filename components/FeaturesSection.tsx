"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpenText,
  Bot,
  Building2,
  ClipboardList,
  Code2,
  Github,
  Linkedin,
  MessageSquareText,
  Network,
  Rocket,
  Server,
  ServerCog,
  Twitter,
} from "lucide-react";

// ── Card sub-components ───────────────────────────────────────────────────────

type FeatureItem = { icon: LucideIcon; label: string };

type InboxRow = {
  id: number;
  initials: string;
  name: string;
  preview: string;
  status: string;
  statusClass: string;
};

function CardContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-[26px] border border-[#d8d8cc] bg-white/82 shadow-[0_24px_60px_rgba(20,20,16,0.08),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[10px]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 16%, rgba(18,185,129,0.12), transparent 38%), radial-gradient(circle at 82% 0%, rgba(18,185,129,0.08), transparent 33%), radial-gradient(circle at 50% 130%, rgba(18,185,129,0.06), transparent 48%)",
      }}
    >
      <div className="flex flex-col md:flex-row">{children}</div>
      <div className="pointer-events-none absolute -top-14 right-20 h-40 w-40 rounded-full bg-[#059669]/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-28 h-32 w-32 rounded-full bg-[#059669]/10 blur-3xl" />
    </div>
  );
}

function CardHeader({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h3 className="text-2xl font-semibold italic leading-tight tracking-tight text-[#161612] md:text-3xl">
        {title}
      </h3>
      {badge && (
        <span className="rounded-full border border-[#059669]/25 bg-[#059669]/10 px-2.5 py-1 text-[11px] font-medium text-[#047857]">
          {badge}
        </span>
      )}
    </div>
  );
}

function CardDescription({ text }: { text: string }) {
  return (
    <p className="text-sm leading-relaxed text-[#4b4b44] md:text-base">{text}</p>
  );
}

function CardActions({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 self-start rounded-xl border border-[#059669]/40 bg-[#059669] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#047857]"
    >
      <Rocket className="h-4 w-4" />
      {label}
    </a>
  );
}

function CardList({ items }: { items: FeatureItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center justify-between rounded-xl border border-[#d8d8cc] bg-[#f3f3ec] px-3 py-2.5"
        >
          <div className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 flex-shrink-0 text-[#047857]" />
            <span className="text-xs font-medium text-[#30302a]">{label}</span>
          </div>
          <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#9a9a91]" />
        </li>
      ))}
    </ul>
  );
}

function CardPreview({ rows }: { rows: InboxRow[] }) {
  return (
    <div className="relative flex-shrink-0 p-6 md:w-[40%] md:border-l md:border-[#d8d8cc]">
      {/* Floating tooltip */}
      <div className="absolute right-8 top-4 z-10 rounded-xl border border-[#059669]/30 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm">
        <p className="text-[11px] font-semibold text-[#047857]">AI Response</p>
        <p className="mt-0.5 text-[11px] text-[#5f5f56]">Streaming…</p>
      </div>
      {/* Mock window */}
      <div className="flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#20201b]/10 bg-[#181814]">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#1f1f1a] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-[11px] text-[#f8f8f2]/50">Agent Execution Queue</span>
        </div>
        {/* Content rows */}
        <div className="flex flex-col divide-y divide-white/5">
          {rows.map((row) => (
            <div key={row.id} className="flex items-center gap-3 px-4 py-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#059669]/20 text-[10px] font-semibold text-[#34d399]">
                {row.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-[#f8f8f2]/80">{row.name}</p>
                <p className="truncate text-[11px] text-[#f8f8f2]/40">{row.preview}</p>
              </div>
              <span
                className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] ${row.statusClass}`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
        {/* Bottom stat bar */}
        <div className="mt-auto border-t border-white/5 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <span className="text-[10px] text-[#f8f8f2]/35">
                <span className="font-semibold text-[#34d399]">3</span> resolved
              </span>
              <span className="text-[10px] text-[#f8f8f2]/35">
                <span className="font-semibold text-yellow-300">1</span> in-flight
              </span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-[#f8f8f2]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
              agent active
            </span>
          </div>
          <div className="mt-2 rounded-lg bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-[#f8f8f2]/40">
            <span className="text-[#34d399]">→</span> llm: intent=billing_escalation · 38ms · <span className="text-yellow-300/70">streaming…</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionInView, setSectionInView] = useState(false);

  // Reveal cards on scroll
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els || els.length === 0) return;

    let obs: IntersectionObserver;

    // Double-rAF ensures the browser has painted the hidden state before observing
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                el.style.transitionDelay = `${el.dataset.delay ?? "0"}ms`;
                el.classList.add("card-visible");
                obs.unobserve(el);
              }
            });
          },
          // rootMargin pushes trigger 80px above the bottom edge so cards
          // animate as they scroll into view, not when already visible
        { threshold: 0.12, rootMargin: "0px 0px -160px 0px" }
        );
        els.forEach((el) => obs.observe(el));
      });
      return raf2;
    });

    return () => {
      cancelAnimationFrame(raf1);
      obs?.disconnect();
    };
  }, []);

  // Toggle side blurs when section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const extraCards = [
    {
      title: "Ingress & Orchestration Layer",
      description:
        "Realtime agent sessions via Socket.IO, multi-inbox email pipeline, and QR-based entry points for session bootstrapping.",
      chips: ["Agent Sessions", "Email Pipeline", "QR Entry"],
      icon: MessageSquareText,
      size: "md:col-span-6",
      minHeight: "md:min-h-[250px]",
    },
    {
      title: "Knowledge System",
      description:
        "Static docs/FAQs + real-time database context, retrieved through RAG for grounded AI responses.",
      chips: ["Qdrant", "RAG", "Live Data Context"],
      icon: BookOpenText,
      size: "md:col-span-6",
      minHeight: "md:min-h-[250px]",
    },
    {
      title: "Workflow Orchestration",
      description:
        "Ticketing lifecycle, agent assignment logic, and automated workflow orchestration across multi-step resolution paths.",
      chips: ["Lifecycle Engine", "Assignment Logic", "Orchestration"],
      icon: ClipboardList,
      size: "md:col-span-6",
      minHeight: "md:min-h-[250px]",
    },
    {
      title: "Infrastructure Stack",
      description:
        "Node + Express API, Next.js app, BullMQ workers, MongoDB, Redis, Qdrant, MinIO, and Caddy.",
      chips: ["Node/Next", "BullMQ", "Mongo/Redis/Qdrant"],
      icon: Server,
      size: "md:col-span-12",
      minHeight: "md:min-h-[220px]",
    },
  ];

  const featureItems: FeatureItem[] = [
    { icon: Bot, label: "AI triage + intent routing" },
    { icon: MessageSquareText, label: "Realtime omnichannel ingress pipeline" },
    { icon: BookOpenText, label: "RAG knowledge retrieval" },
    { icon: Network, label: "Multi-tenant data isolation" },
    { icon: Server, label: "BullMQ async worker queue" },
  ];

  const inboxRows: InboxRow[] = [
    {
      id: 1,
      initials: "JD",
      name: "Jane Doe",
      preview: "Auto-route billing events to agent nodes?",
      status: "AI",
      statusClass: "bg-[#059669]/15 text-[#34d399]",
    },
    {
      id: 2,
      initials: "AM",
      name: "Alex M.",
      preview: "Agent tool call returning 403 on Safari",
      status: "Open",
      statusClass: "bg-blue-500/15 text-blue-300",
    },
    {
      id: 3,
      initials: "SR",
      name: "Sara R.",
      preview: "Configure event hooks for agent outcomes?",
      status: "Done",
      statusClass: "bg-white/10 text-[#f8f8f2]/40",
    },
    {
      id: 4,
      initials: "KL",
      name: "Kai L.",
      preview: "Scope agent roles across sub-tenants",
      status: "Open",
      statusClass: "bg-blue-500/15 text-blue-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-x-clip px-4 py-20 md:py-28"
      style={{ backgroundColor: "#F8F8F2" }}
    >
      {sectionInView && (
        <>
          <div className="side-blur-left" />
          <div className="side-blur-right" />
        </>
      )}
      <div className="pointer-events-none absolute inset-y-6 left-[-80px] w-56 bg-gradient-to-r from-[#059669]/34 via-[#059669]/16 to-transparent blur-[110px] md:w-80" />
      <div className="pointer-events-none absolute inset-y-6 right-[-80px] w-56 bg-gradient-to-l from-[#059669]/34 via-[#059669]/16 to-transparent blur-[110px] md:w-80" />
      <div className="pointer-events-none absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-[#059669]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-72 w-72 rounded-full bg-[#059669]/20 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:justify-between">
          <a
            href="https://www.voxora.cloud/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5"
          >
            {/* Custom wordmark */}
            <span className="flex items-baseline gap-0">
              <span
                className="text-[32px] font-black italic leading-none tracking-[-0.03em] text-[#047857]"
                style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif" }}
              >
                V
              </span>
              <span
                className="text-[20px] font-semibold italic leading-none tracking-[-0.01em] text-[#1a1a14]"
                style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif" }}
              >
                oxora
              </span>
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <a
              href="https://docs.voxora.cloud"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-white/85 px-4 py-2 text-sm font-medium text-[#161612] transition hover:border-[#b9b9ac]"
            >
              Docs
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-white/85 px-4 py-2 text-sm font-medium text-[#161612] transition hover:border-[#b9b9ac]"
            >
              Pricing
            </a>
            <a
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#059669]/40 bg-[#059669] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#047857]"
            >
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-white/85 px-4 py-2 text-sm font-medium text-[#161612] transition hover:border-[#b9b9ac]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://railway.app/template/voxora"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-white/85 px-4 py-2 text-sm font-medium text-[#161612] transition hover:border-[#059669]/45"
            >
              <ServerCog className="h-4 w-4" />
              One-click Self Host
            </a>
          </div>
        </div>

        <div className="mb-10 text-center md:mb-14">
          <p className="mb-4 text-xs font-medium tracking-[0.22em] text-[#5f5f56] uppercase">
            Voxora Platform
          </p>
          <h2 className="text-3xl font-semibold italic tracking-tight text-[#161612] md:text-5xl">
            Developer-first AI infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#4b4b44] md:text-base">
            Voxora = agentic runtime + AI agents + lifecycle engine + omnichannel ingress +
            knowledge graph, built for multi-tenant SaaS.
          </p>
          <p
            className="mx-auto mt-2 max-w-2xl text-sm italic text-[#3d3d36] md:text-base"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Built as a unified agentic operating system, not a bundle of disconnected tools.
          </p>
        </div>

        <CardContainer>
          {/* Left section — ~60% */}
          <div className="flex flex-1 flex-col gap-6 p-8">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[#059669] uppercase">
                Voxora Core
              </p>
              <CardHeader
                title="Deploy Agentic Intelligence That Feels Native to Your Product"
                badge="Live"
              />
            </div>
            <CardDescription text="A multi-tenant, real-time, AI-native agentic platform. Agents are the execution layer — from intent classification to automated resolution." />
            <p
              className="-mt-2 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Calm intelligence for developers shipping at startup speed.
            </p>
            <CardActions href="https://github.com/voxora-cloud/voxora" label="Get Started" />
            <hr className="border-[#d8d8cc]" />
            <CardList items={featureItems} />
          </div>
          {/* Right section — ~40% */}
          <CardPreview rows={inboxRows} />
        </CardContainer>

        {/* Agent Pipeline UI card */}
        <div
          data-reveal
          data-delay="0"
          className="card-reveal mt-6 overflow-hidden rounded-[26px] border border-[#d8d8cc] bg-white/82 shadow-[0_24px_60px_rgba(20,20,16,0.08)] backdrop-blur-[10px]"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-[#d8d8cc] px-6 py-4">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-[#047857] uppercase">Live Runtime</p>
              <h3 className="mt-0.5 text-base font-semibold text-[#161612]">Agent Pipeline Monitor</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#059669]/25 bg-[#059669]/10 px-3 py-1 text-[11px] font-medium text-[#047857]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#059669]" />
              4 agents running
            </span>
          </div>

          {/* Dark terminal area */}
          <div className="bg-[#181814] p-6">
            <div className="grid gap-4 md:grid-cols-2">

              {/* Left — pipeline steps */}
              <div className="space-y-2">
                <p className="mb-3 text-[11px] font-medium tracking-widest text-[#f8f8f2]/40 uppercase">Execution trace</p>
                {[
                  { step: "01", label: "Intent classification",   status: "done",    time: "12ms"  },
                  { step: "02", label: "RAG retrieval · Qdrant",  status: "done",    time: "38ms"  },
                  { step: "03", label: "LLM reasoning node",      status: "running", time: "…"     },
                  { step: "04", label: "Tool API action",         status: "queued",  time: "—"     },
                  { step: "05", label: "Webhook dispatch",        status: "queued",  time: "—"     },
                ].map(({ step, label, status, time }) => (
                  <div key={step} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2.5">
                    <span className="w-6 flex-shrink-0 text-[10px] font-mono text-[#f8f8f2]/30">{step}</span>
                    <span className="flex-1 text-xs text-[#f8f8f2]/75">{label}</span>
                    <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      status === "done"    ? "bg-[#059669]/20 text-[#34d399]" :
                      status === "running" ? "bg-yellow-500/20 text-yellow-300" :
                                            "bg-white/10 text-[#f8f8f2]/30"
                    }`}>{status}</span>
                    <span className="w-8 flex-shrink-0 text-right font-mono text-[10px] text-[#f8f8f2]/30">{time}</span>
                  </div>
                ))}
              </div>

              {/* Right — agent log stream */}
              <div className="flex flex-col">
                <p className="mb-3 text-[11px] font-medium tracking-widest text-[#f8f8f2]/40 uppercase">Agent log stream</p>
                <div className="flex-1 rounded-xl border border-white/5 bg-black/30 p-3 font-mono text-[11px] leading-relaxed">
                  <p><span className="text-[#34d399]">→</span> <span className="text-[#f8f8f2]/50">tenant:</span> <span className="text-[#f8f8f2]/80">org_9f2c</span></p>
                  <p><span className="text-[#34d399]">→</span> <span className="text-[#f8f8f2]/50">intent:</span> <span className="text-[#f8f8f2]/80">billing_escalation</span></p>
                  <p><span className="text-[#34d399]">→</span> <span className="text-[#f8f8f2]/50">qdrant:</span> <span className="text-[#f8f8f2]/80">3 chunks retrieved</span></p>
                  <p className="mt-1"><span className="text-yellow-400">●</span> <span className="text-[#f8f8f2]/50">llm:</span> <span className="text-yellow-200/80">generating response…</span></p>
                  <p className="mt-1 text-[#f8f8f2]/20">▌</p>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: "Resolved", value: "148", color: "text-[#34d399]" },
                    { label: "In-flight", value: "4",   color: "text-yellow-300" },
                    { label: "Queued",   value: "11",  color: "text-[#f8f8f2]/50" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="rounded-xl border border-white/5 bg-white/[0.04] p-2">
                      <p className={`text-lg font-bold ${color}`}>{value}</p>
                      <p className="text-[10px] text-[#f8f8f2]/40">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          <article data-reveal data-delay="100" className="card-reveal relative overflow-hidden rounded-[22px] border border-[#d8d8cc] bg-white/82 p-6 shadow-[0_20px_50px_rgba(20,20,16,0.08)] backdrop-blur-[8px] md:col-span-4 md:min-h-[320px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1.5">
              <Bot className="h-4 w-4 text-[#047857]" />
              <h4 className="text-base font-semibold text-[#161612]">Agent Automation</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#4b4b44]">
              AI replies, agentic workflows, and tool-using automation with async
              processing via BullMQ.
            </p>
            <p
              className="mt-2 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Designed for teams that automate without losing human control.
            </p>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-[#f3f3ec] p-2.5 text-xs text-[#30302a]">
                <span className="h-2 w-2 rounded-full bg-[#059669]" />
                AI triage + intent routing
                <span className="ml-auto text-[#6a6a61]">LLM node</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-[#f3f3ec] p-2.5 text-xs text-[#30302a]">
                <span className="h-2 w-2 rounded-full bg-[#059669]" />
                Multi-step reasoning workflow
                <span className="ml-auto text-[#6a6a61]">workflow</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#d8d8cc] bg-[#f3f3ec] p-2.5 text-xs text-[#30302a]">
                <span className="h-2 w-2 rounded-full bg-[#059669]" />
                Execute action via tool APIs
                <span className="ml-auto text-[#6a6a61]">action</span>
              </div>
            </div>
          </article>

          <article data-reveal data-delay="220" className="card-reveal relative overflow-hidden rounded-[22px] border border-[#d8d8cc] bg-white/82 p-6 shadow-[0_20px_50px_rgba(20,20,16,0.08)] backdrop-blur-[8px] md:col-span-4 md:min-h-[320px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1.5">
              <Code2 className="h-4 w-4 text-[#047857]" />
              <h4 className="text-base font-semibold text-[#161612]">Developer Integration</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#4b4b44]">
              API-first architecture across Node.js + Express API, Next.js web app,
              workers, and realtime interfaces.
            </p>
            <p
              className="mt-2 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Developer ergonomics stay first-class across every integration surface.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[#30302a]">
                Socket.IO
              </span>
              <span className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[#30302a]">
                REST API
              </span>
              <span className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[#30302a]">
                BullMQ Worker
              </span>
            </div>
            <div className="mt-4 rounded-xl border border-[#d8d8cc] bg-[#f3f3ec] p-3 font-mono text-xs leading-relaxed text-[#30302a]">
              <p>POST /api/conversations/reply</p>
              <p className="text-[#047857]">tenant: organizationId</p>
              <p className="text-[#047857]">queue: ai-replies:process</p>
            </div>
          </article>

          <article data-reveal data-delay="340" className="card-reveal relative overflow-hidden rounded-[22px] border border-[#059669]/35 bg-[#059669]/[0.10] p-6 shadow-[0_20px_55px_rgba(20,20,16,0.09)] backdrop-blur-[8px] md:col-span-4 md:min-h-[320px]">
            <p
              className="mb-1 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Every layer, connected by design.
            </p>
            <p className="text-xs font-medium tracking-[0.2em] text-[#047857] uppercase">
              Voxora Architecture
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[#059669]/30 bg-white/55 px-2.5 py-1.5">
              <Network className="h-4 w-4 text-[#047857]" />
              <h5 className="text-base font-semibold text-[#161612]">
                Unified agentic operating system
              </h5>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-[#059669]/25 bg-white/60 p-3 text-xs text-[#30302a]">
                Omnichannel ingress: Agent Sessions + Email Pipeline + QR Entry
              </div>
              <div className="pl-3 text-[#047857]/80">-&gt;</div>
              <div className="rounded-xl border border-[#059669]/25 bg-white/60 p-3 text-xs text-[#30302a]">
                Agentic OS: thread lifecycle, tickets, assignment orchestration
              </div>
              <div className="pl-3 text-[#047857]/80">-&gt;</div>
              <div className="rounded-xl border border-[#059669]/25 bg-white/60 p-3 text-xs text-[#30302a]">
                AI/RAG layer + BullMQ workers + role-scoped tenant isolation
              </div>
            </div>
          </article>

          <article data-reveal data-delay="100" className="card-reveal relative overflow-hidden rounded-[22px] border border-[#d8d8cc] bg-white/82 p-6 shadow-[0_20px_50px_rgba(20,20,16,0.08)] backdrop-blur-[8px] md:col-span-6 md:min-h-[250px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1.5">
              <Building2 className="h-4 w-4 text-[#047857]" />
              <h4 className="text-base font-semibold text-[#161612]">Multi-Tenant SaaS Core</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#4b4b44]">
              Every entity is organization-scoped for strict data isolation and
              secure scaling across many tenants.
            </p>
            <p
              className="mt-2 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              One codebase. Many tenants. Zero bleed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[#30302a]">
                organizationId
              </span>
              <span className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[#30302a]">
                Data Isolation
              </span>
              <span className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[#30302a]">
                owner/admin/agent
              </span>
            </div>
          </article>

          {extraCards.map((card, index) => (
            <article
              key={card.title}
              data-reveal
              data-delay={String(100 + index * 140)}
              className={`card-reveal relative overflow-hidden rounded-[20px] border border-[#d8d8cc] bg-white/80 p-5 shadow-[0_16px_36px_rgba(20,20,16,0.07)] backdrop-blur-[6px] ${card.size} ${card.minHeight}`}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1.5">
                <card.icon className="h-4 w-4 text-[#047857]" />
                <h5 className="text-base font-semibold text-[#161612]">{card.title}</h5>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#4b4b44]">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#d8d8cc] bg-[#f3f3ec] px-2.5 py-1 text-[11px] text-[#30302a]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-6 -top-8 h-20 w-20 rounded-full bg-[#059669]/10 blur-2xl" />
            </article>
          ))}

          {/* Social card */}
          <article
            data-reveal
            data-delay="100"
            className="card-reveal relative overflow-hidden rounded-[22px] border border-[#d8d8cc] bg-white/82 p-6 shadow-[0_20px_50px_rgba(20,20,16,0.08)] backdrop-blur-[8px] md:col-span-6"
          >
            <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-[#059669]/10 blur-2xl" />
            <p className="text-xs font-medium tracking-[0.2em] text-[#047857] uppercase">Community</p>
            <h4 className="mt-1 text-lg font-semibold text-[#161612]">Find us everywhere</h4>
            <p
              className="mt-1 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif" }}
            >
              Join the builders shaping agentic infrastructure.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {(
                [
                  {
                    href: "https://github.com/voxora-cloud/voxora",
                    label: "GitHub", sublabel: "Open source",
                    icon: <Github className="h-5 w-5" />,
                    bg: "bg-[#161612]", text: "text-white",
                  },
                  {
                    href: "https://twitter.com/voxoracloud",
                    label: "X / Twitter", sublabel: "Updates",
                    icon: <Twitter className="h-5 w-5" />,
                    bg: "bg-black", text: "text-white",
                  },
                  {
                    href: "https://linkedin.com/company/voxora",
                    label: "LinkedIn", sublabel: "Company",
                    icon: <Linkedin className="h-5 w-5" />,
                    bg: "bg-[#0A66C2]", text: "text-white",
                  },
                  {
                    href: "https://discord.gg/voxora",
                    label: "Discord", sublabel: "Community",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                      </svg>
                    ),
                    bg: "bg-[#5865F2]", text: "text-white",
                  },
                  {
                    href: "https://www.producthunt.com/products/voxora",
                    label: "Product Hunt", sublabel: "Launches",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12m1.604 15.6H10.2V18H7.8V6h5.804a4.2 4.2 0 0 1 0 8.4" />
                      </svg>
                    ),
                    bg: "bg-[#DA552F]", text: "text-white",
                  },
                  {
                    href: "https://www.reddit.com/r/voxora",
                    label: "Reddit", sublabel: "Discussions",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                      </svg>
                    ),
                    bg: "bg-[#FF4500]", text: "text-white",
                  },
                ] as { href: string; label: string; sublabel: string; icon: React.ReactNode; bg: string; text: string }[]
              ).map(({ href, label, sublabel, icon, bg, text }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-[#d8d8cc] bg-[#f3f3ec] p-3 transition hover:border-[#059669]/30 hover:shadow-md"
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} ${text} shadow-sm transition group-hover:scale-105`}>
                    {icon}
                  </span>
                  <span className="text-center">
                    <p className="text-[11px] font-semibold text-[#161612]">{label}</p>
                    <p className="text-[10px] text-[#6a6a61]">{sublabel}</p>
                  </span>
                </a>
              ))}
            </div>
          </article>

          {/* Cloud providers card */}
          <article
            data-reveal
            data-delay="220"
            className="card-reveal relative overflow-hidden rounded-[22px] border border-[#d8d8cc] bg-white/82 p-6 shadow-[0_20px_50px_rgba(20,20,16,0.08)] backdrop-blur-[8px] md:col-span-6"
          >
            <div className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-[#059669]/10 blur-2xl" />
            <p className="text-xs font-medium tracking-[0.2em] text-[#047857] uppercase">Deployment</p>
            <h4 className="mt-1 text-lg font-semibold text-[#161612]">One-click deploy</h4>
            <p
              className="mt-1 text-sm italic text-[#3d3d36]"
              style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif" }}
            >
              Ship to any cloud in minutes, not hours.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { href: "https://railway.app/template/voxora", label: "Railway",      sublabel: "One-click",    src: "/logos/Railway.png" },
                { href: "https://cloud.google.com",            label: "Google Cloud",  sublabel: "GKE / Run",    src: "/logos/googleCloud.png" },
                { href: "https://aws.amazon.com",              label: "AWS",           sublabel: "ECS / EC2",    src: "/logos/aws.webp" },
                { href: "https://www.digitalocean.com",        label: "DigitalOcean",  sublabel: "App Platform", src: "/logos/DOCN.png" },
                { href: "https://www.hostinger.com",           label: "Hostinger",     sublabel: "VPS",          src: "/logos/hostinger.png" },
                { href: "https://www.docker.com",              label: "Docker",        sublabel: "Self-host",    src: "/logos/Docker.png" },
              ].map(({ href, label, sublabel, src }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-[#d8d8cc] bg-[#f3f3ec] p-3 transition hover:border-[#059669]/30 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm transition group-hover:scale-105">
                    <Image src={src} alt={label} width={28} height={28} className="h-7 w-7 object-contain" />
                  </span>
                  <span className="text-center">
                    <p className="text-[11px] font-semibold text-[#161612]">{label}</p>
                    <p className="text-[10px] text-[#6a6a61]">{sublabel}</p>
                  </span>
                </a>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
