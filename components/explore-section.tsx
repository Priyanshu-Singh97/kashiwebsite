"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const exploreCards = [
  {
    category: "Hidden Temples",
    title: "The 56 Ganesh Temples",
    image: "/images/hidden-temple.jpg",
    excerpt:
      "A sacred ring of 56 Ganesh temples encircles Kashi, forming an invisible protective barrier. Most visitors never discover more than a handful.",
    details:
      "These temples, dedicated to Lord Ganesha, are arranged in concentric circles around the city. The innermost circle contains temples at the most sacred spots, while the outer rings extend to the city's ancient boundaries. Walking the complete circuit is considered one of the most powerful pilgrimages in Kashi, yet fewer than one in a thousand pilgrims ever complete it. Each temple holds unique legends, from the Ganesh that grants children to the one that removes the deepest sorrows.",
  },
  {
    category: "Secret Ghats",
    title: "The Forgotten Steps of Meer Ghat",
    image: "/images/manikarnika-ghat.jpg",
    excerpt:
      "While millions flock to Dashashwamedh, Meer Ghat sits in contemplative silence, its ancient stones holding secrets of medieval Sufi saints.",
    details:
      "Meer Ghat is named after a Sufi saint whose memory has almost faded from public consciousness. The ghat features exquisite Mughal-era carvings and a small shrine that blends Hindu and Islamic architectural elements, a testament to Kashi's syncretic soul. At dawn, local wrestlers practice their ancient art at an akhara nearby, maintaining a tradition that predates the British arrival by centuries.",
  },
  {
    category: "Ancient Lanes",
    title: "Bengali Tola & The Scholar's Quarter",
    image: "/images/narrow-lanes.jpg",
    excerpt:
      "A labyrinth of lanes so narrow that sunlight barely touches the ground, hiding Sanskrit schools that have operated for over 500 years.",
    details:
      "Bengali Tola was historically the quarter where Bengali scholars, musicians, and intellectuals settled, drawn by Kashi's magnetic spiritual energy. The lanes are lined with ancient buildings whose walls are carved with Sanskrit verses. Hidden behind unassuming doors are pathshalas (traditional schools) where students still learn the Vedas through oral transmission, exactly as their ancestors did thousands of years ago. The area also houses some of the finest classical musicians in India.",
  },
  {
    category: "Sadhus & Aghoris",
    title: "The Aghori Way of Death",
    image: "/images/sadhu.jpg",
    excerpt:
      "At the burning ghats, Aghori sadhus practice ancient rites that challenge every boundary between sacred and profane.",
    details:
      "The Aghoris are perhaps the most misunderstood spiritual practitioners in India. Their practices, which include meditating on cremation grounds, smearing themselves with ash from funeral pyres, and using human skulls as ritual vessels, are rooted in a profound philosophy: that nothing in creation is impure, and that confronting death directly is the fastest path to liberation. In Kashi, they find their spiritual home at Manikarnika Ghat, where the cremation fires have not been extinguished for thousands of years.",
  },
  {
    category: "Midnight Rituals",
    title: "The Midnight Aarti at Manikarnika",
    image: "/images/ganga-aarti.jpg",
    excerpt:
      "When the city sleeps, a different Kashi awakens. The midnight ceremonies at the burning ghat reveal the city's deepest spiritual layer.",
    details:
      "While the famous Ganga Aarti at Dashashwamedh Ghat draws tourists by the thousands, the true spiritual heart of Kashi beats at midnight at Manikarnika. Here, in the glow of eternal cremation fires, priests perform rituals that date back to before recorded history. The atmosphere is not of mourning but of celebration: each soul released is considered to have achieved the ultimate liberation. The sound of mantras, the crackle of sacred fires, and the timeless flow of the Ganga create an experience that transcends the ordinary.",
  },
  {
    category: "Living Heritage",
    title: "Banarasi Weaving Traditions",
    image: "/images/banarasi-saree.jpg",
    excerpt:
      "In dark rooms across the city, master weavers create silk masterpieces using techniques passed down through 40 generations.",
    details:
      "The Banarasi saree is not just a textile, it is a living art form that embodies over 2,000 years of artistic evolution. Master weavers, many from Muslim families who have practiced this craft since the Mughal era, create intricate patterns using real gold and silver thread (zari). A single saree can take up to six months to complete. The patterns include motifs drawn from Mughal architecture, Hindu mythology, and Persian art, reflecting Kashi's cultural confluence. Today, fewer than 100 master weavers remain who can create the most complex traditional designs.",
  },
];

export function ExploreSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="explore"
      className="relative bg-secondary py-24 md:py-32"
      aria-label="Explore the unexplored aspects of Kashi"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 md:mb-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
            The Main Highlight
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            The Unexplored Kashi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 text-pretty">
            Beyond the well-trodden tourist paths lies another Kashi entirely.
            These are the secrets that the city reveals only to those who seek
            with patience and reverence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card, index) => (
            <ExploreCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreCard({
  card,
  index,
}: {
  card: (typeof exploreCards)[number];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <article
      ref={ref}
      className={`group flex flex-col overflow-hidden border border-border bg-card transition-all duration-700 hover:border-accent/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="absolute top-4 left-4 bg-accent/90 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-accent-foreground">
          {card.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 font-serif text-lg font-bold text-card-foreground md:text-xl">
          {card.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-card-foreground/60">
          {card.excerpt}
        </p>

        {/* Expandable Details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm leading-relaxed text-card-foreground/50 border-t border-border pt-4">
            {card.details}
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent/80"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Read Less" : "Read More"}
          <svg
            className={`h-3 w-3 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
