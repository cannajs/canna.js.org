import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layouts'
import Posts from '../components/blog/Posts'
import FeaturedPosts from '../components/elements/FeaturedPosts'

export default function Index ({ data }) {
  if (!data) return null

  let { featuredPosts, posts } = data
  let { description } = data.site.siteMetadata

  posts = posts.edges.map(post => post.node)
  featuredPosts = featuredPosts.edges.map(post => post.node)

  return (
    <Layout>
      <FeaturedPosts posts={featuredPosts} />
      <Posts posts={posts} />
      <Link to='/page/2'>← Older</Link>
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
    featuredPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 6,
      filter: { frontmatter: { featured: { eq: true }, draft: { ne: true } } }
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            categories
            thumbnail
            description
            featured
            title
            draft
          }
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 6
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 650)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
  }
`
