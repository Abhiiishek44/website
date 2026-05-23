import { SaaSSectionPage } from "@/components/saas-section-page";

export default function InsightsPage() {
  return (
    <SaaSSectionPage
      activeHref="/insights"
      heading="Insights"
      subheading="Learn, explore, and stay ahead"
      items={[
        {
          title: "Documentation",
          description: "Clear guides and architecture references for every feature.",
        },
        {
          title: "Case Studies",
          description: "See how teams scale automation and AI with InteraOne.",
        },
        {
          title: "Blog & Updates",
          description: "Product releases, engineering deep dives, and best practices.",
        },
        {
          title: "System Status",
          description: "Real-time uptime and performance transparency.",
        },
      ]}
    />
  );
}
