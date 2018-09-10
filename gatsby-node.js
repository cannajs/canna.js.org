const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  /**
   * Posts
   */
  return graphql(`
    {
      publishedPosts: allMarkdownRemark(
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
              featured
              title
              draft
            }
          }
        }
      }
      draftPosts: allMarkdownRemark(
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
              featured
              title
              draft
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      return Promise.reject(results.errors)
    }

    const published = results.data.publishedPosts.edges
    const drafts = results.data.draftPosts.edges

    generateContent(createPage, published)
    generateContent(createPage, drafts)

    createTagPages(createPage, published)
    createCategoryPages(createPage, published)
  })
}

function generateContent (createPage, posts) {
  const blogPostTemplate = path.resolve('src/templates/post.js')

  /**
   * Posts
   */
  posts.forEach(({ node, next }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        mainPostPath: node.frontmatter.path,
        nextPostPath: next ? next.frontmatter.path : 'none'
      }
    })
  })
}

/**
 * Tags
 */
function createTagPages (createPage, edges) {
  const tagTemplate = path.resolve('src/templates/tags.js')
  const posts = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.split(', ').forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = []
        }
        posts[tag].push(node)
      })
    }
  })

  Object.keys(posts).forEach(tagName => {
    const pageSize = 5
    const pagesSum = Math.ceil(posts[tagName].length / pageSize)

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path:
          page === 1
            ? `/tag/${tagName.toLowerCase()}`
            : `/tag/${tagName.toLowerCase()}/page/${page}`,
        component: tagTemplate,
        context: {
          posts: paginate(posts[tagName], pageSize, page),
          tag: tagName,
          pagesSum,
          page
        }
      })
    }
  })
}

/**
 * Categories
 */
function createCategoryPages (createPage, edges) {
  const categoryTemplate = path.resolve('src/templates/categories.js')
  const posts = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.categories) {
      node.frontmatter.categories.split(', ').forEach(category => {
        if (!posts[category]) {
          posts[category] = []
        }
        posts[category].push(node)
      })
    }
  })

  Object.keys(posts).forEach(categoryName => {
    const pageSize = 5
    const pagesSum = Math.ceil(posts[categoryName].length / pageSize)

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path:
          page === 1
            ? `/category/${categoryName.toLowerCase()}`
            : `/category/${categoryName.toLowerCase()}/page/${page}`,
        component: categoryTemplate,
        context: {
          posts: paginate(posts[categoryName], pageSize, page),
          category: categoryName,
          pagesSum,
          page
        }
      })
    }
  })
}

function paginate (array, pageSize, pageNumber) {
  return array.slice(0).slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}
