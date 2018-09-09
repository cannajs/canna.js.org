import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Card from '../elements/Card'
import Layout from '../components/layout'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Container = styled.div`
  margin-bottom: 1rem;
`

const Categories = ({ pageContext, data }) => {
  if (!data) return null

  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} in "${category}"`

  return (
    <Layout>
      <H1>{categoryHeader}</H1>
      {edges.map(({ node }) => {
        const { path, title, thumbnail } = node.frontmatter
        const { excerpt } = node
        return (
          <Container key={path}>
            <Card title={title} content={excerpt} thumbnail={thumbnail} path={path} />
          </Container>
        )
      })}
      <Link to='/category'>All categories</Link>
    </Layout>
  )
}

export default Categories

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
