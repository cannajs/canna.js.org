import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layouts'
import Posts from '../components/blog/posts'
import FeaturedPosts from '../components/elements/FeaturedPosts'

export default function Index ({ data }) {
  if (!data) return null

  let { edges: posts } = data.allMarkdownRemark
  let { description } = data.site.siteMetadata

  posts = posts.map(post => post.node)

  return (
    <Layout>
      <FeaturedPosts />
      <Posts posts={posts} />
      <Link to='/page/2'>← Previous</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
      filter: { frontmatter: { draft: { ne: true } } }
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
