export default function AIAgentSection() {
  return (
    <section className="max-w-screen-2xl mx-auto px-12 mb-40">
      <div className="bg-surface-container rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-4px_rgba(26,28,25,0.05)] border border-outline-variant/15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text Content Side */}
          <div className="p-12 lg:p-24 flex flex-col justify-center items-start text-left bg-surface">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <span className="label-intercom text-xs text-on-surface-variant">
                Fin AI Agent
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl mb-10 text-on-surface">
              A world-class <br />
              AI Agent
            </h2>
            <div className="mb-12">
              <div className="w-24 h-24 mb-10">
                <svg
                  className="w-full h-full text-orange-500/90 fill-current"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50 10 C60 10 70 20 70 35 C70 50 50 65 30 50 C10 35 20 20 30 15 C40 10 50 25 50 40 C50 55 65 70 80 60 C95 50 85 30 75 25 M25 75 C15 85 35 95 45 80 C55 65 40 50 25 60 C10 70 20 90 40 90 C60 90 70 70 60 55 C50 40 30 30 20 45"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  ></path>
                  <path
                    d="M50 50 m-5 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-lg leading-relaxed max-w-md text-on-surface-variant">
                Fin is a world-class AI Agent trusted by many of the most
                forward-thinking businesses in the world, including{" "}
                <span className="text-on-surface border-b border-outline-variant font-semibold">
                  Anthropic
                </span>
                ,{" "}
                <span className="text-on-surface border-b border-outline-variant font-semibold">
                  Clay
                </span>
                ,{" "}
                <span className="text-on-surface border-b border-outline-variant font-semibold">
                  Lightspeed
                </span>
                , and many more.
              </p>
            </div>
            <button className="bg-surface-container-high text-on-surface btn-intercom hover:bg-surface-container-highest cursor-pointer font-bold">
              Learn more
            </button>
          </div>
          {/* Visual side */}
          <div className="relative min-h-[600px] flex items-center justify-center bg-orange-500 overflow-hidden">
            <img
              alt="organic shapes"
              className="absolute inset-0 w-full h-full object-cover scale-150 opacity-80 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANVvWHiDT0jLzEz0x7lUfJ1J_zdAYvqbKpBAU7WgE1e_BqJmch8j6GnBgCyClKpVBmbRG6Uwavmn9dQ9PlnhdmNcmiuH6Jp9eHSv_CDctHdD5_JdxrZPbMJlIBkPbA745mwTdebtd9Il6BDh6V1omUkJ0qjo6dGJ0_YksiRsyEPMkb0CqYHSmgNGox48PtD_1WCxf3sGSFC0aTOBMef6uubB1iBpy6dvD_hRaTEI4wYZ-H3UOVpwvEGFRwnbDrw4c89ZdnMWV7e3A7"
            />
            <div className="relative z-10 w-full max-w-md px-6 space-y-6">
              <div className="flex justify-end">
                <div className="bg-surface-container-highest/90 backdrop-blur-md text-on-surface p-5 rounded-3xl rounded-tr-none shadow-xl max-w-[85%] border border-surface/20">
                  <p className="text-[15px] font-medium">
                    I&apos;ve lost my card while travelling abroad.
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-surface/95 backdrop-blur-md text-on-surface p-6 rounded-3xl rounded-tl-none shadow-[0_32px_64px_-4px_rgba(26,28,25,0.15)] max-w-[90%] transform translate-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-surface-container-highest flex items-center justify-center rounded">
                      <span className="material-symbols-outlined text-on-surface text-[14px]">
                        token
                      </span>
                    </div>
                    <span className="label-intercom text-[10px] text-on-surface">
                      Fin
                    </span>
                  </div>
                  <p className="text-[15px] font-semibold mb-2">
                    I&apos;ll help sort this out. I&apos;ve cancelled your card and
                    added a virtual card to your account.
                  </p>
                  <p className="text-[15px] font-semibold">
                    Would you like a replacement shipped to your home?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
