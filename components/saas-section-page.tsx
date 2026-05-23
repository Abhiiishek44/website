import Link from "next/link";
import { InteraOneNavbar } from "@/components/interaone-navbar";

type SubItem = {
  title: string;
  description: string;
};

type SaaSSectionPageProps = {
  activeHref: "/solutions" | "/protocol" | "/developers" | "/ecosystem" | "/insights";
  heading: string;
  subheading: string;
  items: SubItem[];
};

export function SaaSSectionPage({ activeHref, heading, subheading, items }: SaaSSectionPageProps) {
  return (
    <>
      <InteraOneNavbar active={activeHref} />
      <main className="bg-surface text-on-surface">
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hub
              </span>
              InteraOne Platform
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-on-surface md:text-6xl">{heading}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">{subheading}</p>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-full w-full -translate-x-1/2 blur-[120px] opacity-40">
            <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20" />
            <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-tertiary/10" />
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="atmos-shadow rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-7"
              >
                <h3 className="font-headline text-2xl font-bold text-on-surface">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant md:text-base">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between rounded-2xl bg-surface-container-low p-6">
            <p className="font-label text-xs uppercase tracking-[0.18em] text-on-surface-variant">Explore another section</p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <Link className="rounded-lg bg-surface-container-high px-3 py-2 text-on-surface hover:bg-surface-container-highest" href="/solutions">
                Solutions
              </Link>
              <Link className="rounded-lg bg-surface-container-high px-3 py-2 text-on-surface hover:bg-surface-container-highest" href="/protocol">
                Protocol
              </Link>
              <Link className="rounded-lg bg-surface-container-high px-3 py-2 text-on-surface hover:bg-surface-container-highest" href="/developers">
                Developers
              </Link>
              <Link className="rounded-lg bg-surface-container-high px-3 py-2 text-on-surface hover:bg-surface-container-highest" href="/ecosystem">
                Ecosystem
              </Link>
              <Link className="rounded-lg bg-surface-container-high px-3 py-2 text-on-surface hover:bg-surface-container-highest" href="/insights">
                Insights
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
