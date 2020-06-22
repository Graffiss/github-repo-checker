require("dotenv").config()

const {
  NODE_ENV,
  TOKEN,
  SITE_URL,
  URL: NETLIFY_SITE_URL = SITE_URL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const netlifyProduction = NETLIFY_ENV === "production"
const siteUrl = netlifyProduction
  ? SITE_URL || NETLIFY_SITE_URL
  : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `App'n'roll Starter`,
    description: `Application made by App'n'roll`,
    author: `@appnroll`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/appnroll.png",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand:400,500"],
        },
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql",
        token: TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `{
          organization(login: "Appnroll") {
            avatarUrl
            description
            name
            websiteUrl
            location
          }
        }`,

        // variables: defaults to variables needed for a search query
        //variables:
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
