/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const _ = require('lodash')
// const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'File') {
    createNodeField({
      node,
      name: 'slug',
      value: path.basename(node.relativePath, '.md')
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/blog.js')
  const categoryTemplate = path.resolve('src/templates/category.js')
  const tagTemplate = path.resolve('src/templates/tags.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              tags
              categories
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path,
        component: blogPostTemplate
      })
    })

    let tags = []

    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag
        }
      })
    })

    let categories = []

    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.categories')) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })

    categories = _.uniq(categories)

    categories.forEach(category => {
      createPage({
        path: `/category/${_.kebabCase(category)}/`,
        component: categoryTemplate,
        context: {
          category
        }
      })
    })
  })
}
