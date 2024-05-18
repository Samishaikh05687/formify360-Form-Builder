"use client"
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode, useEffect, useState } from "react";

function Layout({ children }: { children: ReactNode }) {
  // Hydration-safe approach to avoid client-side only changes affecting HTML structure
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <section className="flex gap-4 items-center">
          {mounted && <ThemeSwitcher />}
          {mounted && <UserButton afterSignOutUrl="/sign-in" />}
        </section>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}

export default Layout;
