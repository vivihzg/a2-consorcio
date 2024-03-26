/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `A2 Consórcios`,
    description: `Negociação, avaliação, assessoramento e compra e venda de consórcios contemplados e não contemplados.`,
    author: `@a2consorcios`,
    siteUrl: `https://a2consorcios.com.br/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A2-Consórcios`,
        short_name: `Consórcios`,
        start_url: `/`,
        background_color: `#024f5f`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
        options: {
          google: {
            families: [`Montserrat:100,200,300,400,500,600,700,800`, `sans-serif`]
          }
        }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-9QCD0ER9NB",
        head: true,
        anonymize: true,
      },
    },
  ],
}
