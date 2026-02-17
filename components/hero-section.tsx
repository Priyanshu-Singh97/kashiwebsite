"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/images/hero-kashi.jpg"
          alt="Sunrise over the ancient ghats of Kashi on the banks of the sacred Ganges"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-accent animate-fade-in-up">
          Unveil the Secrets
        </p>
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl animate-fade-in-up delay-100 text-balance">
          Kashi
        </h1>
        <p className="mb-2 font-serif text-xl text-foreground/80 md:text-2xl lg:text-3xl animate-fade-in-up delay-200 italic">
          The Unexplored City
        </p>
        <p className="mb-10 max-w-xl text-base text-foreground/60 md:text-lg animate-fade-in-up delay-300 text-pretty">
          Walk through ancient lanes older than time itself. Discover hidden
          temples, secret rituals, and mysteries that have whispered through
          millennia in the world{"'"}s oldest living city.
        </p>
        <a
          href="#explore"
          className="group inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-accent transition-all duration-500 hover:bg-accent hover:text-accent-foreground animate-fade-in-up delay-400"
        >
          Explore Hidden Kashi
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-foreground/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
