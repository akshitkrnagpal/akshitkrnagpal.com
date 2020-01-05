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
            }
        }
    }
`;

const Root = () => {
    const data = useStaticQuery(query);
    const title = data.site.siteMetadata.title;

    return (
        <>
            <Helmet title={title} />
            <ProfileCard profile={profile} />
        </>
    );
};

export default Root;
