import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function DeploymentSection() {
  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass green-border mb-8 animate-float">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">One Click Deployment</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Deploy in <span className="gradient-text">Seconds</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Deploy Voxora to your favorite platform with a single click. No complex setup,
            no configuration headaches.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {/* <Link
            href="https://vercel.com/new/clone?repository-url=https://github.com/voxora-cloud/voxora"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L24 24H0L12 0Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Vercel</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Deploy to Vercel with automatic CI/CD and preview deployments.
            </p>
          </Link> */}

          <Link
            href="https://railway.app/new/template?template=https://github.com/voxora-cloud/voxora"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer w-72"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden p-4">
              <Image 
                src="/logos/Railway.png" 
                alt="Railway"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Railway</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              One-click deployment to Railway with automatic database provisioning.
            </p>
          </Link>
          <Link
            href="https://fly.io/app/new?repo=https://github.com/voxora-cloud/voxora"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer w-72"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden p-4">
              <Image 
                src="/logos/Docker.png" 
                alt="Docker"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Docker</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Deploy globally with Docker for containerized applications and consistent environments.
            </p>
          </Link>

          {/* <Link
            href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/voxora-cloud/voxora"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden p-4">
              <Image 
                src="/logos/DOCN.png" 
                alt="DigitalOcean"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">DigitalOcean</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Deploy to DigitalOcean App Platform with automatic scaling.
            </p>
          </Link> */}

          {/* <Link
            href="https://www.hostinger.com/vps-hosting"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden p-4">
              <Image 
                src="/logos/hostinger.png" 
                alt="Hostinger"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Hostinger</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Deploy on Hostinger VPS with affordable pricing and great performance.
            </p>
          </Link> */}
{/* 
          <Link
            href="https://aws.amazon.com/amplify/"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden p-4">
              <Image 
                src="/logos/aws.webp" 
                alt="AWS"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">AWS</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Deploy to AWS Amplify with enterprise-grade infrastructure.
            </p>
          </Link> */}

          {/* <Link
            href="https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_git_repo=https://github.com/voxora-cloud/voxora"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center glass-card p-8 rounded-2xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:glow-primary transition-all overflow-hidden p-4">
              <Image 
                src="/logos/googleCloud.png" 
                alt="Google Cloud"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Google Cloud</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Deploy to Google Cloud Platform with global reach and reliability.
            </p>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
