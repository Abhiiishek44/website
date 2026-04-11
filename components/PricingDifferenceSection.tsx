"use client";

import React, { useState } from "react";

export default function PricingDifferenceSection() {
  const [users, setUsers] = useState(250);
  const PRICING = {
    voxora: 15,
    zoho: 40,
    zendesk: 115,
  } as const;

  const voxoraMonthly = users * PRICING.voxora;
  const zohoMonthly = users * PRICING.zoho;
  const zendeskMonthly = users * PRICING.zendesk;
  const maxMonthlyAt1000Users = 1000 * PRICING.zendesk;

  const voxoraBar = Math.max(8, (voxoraMonthly / maxMonthlyAt1000Users) * 100);
  const zohoBar = Math.max(10, (zohoMonthly / maxMonthlyAt1000Users) * 100);
  const zendeskBar = Math.max(12, (zendeskMonthly / maxMonthlyAt1000Users) * 100);

  const savingsVsZoho = zohoMonthly - voxoraMonthly;
  const savingsVsZendesk = zendeskMonthly - voxoraMonthly;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers(Number(e.target.value));
  };

  return (
    <section id="pricing" className="grain-bg relative overflow-hidden px-6 py-20 scroll-mt-28">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[44%] -translate-x-1/2 bg-surface-container-low/55 md:block" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-24 max-w-3xl text-center">
          <span className="mb-4 block text-xs font-bold tracking-[0.18em] text-primary uppercase">
            Transparency First
          </span>
          <h2 className="mb-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface md:text-7xl">
            See the price difference
          </h2>
          <p className="text-xl leading-relaxed font-light text-on-surface-variant md:text-2xl">
            Transparent pricing built for scale. No hidden fees, no complexity.
            Just high-performance AI.
          </p>
        </header>

        <div className="mb-28 rounded-3xl border border-outline-variant/15 bg-white/82 p-8 shadow-[0_20px_60px_-20px_rgba(26,28,25,0.25)] backdrop-blur-xl md:p-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div className="flex-1">
              <label className="mb-8 block text-2xl font-bold font-headline" htmlFor="user-range">
                Estimate for <span className="text-primary">{users}</span> users
              </label>
              <input
                id="user-range"
                className="pricing-range w-full h-2 cursor-pointer appearance-none rounded-lg bg-surface-container"
                max="1000"
                min="1"
                type="range"
                value={users}
                onChange={handleSliderChange}
              />
              <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                <span>1 User</span>
                <span>1,000 Users</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <span className="mb-1 text-sm font-semibold text-on-surface-variant">
                Voxora Monthly
              </span>
              <div className="font-headline text-6xl font-black tracking-tighter text-primary">
                ${voxoraMonthly.toLocaleString()}
              </div>
              <span className="mt-2 text-xs text-on-surface-variant">Billed annually at $15/user</span>
            </div>
          </div>
        </div>

        <section className="mb-20 grid grid-cols-1 items-end gap-8 md:grid-cols-3">
          <div className="group order-2 md:order-1">
            <div className="rounded-3xl bg-surface-container-low p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-8 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-lg grayscale transition-all group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLnbmqGvfPcFIqq63HbfMAsJjj_-4vlF6hFd8MmbgvsVn-AU_PMIsi3aDza5rVT20LDURzBhJk5PNKTYFQh3Em9x85xOHrH4XO6tVVORUHsYSsDqKEROurUyd0C9QzUoUArDEZ0ComnxtQgLrWAZcjyEDE7qARu5pPrXOeW8wDESH5M_ywynzYrZHNwHxrOG25kvHMMutdapK6UEFz3nDQvDyGfdx-7skeNS9n4_VDT0mGja1nRVJCKZnaIAXa16RdDRtq1_T-mVRK"
                  alt="Zoho Desk logo"
                />
                <h3 className="font-headline text-xl font-bold text-on-surface">Zoho Desk</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-4xl font-extrabold text-on-surface tabular-nums">
                    ${zohoMonthly.toLocaleString()}
                  </span>
                  <span className="font-medium text-on-surface-variant">/month</span>
                </div>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-container">
                  <div
                    className="h-full bg-secondary transition-all duration-300"
                    style={{ width: `${zohoBar}%` }}
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-on-surface-variant/90">
                  ${PRICING.zoho}/user · {users} users
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">check_circle</span>
                  Standard Features
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">check_circle</span>
                  Legacy Workflows
                </li>
              </ul>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-4 py-1.5 text-[10px] font-black tracking-[0.14em] text-white uppercase shadow-lg">
              Best Value
            </div>

            <div className="relative scale-105 overflow-hidden rounded-3xl border border-primary/30 bg-white/88 p-10 shadow-[0_24px_60px_-18px_rgba(0,107,74,0.4)] backdrop-blur-xl transition-all duration-500">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/8 blur-3xl" />
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl font-black text-white">
                  V
                </div>
                <h3 className="font-headline text-2xl font-black tracking-tight text-on-surface">Voxora</h3>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-7xl font-black tracking-tighter text-primary tabular-nums">
                    ${voxoraMonthly.toLocaleString()}
                  </span>
                  <span className="font-semibold text-on-surface-variant">/month</span>
                </div>
                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${voxoraBar}%` }}
                  />
                </div>
                <p className="mt-3 text-xs font-semibold text-on-surface-variant/90">
                  ${PRICING.voxora}/user · {users} users
                </p>
              </div>
              <ul className="mb-10 space-y-5">
                <li className="flex items-center gap-3 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-primary [font-variation-settings:'FILL'_1,'wght'_500,'GRAD'_0,'opsz'_20]">verified</span>
                  AI-First Infrastructure
                </li>
                <li className="flex items-center gap-3 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-primary [font-variation-settings:'FILL'_1,'wght'_500,'GRAD'_0,'opsz'_20]">verified</span>
                  Infinite Automation
                </li>
                <li className="flex items-center gap-3 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-primary [font-variation-settings:'FILL'_1,'wght'_500,'GRAD'_0,'opsz'_20]">verified</span>
                  Priority Support
                </li>
              </ul>
              <button className="w-full rounded-xl bg-gradient-to-br from-primary to-primary-container py-4 text-lg font-bold text-on-primary shadow-xl shadow-primary/20 transition-all hover:shadow-primary/40 active:scale-[0.98]">
                Switch to Voxora
              </button>
            </div>
          </div>

          <div className="group order-3 md:order-3">
            <div className="rounded-3xl bg-surface-container-low p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-8 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-lg grayscale transition-all group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk7ffCQTf7j7RyNnznMKoFs7XaJUyJPr8LBV2666TkZEOF3hkC8Z2s1STpOK83LljWOg40zAeAsCCLifBb7Cjm-tKBLd-E35D5qnibnZ8Lee2N6h0r8U5x4eBGLAfRSGS5p9tGg3xpKrbUvMF3zRxHIG21-coxN1j7pn3bglVLkcPt0ORKsXnMJdyRLRTbNJBz31HudD3xAQflXFKPgPjxdk8RQXw7oTb6eQRz3H3Zi4Ibc8A8HTZuInBePVy9GcZKjltJ2xK9Qh8k"
                  alt="Zendesk logo"
                />
                <h3 className="font-headline text-xl font-bold text-on-surface">Zendesk</h3>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-4xl font-extrabold text-on-surface tabular-nums">
                    ${zendeskMonthly.toLocaleString()}
                  </span>
                  <span className="font-medium text-on-surface-variant">/month</span>
                </div>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-container">
                  <div
                    className="h-full bg-[#ba5855] transition-all duration-300"
                    style={{ width: `${zendeskBar}%` }}
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-on-surface-variant/90">
                  ${PRICING.zendesk}/user · {users} users
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">check_circle</span>
                  Enterprise Suite
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">check_circle</span>
                  Basic AI Add-ons
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-6 py-2 text-sm font-bold text-primary">
            <span className="material-symbols-outlined text-sm [font-variation-settings:'FILL'_1,'wght'_500,'GRAD'_0,'opsz'_20]">savings</span>
            Save ${savingsVsZendesk.toLocaleString()}/mo vs Zendesk
          </div>
          <p className="text-lg font-light italic text-on-surface-variant">
            &quot;At {users} users, Voxora saves you ${savingsVsZoho.toLocaleString()}/mo vs Zoho and ${savingsVsZendesk.toLocaleString()}/mo vs Zendesk.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
