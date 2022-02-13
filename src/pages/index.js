import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import ProfileCard from '../components/profile-card';

const query = graphql`
  query {
    graphCmsProfile {
      id
      name
      headline
      email
      summary
      photo {
        gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
      }
      social {
        ... on GraphCMS_Social {
          id
          website
          url
        }
      }
    }
  }
`;

const Root = () => {
  const data = useStaticQuery(query);
  const { name, headline, summary } = data.graphCmsProfile;
  return (
    <div className="container">
      <Helmet
        title={`${name} | ${headline}`}
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: summary }]}
      />
      <ProfileCard profile={data.graphCmsProfile} />
    </div>
  );
};

export default Root;
