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
  Github,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

const benefits = [
  "24/7 AI-Powered Support",
  "Real-time Messaging",
  "Self-Hosted Option",
  "No Vendor Lock-in",
  "Unlimited Customization",
  "Active Community",
];

const stats = [
  { value: "100%", label: "Open Source" },
  { value: "Real-time", label: "Messaging" },
  { value: "MIT", label: "License" },
  { value: "∞", label: "Self-Hosted" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-sm font-bold text-white">V</span>
            </div>
            <span className="text-xl font-bold">Voxora</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </Link>
            <Link
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden hero-gradient">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              100% Open Source Customer Support
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Customer Support
              <span className="block gradient-text">Reimagined</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Voxora is a modern, real-time customer support platform. Open
              source, self-hostable, with AI-powered chat, voice integration,
              and powerful analytics. Built for teams who value control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://github.com/voxora-cloud/voxora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <Github className="h-5 w-5" />
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/voxora-cloud/voxora#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
              >
                View Documentation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Embeddable Chat Widget</h2>
            <p className="text-lg text-muted-foreground">
              Lightweight and powerful. Embed in any website with a single line of code.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
              <Image 
                src="https://api.imghippo.com/files/MTA6734rLY.png"
                alt="Voxora Chat Widget Preview"
                className="w-full h-auto"
                width={1200}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built by developers, for teams who need reliable support without
              complexity. Powerful yet simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <feature.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="py-20 md:py-32 px-4 bg-muted/30"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-4">
                <Code2 className="w-4 h-4 mr-2" />
                Simple Integration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Voxora provides all the tools your team needs to deliver
                exceptional customer support. From real-time messaging to
                advanced analytics, we&apos;ve got you covered.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-600" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://github.com/voxora-cloud/voxora#quick-start-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:underline"
              >
                View Quick Start Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/10 to-cyan-400/10 blur-xl -z-10 rounded-3xl" />
              <div className="bg-card rounded-xl p-6 shadow-xl border border-border">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-muted-foreground ml-2">
                    Terminal
                  </span>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-muted-foreground">
                    <span className="text-green-500">$</span> git clone
                    https://github.com/voxora-cloud/voxora.git{"\n"}
                    <span className="text-green-500">$</span> cd voxora{"\n"}
                    <span className="text-green-500">$</span> npm install{"\n"}
                    <span className="text-green-500">$</span> npm run dev:full
                    {"\n\n"}
                    <span className="text-cyan-600">✓</span> Web app running at
                    http://localhost:3000{"\n"}
                    <span className="text-cyan-600">✓</span> API running at
                    http://localhost:3002{"\n"}
                    <span className="text-cyan-600">✓</span> Widget at
                    http://localhost:3002/widget
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Architecture
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern tech stack designed for reliability, performance, and
              horizontal scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Next.js + React 19</h3>
              <p className="text-sm text-muted-foreground">
                Modern web app with App Router, server components, and Tailwind
                CSS.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Express + Socket.IO
              </h3>
              <p className="text-sm text-muted-foreground">
                Real-time API with Redis adapter for horizontal scaling and
                WebSocket support.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">MongoDB + Redis</h3>
              <p className="text-sm text-muted-foreground">
                Persistent storage with Mongoose and Redis for caching and
                real-time pub/sub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 md:py-32 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Open Source Community
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Voxora is more than just software – it&apos;s a community of
              developers, designers, and support professionals building the
              future of customer support together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://github.com/voxora-cloud/voxora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
              >
                <Github className="h-5 w-5" />
                Contribute on GitHub
              </Link>
              <Link
                href="https://github.com/voxora-cloud/voxora/blob/main/CONTRIBUTION.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
              >
                Read Contributing Guide
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl border border-border bg-card">
                <Code2 className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-semibold">Code</h4>
                <p className="text-xs text-muted-foreground">
                  Bug fixes & features
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <MessageSquare className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-semibold">Docs</h4>
                <p className="text-xs text-muted-foreground">
                  Improve documentation
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <Star className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-semibold">Ideas</h4>
                <p className="text-xs text-muted-foreground">
                  Feature suggestions
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-semibold">Support</h4>
                <p className="text-xs text-muted-foreground">Help other users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-cyan-500 to-cyan-400 opacity-90" />
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 left-0 w-full h-24 text-background"
            preserveAspectRatio="none"
            viewBox="0 0 1440 74"
          >
            <path
              fill="currentColor"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"
            />
          </svg>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Support?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Join the open source revolution in customer support. Self-host for
              complete control or contribute to make Voxora even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/voxora-cloud/voxora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-white text-cyan-600 hover:bg-white/90 transition-colors shadow-xl"
              >
                <Github className="h-5 w-5" />
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/voxora-cloud/voxora/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <Star className="h-5 w-5" />
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">V</span>
                </div>
                <span className="font-bold text-lg">Voxora</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Open source customer support platform for modern teams.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/voxora-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/voxora-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/voxora-cloud/voxora#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/voxora-cloud/voxora/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://github.com/voxora-cloud/voxora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/voxora-cloud/voxora/blob/main/CONTRIBUTION.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Contributing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/voxora-cloud/voxora/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Issues
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://github.com/voxora-cloud/voxora/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Voxora. All rights reserved. Made with ❤️ by the open
              source community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
