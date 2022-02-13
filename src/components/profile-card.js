import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import SocialLinks from './social-links';

const ProfileCard = ({ profile }) => {
  const { photo, name, headline, email, social, summary } = profile;
  const image = getImage(photo.gatsbyImageData);
  return (
    <main className="grid justify-center sm:max-w-sm gap-4">
      <GatsbyImage
        className="mx-auto my-0 rounded-full"
        image={image}
        alt={name}
      />
      <h1 className="text-4xl text-center">{name}</h1>
      <h2 className="text-xl text-center">{headline}</h2>
      <p className="text-base text-center text-slate-500">{summary}</p>
      <a
        className="text-base text-center text-slate-500"
        aria-label={email}
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {email}
      </a>
      <SocialLinks social={social} />
    </main>
  );
};
export default ProfileCard;
