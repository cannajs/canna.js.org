import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../elements/Card'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Container = styled.div`
  margin-bottom: 1rem;
`

const Tags = ({ pageContext, data }) => {
  if (!data) return null

  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <H1>{tagHeader}</H1>
      {edges.map(({ node }) => {
        const { path, title, thumbnail } = node.frontmatter
        const { excerpt } = node
        return (
          <Container>
            <Card title={title} content={excerpt} thumbnail={thumbnail} path={path} />
          </Container>
        )
      })}
      <Link to='/tags'>All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 600)
          id
          frontmatter {
            title
            path,
            thumbnail
          }
        }
      }
    }
  }
`
