import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-kashi.jpg"
        alt="Sunrise over the ancient ghats of Kashi along the Ganges river"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
          The Oldest Living City
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">
            Kashi{" "}
            <span className="text-accent">{"–"}</span>{" "}
            The Unexplored City
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70 md:text-xl">
          Unveil the secrets. Explore the hidden treasures of an ancient
          city that has witnessed the passage of five thousand years.
        </p>
        <a
          href="#unexplored"
          className="mt-10 inline-block rounded-full border-2 border-accent bg-accent/10 px-8 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          Explore Hidden Kashi
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-foreground/50">
          Scroll
        </span>
        <div className="h-10 w-5 rounded-full border-2 border-foreground/30">
          <div className="mx-auto mt-1.5 h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
