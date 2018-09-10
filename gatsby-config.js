module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: 'Michael Scott Hertzberg',
    title: '420bytes',
    description: '',
    siteUrl: ''
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/components/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-paginate',
      options: {
        sources: [
          {
            path: '/page',
            template: `${__dirname}/src/templates/page.js`,
            serialize: results => results.allMarkdownRemark.edges,
            query: `{
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                filter: { frontmatter: { draft: { ne: true } } }
              ) {
                edges {
                  next {
                    frontmatter {
                      path
                    }
                  }
                  node {
                    excerpt(pruneLength: 650)
                    html
                    id
                    frontmatter {
                      date
                      path
                      tags
                      categories
                      thumbnail
                      title
                      draft
                    }
                  }
                }
              }
            }`,
          },
          {
            path: '/drafts/page',
            template: `${__dirname}/src/templates/page.js`,
            serialize: results => results.allMarkdownRemark.edges,
            query: `{
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                filter: { frontmatter: { draft: { eq: true } } }
              ) {
                edges {
                  next {
                    frontmatter {
                      path
                    }
                  }
                  node {
                    excerpt(pruneLength: 650)
                    html
                    id
                    frontmatter {
                      date
                      path
                      tags
                      categories
                      thumbnail
                      title
                      draft
                    }
                  }
                }
              }
            }`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'img'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_self',
            rel: 'nofollow'
          }
        }, {
          resolve: 'gatsby-remark-copy-linked-files'
        }]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-plugin-canonical-urls',
    //   options: {
    //     siteUrl: ''
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Bongs and Batteries',
    //     short_name: 'BandB',
    //     start_url: '/',
    //     background_color: '#660000',
    //     theme_color: '#ffc0cb'
    //   }
    // },
    // 'gatsby-plugin-feed',
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'YOUR_GOOGLE_TAGMANAGER_ID',
    //     includeInDevelopment: false
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     head: false
    //     // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics#the-anonymize-option
    //     anonymize: true
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           siteUrl
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges
    //             .filter(post => !post.node.frontmatter.draft)
    //             .map(edge => {
    //               return Object.assign({}, edge.node.frontmatter, {
    //                 description: edge.node.excerpt,
    //                 url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
    //                 guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
    //                 custom_elements: [{ 'content:encoded': edge.node.html }],
    //               });
    //             });
    //         },
    //         setup: ({
    //           query: {
    //             site: { siteMetadata },
    //           },
    //         }) => {
    //           return {
    //             title: siteMetadata.title,
    //             description: siteMetadata.description,
    //             feed_url: siteMetadata.siteUrl + `/blog/rss.xml`,
    //             site_url: siteMetadata.siteUrl,
    //             generator: `GatsbyJS`,
    //           };
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] }
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 frontmatter {
    //                   title
    //                   date
    //                   path
    //                   draft
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: '/rss.xml',
    //       },
    //     ],
    //   },
    // },
  ]
}
