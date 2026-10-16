"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import HeroScene from "@/components/HeroScene";
import RotatingWord from "@/components/home/RotatingWord";

const words = ["models", "agents", "copilots", "pipelines"];

export default function Hero() {
  return (
    <section className="relative -mt-18 overflow-hidden pt-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(47_123_255/0.25),transparent_60%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-[1400px] items-center gap-10 px-5 py-20 sm:px-8 md:px-12 lg:grid-cols-2 lg:px-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted"
          >
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
            Enterprise AI security platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            The security layer for your
            <RotatingWord words={words} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            Discover every AI asset, close posture gaps, guard prompts at runtime and prove compliance — from one
            platform built specifically for AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-[0_0_32px_-6px_var(--color-accent)] transition hover:brightness-110"
            >
              Book a demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Explore the platform
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative aspect-square w-full max-w-[640px] justify-self-center"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
