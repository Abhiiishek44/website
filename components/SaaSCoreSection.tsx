export default function SaaSCoreSection() {
  return (
    <section className="max-w-screen-2xl mx-auto px-12 mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-surface-container rounded-3xl overflow-hidden min-h-[600px] relative group border border-outline-variant/15 shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)]">
          <img
            alt="data layers"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply filter grayscale contrast-150 brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANVvWHiDT0jLzEz0x7lUfJ1J_zdAYvqbKpBAU7WgE1e_BqJmch8j6GnBgCyClKpVBmbRG6Uwavmn9dQ9PlnhdmNcmiuH6Jp9eHSv_CDctHdD5_JdxrZPbMJlIBkPbA745mwTdebtd9Il6BDh6V1omUkJ0qjo6dGJ0_YksiRsyEPMkb0CqYHSmgNGox48PtD_1WCxf3sGSFC0aTOBMef6uubB1iBpy6dvD_hRaTEI4wYZ-H3UOVpwvEGFRwnbDrw4c89ZdnMWV7e3A7"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-container label-intercom text-[10px] mb-6 shadow-sm">
              Security First
            </div>
            <h3 className="text-5xl text-on-surface mb-4">SaaS Core Architecture</h3>
            <p className="text-on-surface-variant text-lg max-w-lg">
              Multi-tenancy isn&apos;t an afterthought. Voxora provides
              dedicated compute isolation for every customer.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-surface border border-outline-variant/15 rounded-3xl p-12 h-full flex flex-col justify-center shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)]">
            <div className="space-y-12">
              <div>
                <h4 className="text-2xl mb-4 text-on-surface">Granular Isolation</h4>
                <p className="text-on-surface-variant">
                  Hardware-level isolation between tenant workloads ensures that
                  security breaches never affect your entire platform.
                </p>
              </div>
              <div>
                <h4 className="text-2xl mb-4 text-on-surface">Zero-Trust Protocol</h4>
                <p className="text-on-surface-variant">
                  Every agent action is cryptographically signed and verified
                  through our internal IAM before execution.
                </p>
              </div>
              <div>
                <button className="group flex items-center gap-2 text-primary font-bold cursor-pointer hover:text-primary-container transition-colors">
                  Explore Security Specs
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
