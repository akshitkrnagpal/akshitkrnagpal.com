import Image from "next/image";

import image from "@/images/image.jpg";
import { title } from "@akshitkrnagpal/data";
import { SocialIcon } from "@/components/social-icon";
import {
  MotionDiv,
  MotionFigure,
  MotionSection,
} from "@/components/framer-motion-wrapper";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full items-center justify-center">
      <MotionSection
        initial={{
          y: 50,
        }}
        animate={{
          y: -50,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="flex max-w-3xl h-full flex-col-reverse gap-4 py-12"
      >
        <MotionDiv
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
            <h1 className="sr-only">{title}</h1>
            <h2 className="text-2xl tracking-wide text-slate-600 sm:text-3xl">
              Hey there!
            </h2>
            <p className="mt-4 text-sm leading-relaxed tracking-wider sm:text-base">
              My name is <span className="font-bold">Akshit Kr Nagpal</span> and
              I've been a self-taught Software Engineer for more than a decade
              now. I started building websites when I was just{" "}
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
        </MotionDiv>
        <div className="flex-1 px-8">
          <MotionFigure
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
              sizes="256px"
              alt="Akshit Kr Nagpal"
              priority
            />
          </MotionFigure>
        </div>
      </MotionSection>
    </main>
  );
}
