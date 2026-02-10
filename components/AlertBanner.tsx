import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 text-center border-b border-primary/30 py-3 px-4">
      <div className="container mx-auto">
        <p className="text-center text-sm md:text-base text-foreground">
          🚀 <span className="font-semibold">We&apos;re live on Product Hunt!</span> Show your support and help us reach #1. 
          <Link 
            href="https://www.producthunt.com/posts/voxora" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 hover:text-[#ff8577] transition-colors underline underline-offset-4 font-semibold"
          >
            Support us on Product Hunt →
          </Link>
        </p>
      </div>
    </div>
  );
}
