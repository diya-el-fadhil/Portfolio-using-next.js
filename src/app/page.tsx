// pages/index.tsx
"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FloatingNav } from "../components/ui/floating-navbar"; 
import { HeroParallax } from "../components/ui/hero-parallax";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full">
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            DIYA EL FADHIL
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
        </div>
        <BackgroundBeams />
      </div>


      <FloatingNav navItems={[]} />

      <div className="mt-20">
        <HeroParallax products={[]} />
      </div>
    </div>
  );
}
