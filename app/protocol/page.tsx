import { SaaSSectionPage } from "@/components/saas-section-page";

export default function ProtocolPage() {
  return (
    <SaaSSectionPage
      activeHref="/protocol"
      heading="Protocol"
      subheading="The foundation for secure, scalable interoperability"
      items={[
        {
          title: "Intera Protocol",
          description: "A standardized layer for connecting apps, services, and AI systems.",
        },
        {
          title: "Event Streaming",
          description: "Real-time event pipelines for high-throughput data processing.",
        },
        {
          title: "Identity & Access",
          description: "Secure, tenant-aware authentication and role-based access control.",
        },
        {
          title: "Data Contracts",
          description: "Define and enforce structured data exchange across systems.",
        },
      ]}
    />
  );
}
