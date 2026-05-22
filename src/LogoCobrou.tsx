interface LogoCobrouProps {
  dark?: boolean;
  size?: number;
  className?: string;
}

export function LogoCobrou({ dark = false, size = 28, className = '' }: LogoCobrouProps) {
  const textColor = dark ? '#fafaf9' : '#111111';
  const markColor = dark ? '#52b788' : '#1a472a';
  const accentColor = '#39ff14';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 9 31
             C 9 25.5, 15.5 25.5, 15.5 20
             C 15.5 14.5, 9 14.5, 9 9
             C 9 5, 12.5 3, 16 4.5
             C 19.5 6, 21.5 9.5, 25 9.5
             C 28.5 9.5, 32 8, 32 11.5
             C 32 15, 28.5 16.5, 25.5 18
             C 22.5 19.5, 21 23, 21 27
             C 21 31.5, 24.5 34.5, 28 33"
          stroke={markColor}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="28" cy="33" r="2" fill={markColor} />
        <circle cx="16.2" cy="4.8" r="1" fill={accentColor} />
      </svg>
      <span
        className="font-semibold tracking-[-0.03em] leading-none"
        style={{
          fontSize: size * 0.58,
          color: textColor,
        }}
      >
        cobrou
      </span>
    </div>
  );
}
