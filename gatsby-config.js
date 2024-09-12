/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `This a sample portfolio website.`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`,
    //   }
    //
    // },
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publications`,
        path: `${__dirname}/Publication`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-mdx",
  ]
};