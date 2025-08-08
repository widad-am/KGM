"use client";

import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, Grid } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

// Static imports from the folder you shared
import imgActyon from "@/sections/Explore KGM Lineup/20250122153850178_MRywMI.png";
import imgTorres from "@/sections/Explore KGM Lineup/20250122154121990_f0zi96.png";
import imgTorresEvx from "@/sections/Explore KGM Lineup/20250122154005965_NqrXBm.png";

type LineupCard = {
  id: number;
  title: string;
  headline: string;
  image: StaticImageData;
  href?: string;
};

const cards: LineupCard[] = [
  { id: 1, title: "Actyon", headline: "Ready. Set.\nActyon!", image: imgActyon, href: "#actyon" },
  { id: 2, title: "Torres", headline: "Unexpected\nAdventure", image: imgTorres, href: "#torres" },
  { id: 3, title: "Torres EVX", headline: "The Best of Both\nWorld - EV & SUV", image: imgTorresEvx, href: "#torres-evx" },
];

const ExploreLineup = () => {
  const [isBgmOn, setIsBgmOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = "/media/KGM_main_sound_400k-Cd1qYekB.mp3"; // ensure file exists
    audio.preload = "auto";
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleBgm = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (isBgmOn) {
        a.pause();
        setIsBgmOn(false);
      } else {
        await a.play();
        setIsBgmOn(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="relative bg-[#0b0d16] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1122] via-[#0b0d16] to-[#0b0d16]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#d4be83]">Explore KGM Lineup</h2>
          <a href="#models" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
            View All Model
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile/Tablet grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-[3px]">
          {cards.map((card, idx) => (
            <Card key={card.id} card={card} delay={idx * 0.1} />
          ))}
        </div>
      </div>

      {/* Full-bleed interactive row (desktop) */}
      <div className="hidden lg:block relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div
          className="flex gap-[3px]"
          onMouseLeave={() => setActiveIdx(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveIdx(null);
          }}
        >
          {cards.map((card, idx) => {
            const basisClass = activeIdx === null ? "basis-1/3" : activeIdx === idx ? "basis-1/2" : "basis-[25%]";
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                tabIndex={0}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                className={`group relative overflow-hidden rounded-none ring-0 ${basisClass} transition-[flex-basis] duration-300 ease-out`}
              >
                <CardInner card={card} />
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Floating controls */}
      <div className="hidden md:flex flex-col gap-3 fixed right-6 md:right-10 lg:right-14 bottom-28">
        <button onClick={toggleBgm} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors" aria-pressed={isBgmOn}>
          {isBgmOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white text-[10px] leading-tight">
          <Grid className="w-4 h-4 mb-0.5" />
          QUICK
        </button>
      </div>
    </section>
  );
};

export default ExploreLineup;

function Card({ card, delay }: { card: LineupCard; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-none ring-0"
    >
      <CardInner card={card} />
    </motion.article>
  );
}

function CardInner({ card }: { card: LineupCard }) {
  return (
    <>
      <div className="relative h-[360px] md:h-[420px] lg:h-[520px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-white/80 text-sm font-semibold mb-2">{card.title}</p>
        <h3 className="text-2xl md:text-3xl font-extrabold leading-snug whitespace-pre-line">{card.headline}</h3>
        <a href={card.href ?? '#'} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
