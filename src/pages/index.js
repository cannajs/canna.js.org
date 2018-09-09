import * as React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import moment from 'moment'
import Layout from '../components/layout'
import Category from '../elements/Category'
import Timestamp from '../elements/Timestamp'
import FeaturedPosts from '../elements/FeaturedPosts'
import Card from '../elements/Card'

const H1 = styled.h1``

const Posts = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 4rem;
`

const Label = styled.span``

function Blog ({ data, transition }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <FeaturedPosts />
      <div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            const meta = post.frontmatter
            const title = meta.title
            const category = meta.categories
            const thumbnail = meta.thumbnail
            return (
              <Posts key={post.id}>
                <Category>
                  <Label>Filed to</Label>&nbsp;<Link rel='category' to={`/category/${category}`} title={category}>{category}</Link>
                </Category>
                <Link to={post.frontmatter.path}>
                  <H1>{title}</H1>
                </Link>
                <Timestamp>
                  <strong><time dateTime={post.frontmatter.date}>{moment(post.frontmatter.date).format('MMMM Do YYYY • h:mm a')}</time></strong>
                </Timestamp>
                <Card content={post.excerpt} thumbnail={thumbnail} path={post.frontmatter.path} />
              </Posts>
            )
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 600)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DDTHH:mm:ss.sssZ")
            path
            categories,
            thumbnail
          }
        }
      }
    }
  }
`

export default Blog
