import Link from "next/link";
import { Code2, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "24/7 AI-Powered Support",
  "Real-time Messaging",
  "Self-Hosted Option",
  "No Vendor Lock-in",
  "Unlimited Customization",
  "Active Community",
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass green-border mb-8 animate-float">
              <Code2 className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium gradient-text">Quick Setup</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get Started in <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Voxora provides all the tools your team needs to deliver exceptional
              customer support. From real-time messaging to advanced analytics,
              we&apos;ve got you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href="https://github.com/voxora-cloud/voxora#quick-start-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View Quick Start Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" />
            <div className="relative glass-strong rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-xs text-foreground/50 ml-2">Terminal</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground/70">
                  <span className="text-success">$</span> git clone https://github.com/voxora-cloud/voxora.git{"\n"}
                  <span className="text-success">$</span> cd voxora{"\n"}
                  <span className="text-success">$</span> npm install{"\n"}
                  <span className="text-success">$</span> npm run dev:full{"\n\n"}
                  <span className="text-primary">✓</span> Web app running at http://localhost:3000{"\n"}
                  <span className="text-primary">✓</span> API running at http://localhost:3002{"\n"}
                  <span className="text-primary">✓</span> Widget at http://localhost:3002/widget
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
