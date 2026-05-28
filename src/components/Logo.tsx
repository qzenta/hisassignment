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
      {/* ha monogram */}
      <svg
        width={Math.round(52 * s)}
        height={Math.round(40 * s)}
        viewBox="0 0 52 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* h — teal */}
        <path
          d="M2 4 L2 36 L2 36 M2 20 Q2 13 9 13 L16 13 Q23 13 23 20 L23 36"
          stroke="#00BFA5"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* a — navy, overlapping */}
        <path
          d="M29 14 Q29 9 35 9 L41 9 Q47 9 47 14 L47 36 M29 26 L47 26"
          stroke="#1B3A6B"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

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
