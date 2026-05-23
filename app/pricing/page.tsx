import Link from "next/link";
import { InteraOneNavbar } from "@/components/interaone-navbar";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For solo builders exploring autonomous workflows.",
    features: ["1 workspace", "Core AI tools", "Community support"],
    cta: "Get Started",
    href: "/signin",
    featured: false,
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "For fast-moving teams shipping every week.",
    features: ["10 workspaces", "Advanced automations", "Priority support"],
    cta: "Choose Pro",
    href: "/signin",
    featured: false,
  },
  {
    name: "Scale",
    price: "$29",
    period: "/month",
    description: "For orgs that need performance, control, and scale.",
    features: ["Unlimited workspaces", "Audit trails", "SLA-backed uptime"],
    cta: "Choose Scale",
    href: "/signin",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Security, governance, and white-glove onboarding.",
    features: ["Dedicated success manager", "Custom integrations", "Enterprise security reviews"],
    cta: "Contact Us",
    href: "/enterprise",
    featured: false,
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <InteraOneNavbar active="/pricing" />
      <main className="bg-surface text-on-surface">
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                sell
              </span>
              Pricing
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Simple plans for every stage</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Start free, scale with confidence, and upgrade when your team is ready.
            </p>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-full w-full -translate-x-1/2 blur-[120px] opacity-40">
            <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20" />
            <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-tertiary/10" />
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`atmos-shadow rounded-2xl border p-7 ${
                  plan.featured
                    ? "border-primary/30 bg-surface-container-low"
                    : "border-outline-variant/20 bg-surface-container-lowest"
                }`}
              >
                <h2 className="font-headline text-2xl font-bold">{plan.name}</h2>
                <div className="mt-4 flex items-end gap-1">
                  <p className="text-4xl font-extrabold text-primary">{plan.price}</p>
                  {plan.period ? <span className="pb-1 text-sm text-on-surface-variant">{plan.period}</span> : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-on-surface-variant">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[18px] text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    plan.featured
                      ? "gradient-primary text-white shadow-lg shadow-primary/20"
                      : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                  }`}
                  href={plan.href}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">No lock-in</p>
              <p className="mt-2 text-sm text-on-surface-variant">Upgrade, downgrade, or cancel anytime.</p>
            </div>
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">Transparent billing</p>
              <p className="mt-2 text-sm text-on-surface-variant">Simple monthly pricing with clear usage visibility.</p>
            </div>
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">Secure by default</p>
              <p className="mt-2 text-sm text-on-surface-variant">Role-based access and audit-friendly controls.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">Plan comparison highlights</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
              <div className="grid grid-cols-4 border-b border-outline-variant/15 bg-surface-container-high px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                <span>Capability</span>
                <span>Free</span>
                <span>Pro / Scale</span>
                <span>Enterprise</span>
              </div>
              <div className="grid grid-cols-4 px-6 py-4 text-sm">
                <span className="font-semibold">AI automations</span>
                <span>Basic</span>
                <span>Advanced</span>
                <span>Custom</span>
              </div>
              <div className="grid grid-cols-4 border-t border-outline-variant/15 px-6 py-4 text-sm">
                <span className="font-semibold">Support</span>
                <span>Community</span>
                <span>Priority</span>
                <span>Dedicated CSM</span>
              </div>
              <div className="grid grid-cols-4 border-t border-outline-variant/15 px-6 py-4 text-sm">
                <span className="font-semibold">Compliance help</span>
                <span>—</span>
                <span>Guides</span>
                <span>Hands-on</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">Frequently asked questions</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6">
                <h3 className="text-lg font-bold">Can I start free and upgrade later?</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Yes. You can begin on Free and move to Pro, Scale, or Enterprise whenever your team grows.
                </p>
              </article>
              <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6">
                <h3 className="text-lg font-bold">Do you offer annual billing?</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Yes. Annual billing is available for Pro and Scale with volume discounts.
                </p>
              </article>
              <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6">
                <h3 className="text-lg font-bold">What does Enterprise include?</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Enterprise includes custom security reviews, dedicated onboarding, and tailored integrations.
                </p>
              </article>
              <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6">
                <h3 className="text-lg font-bold">Can we migrate from another platform?</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Absolutely. Our team provides migration playbooks and support to ensure a smooth transition.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
