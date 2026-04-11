export default function QuickFeaturesSection() {
  const cards = [
    {
      icon: "chat",
      title: "Real-time chat",
      description:
        "Talk to your customers instantly.",
      footer: "Get Started",
    },
    {
      icon: "psychology",
      title: "AI assistance",
      description:
        "Get help replying faster.",
      chips: ["Suggested replies", "Faster support", "Less typing"],
    },
    {
      icon: "inbox",
      title: "Shared inbox",
      description:
        "Manage all conversations in one place.",
    },
    {
      icon: "dashboard",
      title: "Simple interface",
      description:
        "Clean and easy to use.",
    },
    {
      icon: "schedule",
      title: "Faster replies",
      description:
        "See messages instantly and respond faster.",
    },
    {
      icon: "check_circle",
      title: "Better support experience",
      description:
        "Less manual work for your team and faster help for customers.",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-2xl px-6 pb-32 md:px-12">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="group flex min-h-[280px] flex-col justify-between rounded-[2rem] bg-surface-container-low p-10 shadow-[0_24px_56px_-22px_rgba(26,28,25,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container"
          >
            <div>
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container/80">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {card.icon}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold tracking-tight text-on-surface">
                {card.title}
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant">
                {card.description}
              </p>
            </div>

            {card.footer ? (
              <div className="mt-8">
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary" href="#">
                  {card.footer}
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
                    arrow_forward
                  </span>
                </a>
              </div>
            ) : null}

            {card.chips ? (
              <div className="mt-8 flex gap-3 opacity-70">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md bg-surface px-2 py-1 text-[11px] font-medium text-on-surface-variant"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
