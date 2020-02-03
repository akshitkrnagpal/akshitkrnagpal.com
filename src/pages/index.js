import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import ProfileCard from '../components/profile-card';

const query = graphql`
    query {
        allData {
            edges {
                node {
                    name {
                        firstname
                        lastname
                    }
                    description
                    titles
                    scholastic {
                        title
                        place
                        link
                    }
                    social {
                        facebook
                        github
                        linkedin
                    }
                    contact {
                        email
                    }
                    resume
                }
            }
        }
    }
`;

const Root = () => {
    const data = useStaticQuery(query);
    const profile = data.allData.edges[0].node;
    const { name, description } = profile;
    return (
        <>
            <Helmet
                title={`${name.firstname} ${name.lastname}`}
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: description }]}
            />
            <ProfileCard profile={profile} />
        </>
    );
};

export default Root;
