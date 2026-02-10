import Link from "next/link";
import { Heart, Github, Code2, MessageSquare, Star, Users } from "lucide-react";

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <Heart className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Open Source Community</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Join the <span className="gradient-text">Community</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Voxora is more than just software – it&apos;s a community of developers,
            designers, and support professionals building the future of customer support
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="https://github.com/voxora-cloud/voxora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-primary hover:glow-primary-strong"
            >
              <Github className="h-5 w-5" />
              Contribute on GitHub
            </Link>
            <Link
              href="https://github.com/voxora-cloud/voxora/blob/main/CONTRIBUTION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl glass-card"
            >
              Read Contributing Guide
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-2xl group cursor-pointer hover:scale-105 transition-all">
              <Code2 className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-2">Code</h4>
              <p className="text-xs text-foreground/60">Contribute features</p>
            </div>
            <div className="glass-card p-6 rounded-2xl group cursor-pointer hover:scale-105 transition-all">
              <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-2">Docs</h4>
              <p className="text-xs text-foreground/60">Improve documentation</p>
            </div>
            <div className="glass-card p-6 rounded-2xl group cursor-pointer hover:scale-105 transition-all">
              <Star className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-2">Ideas</h4>
              <p className="text-xs text-foreground/60">Feature suggestions</p>
            </div>
            <div className="glass-card p-6 rounded-2xl group cursor-pointer hover:scale-105 transition-all">
              <Users className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-2">Support</h4>
              <p className="text-xs text-foreground/60">Help other users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
