import { InteraOneNavbar } from "@/components/interaone-navbar";

export default function SignInPage() {
  return (
    <>
      <InteraOneNavbar />
      <main className="bg-surface px-6 pb-24 pt-16 text-on-surface md:pt-20">
        <section className="mx-auto max-w-md rounded-3xl border border-outline-variant/20 bg-surface-container-low p-8">
          <h1 className="text-3xl font-extrabold">Sign In</h1>
          <p className="mt-3 text-sm text-on-surface-variant">
            Authentication flow will be wired here. This page is ready for your auth provider integration.
          </p>
        </section>
      </main>
    </>
  );
}
