import {
  MessageSquare,
  Bot,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  Code2,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description:
      "Instant messaging with Socket.IO and Redis for blazing-fast, scalable conversations.",
  },
  {
    icon: Bot,
    title: "AI-Powered Support",
    description:
      "Intelligent chatbots with LLM integration for automated responses and smart escalation.",
  },
  {
    icon: PhoneCall,
    title: "Voice Integration",
    description:
      "Text-to-speech and speech-to-text for seamless voice conversations in-widget.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive insights into team performance, response times, and customer satisfaction.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "JWT authentication, rate limiting, input validation, and CORS protection built-in.",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Role-based access with admin, agent, and user roles. Invite team members easily.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "RESTful API, Socket.IO events, and comprehensive documentation for easy integration.",
  },
  {
    icon: Globe,
    title: "Embeddable Widget",
    description:
      "Lightweight chat widget that can be embedded on any website with a simple script.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass green-border mb-8 animate-float">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Built by developers, for teams who need reliable support without complexity.
            Powerful yet simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
