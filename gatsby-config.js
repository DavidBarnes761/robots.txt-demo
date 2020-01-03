/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'BroadLume-Website',
    siteUrl: 'https://www.broadlume.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.broadlume.com`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        exclude: [``],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.broadlume.com',
        sitemap: 'https://www.broadlume.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     // The base url to your WP site.
    //     baseUrl: 'blog.broadlume.com',
    //     // WP.com sites set to true, WP.org set to false
    //     hostingWPCOM: false,
    //     // The protocol. This can be http or https.
    //     protocol: 'https',
    //     // Use 'Advanced Custom Fields' Wordpress plugin
    //     useACF: false,
    //     auth: {},
    //     // Set to true to debug endpoints on 'gatsby build'
    //     verboseOutput: false,
    //   },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Floorforce',
        short_name: 'Floorforce',
        icon: 'src/img/apple-touch-icon.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
