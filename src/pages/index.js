import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import ProfileCard from '../components/profile-card';

import profile from '../profile.json';

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const Root = () => {
    const data = useStaticQuery(query);
    const { title, description } = data.site.siteMetadata;

    return (
        <>
            <Helmet
                title={title}
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: description }]}
            />
            <ProfileCard profile={profile} />
        </>
    );
};

export default Root;
