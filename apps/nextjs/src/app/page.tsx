import Image from "next/image";

import { SocialIcon } from "react-social-icons";
import image from "@/images/image.png";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="flex max-w-3xl flex-col-reverse gap-4 md:flex-row">
        <div className="flex-1 space-y-4 px-8 text-center md:text-left">
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
        </div>
        <div className="flex-1 px-8">
          <figure className="flex flex-col">
            <Image
              className="aspect-square overflow-hidden rounded-full object-cover md:aspect-auto md:rounded-md"
              src={image}
              width={840}
              height={936}
              alt="Akshit Kr Nagpal"
              priority
            />
            <figcaption className="hidden justify-center space-x-1 py-1 text-center text-sm text-slate-500 md:flex">
              <a
                className="text-black underline"
                href="https://www.midjourney.com/"
              >
                Midjourney
              </a>
              <span> thinks I look like this.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}
