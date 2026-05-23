import { SaaSSectionPage } from "@/components/saas-section-page";

export default function DevelopersPage() {
  return (
    <SaaSSectionPage
      activeHref="/developers"
      heading="Developers"
      subheading="Everything you need to build, extend, and scale"
      items={[
        {
          title: "API Reference",
          description: "Clean, versioned APIs designed for speed and flexibility.",
        },
        {
          title: "SDKs & Tooling",
          description: "Developer-friendly libraries for rapid integration.",
        },
        {
          title: "Webhooks & Events",
          description: "Subscribe to real-time system events with reliable delivery.",
        },
        {
          title: "Local Development",
          description: "Spin up isolated environments for testing and iteration.",
        },
      ]}
    />
  );
}
