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
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-84508219-2`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-remove-serviceworker`,
  ],
};
