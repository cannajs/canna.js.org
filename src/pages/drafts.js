
import React from 'react'
import { graphql } from 'gatsby'

export default function Drafts ({ data }) {
  let { edges: posts } = data.allMarkdownRemark
  posts = posts.map(post => post.node)
  return (
    <div>POSTS</div>
  )
}

export const pageQuery = graphql`
  query DraftsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { draft: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            categories
            thumbnail
            draft
          }
        }
      }
    }
  }
`
