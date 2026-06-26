"use client";

interface FlagIconProps {
  code: string;
  size?: string;
  className?: string;
}

export default function FlagIcon({ code, size = "1.2em", className = "" }: FlagIconProps) {
  return (
    <span
      className={`fi fi-${code} ${className}`}
      style={{ fontSize: size, lineHeight: 1 }}
    />
  );
}
