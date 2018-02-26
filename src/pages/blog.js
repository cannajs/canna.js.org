import * as React from 'react'
import { styled } from 'styletron-react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'
import Category from '../elements/Category'
import Timestamp from '../elements/Timestamp'

const Title = styled('h1', {
  textAlign: 'center'
})

const Posts = styled('div', {
  marginBottom: '1rem',
  paddingBottom: '4rem',
  borderBottom: '1px solid black',
  ':last-child': {
    borderBottom: 0
  }
})

const Label = styled('span', {
  color: 'pink'
})

function Blog({ data, transition }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div style={transition && transition.style}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          const meta = post.frontmatter
          const title = meta.title
          const category = meta.categories
          return (
            <Posts key={post.id}>
              <Category>
                <Label>In</Label>&nbsp;<Link rel='category' to={`/category/${category}`} title={category}>{category}</Link>
              </Category>
              <Link to={post.frontmatter.path}>
                <h1>{post.frontmatter.title}</h1>
              </Link>
              <Timestamp>
                Posted by <strong>Editor</strong> on <strong><time dateTime={post.frontmatter.date}>{moment(post.frontmatter.date).format('MMMM Do YYYY • h:mm:ss a')}</time></strong>
              </Timestamp>
              <p>{post.excerpt}</p>
            </Posts>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DDTHH:mm:ss.sssZ")
            path
            categories
          }
        }
      }
    }
  }
`

export default Blog