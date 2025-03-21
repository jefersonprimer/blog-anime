"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      {children}
    </div>
  );
}
