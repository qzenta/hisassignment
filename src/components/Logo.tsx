import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const heights = { sm: 36, md: 56, lg: 80 };

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const h = heights[size];
  // Maintain the logo's natural aspect ratio (approx square crop)
  const w = h;

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="His Assignment Payroll Solutions"
        width={w}
        height={h}
        className="object-contain"
        priority
      />
    </div>
  );
}
