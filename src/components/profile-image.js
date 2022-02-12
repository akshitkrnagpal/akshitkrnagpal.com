import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`{
  file(relativePath: {eq: "profile-image.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 175, height: 175, layout: FIXED)
    }
  }
}
`;

const ProfileImage = ({ name: { firstname, lastname } }) => {
  const data = useStaticQuery(query);
  const profileImage = data.file.childImageSharp.gatsbyImageData;

  return (
    <div className='row'>
      <GatsbyImage
        image={profileImage}
        className='profile-image'
        alt={`${firstname} ${lastname}`} />
    </div>
  );
};

export default ProfileImage;
