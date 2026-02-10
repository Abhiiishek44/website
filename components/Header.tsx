import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 overflow-hidden relative">
            <Image 
              src="/logo.png"
              alt="Voxora Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <span className="text-xl text-foreground font-bold gradient-text">Voxora</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#community"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Community
          </Link>
          <Link
            href="https://github.com/voxora-cloud/voxora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1"
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
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-primary hover:glow-primary-strong"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
