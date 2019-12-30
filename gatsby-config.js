module.exports = {
    siteMetadata: {
        title: `Akshit Kr Nagpal`,
        author: `@akshitkrnagpal`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Muli`],
                display: 'swap',
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/images/`,
            },
        },
        `gatsby-transformer-sharp`,
    ],
};
