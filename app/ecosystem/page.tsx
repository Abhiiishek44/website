import { SaaSSectionPage } from "@/components/saas-section-page";

export default function EcosystemPage() {
  return (
    <SaaSSectionPage
      activeHref="/ecosystem"
      heading="Ecosystem"
      subheading="Integrations and extensions that amplify your stack"
      items={[
        {
          title: "Integrations Hub",
          description: "Connect with popular tools, services, and data platforms.",
        },
        {
          title: "Marketplace",
          description: "Discover pre-built workflows, plugins, and AI modules.",
        },
        {
          title: "Partners",
          description: "Collaborate with technology and solution partners.",
        },
        {
          title: "Open Source",
          description: "Extend InteraOne with community-driven components.",
        },
      ]}
    />
  );
}
