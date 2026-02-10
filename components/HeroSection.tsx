import Link from "next/link";
import { Github, ArrowRight, Sparkles, Star, Gauge, Lock, Globe } from "lucide-react";

const stats = [
  { value: "100%", label: "Open Source", icon: Star },
  { value: "<100ms", label: "Response Time", icon: Gauge },
  { value: "MIT", label: "License", icon: Lock },
  { value: "∞", label: "Self-Hosted", icon: Globe },
];

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass golden-border mb-8 animate-float">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium golden-glimmer">100% Open Source Customer Support Platform</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-foreground">Customer Support</span>
            <span className="block gradient-text mt-2">Reimagined</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            A modern, real-time customer support platform. Open source, self-hostable,
            with AI-powered chat, voice integration, and powerful analytics. Built for
            teams who value control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-primary hover:glow-primary-strong hover:-translate-y-1"
            >
              <Github className="h-5 w-5" />
              Get Started Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://github.com/voxora-cloud/voxora#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl glass-card"
            >
              View Documentation
            </Link>
          </div>

          {/* Stats Grid with Glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl group cursor-pointer">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
