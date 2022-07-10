import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { SocialIcon } from "react-social-icons";

import image from "../assets/image.webp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Akshit Kr Nagpal | Software Engineer</title>
        <meta name="description" content="Software Engineer Developer" />
      </Head>
      <main className="flex items-center justify-center h-full font-raleway">
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl">
          <div className="flex-1 px-8 space-y-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-semibold text-slate-800 tracking-wide mt-8">
                Akshit Kr Nagpal
              </h1>
              <h2 className="text-3xl text-slate-600 tracking-wide">
                Software Engineer
              </h2>
              <p className="text-base leading-relaxed tracking-wide mt-4">
                A self-taught Software Engineer who started building websites at
                the age of 14 (nearly a decade ago). With a passion for
                full-stack development and a history of delivering high-quality
                code at high velocity. Open source hobbyist.
              </p>
            </div>
            <div className="space-x-4">
              <SocialIcon
                bgColor="transparent"
                fgColor="black"
                url="https://www.linkedin.com/in/akshitkrnagpal"
              />
              <SocialIcon
                bgColor="transparent"
                fgColor="black"
                url="https://www.github.com/akshitkrnagpal"
              />
              <SocialIcon
                bgColor="transparent"
                fgColor="black"
                url="https://www.twitter.com/akshitkrnagpal"
              />
            </div>
          </div>
          <div className="flex-1 px-8">
            <figure className="flex flex-col max-w-96">
              <Image
                priority
                className="rounded-md"
                src={image}
                alt="Akshit Kr Nagpal"
              />
              <figcaption className="text-slate-500 text-center text-sm py-1">
                Utrecht, Netherlands.
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
