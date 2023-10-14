"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SocialIcon } from "react-social-icons";
import image from "@/images/image.png";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="flex max-w-3xl flex-col-reverse gap-4">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="flex-1 space-y-4 px-8 text-center"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl tracking-wide text-slate-600 sm:text-3xl">
              Hey there!
            </h2>
            <p className="mt-4 text-sm leading-relaxed tracking-wide sm:text-base">
              My name is <span className="font-bold">Akshit Kr Nagpal</span> and
              I've been a self-taught Software Engineer for about a decade now.
              I started building websites when I was just{" "}
              <span className="italic">14</span> and I've always been really
              passionate about full-stack development. I'm known for my ability
              to deliver high-quality code at a fast pace and I'm also an open
              source hobbyist. If you're looking for someone who is driven,
              skilled, and always looking to learn and improve,
              <span className="italic">I'm your guy!</span>
            </p>
          </div>
          <div className="space-x-4">
            <SocialIcon
              bgColor="transparent"
              fgColor="black"
              target="_blank"
              url="https://www.linkedin.com/in/akshitkrnagpal"
            />
            <SocialIcon
              bgColor="transparent"
              fgColor="black"
              target="_blank"
              url="https://www.github.com/akshitkrnagpal"
            />
            <SocialIcon
              bgColor="transparent"
              fgColor="black"
              target="_blank"
              url="https://www.twitter.com/akshitkrnagpal"
            />
          </div>
        </motion.div>
        <div className="flex-1 px-8">
          <motion.figure
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-64 flex-col"
          >
            <Image
              className="aspect-square overflow-hidden rounded-full object-cover"
              src={image}
              width={840}
              height={936}
              alt="Akshit Kr Nagpal"
              priority
            />
          </motion.figure>
        </div>
      </div>
    </main>
  );
}
