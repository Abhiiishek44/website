import { SaaSSectionPage } from "@/components/saas-section-page";

export default function SolutionsPage() {
  return (
    <SaaSSectionPage
      activeHref="/solutions"
      heading="Solutions"
      subheading="Use cases powered by real-time AI infrastructure"
      items={[
        {
          title: "Automation Workflows",
          description: "Build event-driven workflows that execute actions across your stack in real time.",
        },
        {
          title: "Data Orchestration",
          description: "Seamlessly move, transform, and sync data across services and pipelines.",
        },
        {
          title: "AI Assistants",
          description: "Deploy intelligent agents that handle support, operations, and decision-making.",
        },
        {
          title: "Customer Engagement",
          description: "Power real-time chat, notifications, and personalized user interactions.",
        },
      ]}
    />
  );
}
