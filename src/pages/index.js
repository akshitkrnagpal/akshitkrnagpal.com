import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import ProfileCard from '../components/profile-card';

import profile from '../profile.json';

const Root = ({ data }) => {
    const {
        name,
        titles,
        scholastic,
        email,
        socialLinks,
        resumeLink,
    } = profile;

    return (
        <>
            <Helmet title={data?.site?.siteMetadata?.title} />
            <ProfileCard
                profile={{
                    profileImage: data?.file?.childImageSharp?.fixed,
                    name,
                    titles,
                    scholastic,
                    email,
                    socialLinks,
                    resumeLink,
                }}
            />
        </>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        file(relativePath: { eq: "profile-image.jpeg" }) {
            childImageSharp {
                fixed(width: 175, height: 175) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default Root;
