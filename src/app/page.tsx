"use client";

import {
  motion,
  useAnimationFrame,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 500,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textPosition = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);
  const skewFactor = useTransform(smoothVelocity, [-1000, 1000], [15, -15]);
  const skew = useSpring(0, { bounce: 0, visualDuration: 0.1 });

  useAnimationFrame(() => {
    skew.set(skewFactor.get());
  });

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="bg-neutral-50 h-screen w-full flex items-center justify-center">
        <h1 className="text-8xl font-bold">Hero Section</h1>
      </section>
      <section className="relative h-[300vh] w-full" ref={container}>
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <motion.div
            className="absolute w-full h-full"
            style={{
              scale: imageScale,
            }}
          >
            <Image
              className="object-cover"
              src="/bg-image.jpg"
              alt="Racecar driver"
              fill
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/70 w-full h-full object-cover" />
          <motion.h1
            className="uppercase font-bold text-white text-[10rem] text-nowrap"
            style={{ x: textPosition, skew }}
          >
            {"It's more about hard work than talent"}
          </motion.h1>
        </div>
      </section>
      <section className="bg-red-50 h-screen w-full flex items-center justify-center">
        <h1 className="text-8xl font-bold">Another Section</h1>
      </section>
    </div>
  );
}
