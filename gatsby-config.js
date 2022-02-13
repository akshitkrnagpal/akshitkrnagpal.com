require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Muli`],
        display: 'swap',
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akshit Kr Nagpal`,
        short_name: `Akshit`,
        background_color: `white`,
        theme_color: `black`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-84508219-2`],
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-remove-serviceworker`,
  ],
};
