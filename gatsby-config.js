/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/klucze",
    siteMetadata: {
        title: ``,
        description: ``,
        author: `kluczezamkiklamki`,
        siteUrl: `https://kluczezamkiklamki.pl`,
    },
    plugins: [
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `efce9b9c25b9ef09a2c330a014e371`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kajaki Po Tanwi`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `standalone`,
                icon: `./src/assets/favicon.png`,
            },
        },
    ],
};
