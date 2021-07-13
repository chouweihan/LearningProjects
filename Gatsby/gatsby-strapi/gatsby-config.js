require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio project with Gatsby`,
    description: `Simple portfolio project using Gatsby, graphQL and Strapi`,
    titleTemplate: `%s | Gatsby Portfolio`,
    url: `https://portfolio-gatsby-project.netlify.app`,
    image: `/main.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cms-strapi-backend.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, "project"],
        singleTypes: [`about`],
      },
    },
  ],
}
