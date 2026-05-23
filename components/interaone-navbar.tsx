import Link from "next/link";
import { InteraOneLogo } from "@/components/interaone-logo";

const navItems = [
  { label: "Product", href: "/" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
] as const;

type InteraOneNavbarProps = {
  active?: string;
};

export function InteraOneNavbar({ active }: InteraOneNavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <div className="flex items-center gap-8 md:gap-10">
          <Link className="inline-flex items-center gap-4" href="/">
            <InteraOneLogo className="inline-flex shrink-0" width={40} />
            <span className="font-headline text-2xl font-black tracking-tighter text-[#342936]">interaOne</span>
          </Link>
          <nav className="hidden items-center gap-6 font-body text-sm font-medium tracking-tight md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <Link
                  key={item.href}
                  className={
                    isActive
                      ? "border-b-2 border-[#845c6c] font-semibold text-[#845c6c]"
                      : "text-[#342936]/70 transition-all duration-300 hover:text-[#845c6c]"
                  }
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer rounded-lg p-2 text-on-surface-variant transition-all hover:bg-[#ffeffd]">
            language
          </span>
          <Link
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
            href="/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
