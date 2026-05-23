import Link from "next/link";
import Logo from "./logo";

type InteraOneLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  href?: string;
  tone?: "light" | "dark";
  color?: string;
  animate?: boolean;
  speed?: number;
  showBackgroundColor?: boolean;
};

export function InteraOneLogo({
  className = "",
  width = 40,
  height,
  href,
  tone = "light",
  color,
  animate = true,
  speed = 2,
  showBackgroundColor = true,
}: InteraOneLogoProps) {
  const size = height ? Math.max(width, height) : width;
  const logoColor = color ?? (tone === "dark" ? "#FFFFFF" : "#845C6C");
  const contentColor = tone === "dark" ? "#845C6C" : "#FFFFFF";

  const logo = (
    <Logo
      size={size}
      className={className}
      color={logoColor}
      contentColor={contentColor}
      animate={animate}
      speed={speed}
      showBackgroundColor={showBackgroundColor}
    />
  );

  if (!href) {
    return logo;
  }

  return (
    <Link aria-label="InteraOne home" href={href}>
      {logo}
    </Link>
  );
}
