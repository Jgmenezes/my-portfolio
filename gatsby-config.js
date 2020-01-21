module.exports = {
  siteMetadata: {
    title: `João Guilherme Menezes`,
    description: `João Guilherme is a frontend developer from Rio de Janeiro, Brazil. He works at Pareto Group and loves code beautifully things.`,
    author: `@jgmenezes`,
    siteUrl: `https://jgmenezes.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `João Guilherme Menezes`,
        short_name: `João Guilherme Menezes`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/img/avatar.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ],
}
