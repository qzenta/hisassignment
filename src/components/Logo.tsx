import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

export default function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const scales = { sm: 0.6, md: 1, lg: 1.5 };
  const s = scales[size];
  const textColor = variant === "white" ? "#FFFFFF" : "#0F172A";
  const taglineColor = variant === "white" ? "#CBD5E1" : "#94A3B8";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* ha monogram — 3D brand mark */}
      <Image
        src="/ha-icon.png"
        alt=""
        width={Math.round(64 * s)}
        height={Math.round(60 * s)}
        className="object-contain"
        priority
        aria-hidden="true"
      />

      {/* wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            color: textColor,
            fontSize: `${Math.round(16 * s)}px`,
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          HIS ASSIGNMENT
        </span>
        <span
          style={{
            color: taglineColor,
            fontSize: `${Math.round(9 * s)}px`,
            fontWeight: 400,
            letterSpacing: "0.2em",
          }}
        >
          PAYROLL PERFECTED
        </span>
      </div>
    </div>
  );
}
