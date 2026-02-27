import Link from "next/link";
import { Github, Star, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-transparent p-12 rounded-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to Transform Your <span className="gradient-text">Support?</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-10">
            Join the open source revolution in customer support. Self-host for complete
            control or contribute to make Voxora even better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-primary-strong hover:-translate-y-1"
            >
              <Github className="h-5 w-5" />
              Get Started Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://github.com/voxora-cloud/voxora/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl glass-card"
            >
              <Star className="h-5 w-5" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
