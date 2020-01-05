import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query {
        file(relativePath: { eq: "profile-image.jpeg" }) {
            childImageSharp {
                fixed(width: 175, height: 175) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const ProfileImage = ({ name: { firstname, lastname } }) => {
    const data = useStaticQuery(query);
    const profileImage = data.file.childImageSharp.fixed;

    return (
        <div id='profile-image' className='row'>
            <Img
                className='profile-image'
                fixed={profileImage}
                alt={`${firstname} ${lastname}`}
            />
        </div>
    );
};

export default ProfileImage;
