import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Posts from '../components/blog/Posts'
import Layout from '../components/layouts'
import Pagination from '../components/elements/Pagination'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

export default function Page ({ pageContext, data }) {
  // const { description } = data.site.siteMetadata
  const { posts, page, pagesSum, prevPath, nextPath } = pageContext
  return (
    <Layout>
      <H1>Page {page}</H1>
      <Posts posts={posts} withBorder />
      <Pagination page={page} pagesSum={pagesSum} prevPath={prevPath} nextPath={nextPath} />
    </Layout>
  )
}

export const pagesQuery = graphql`
  query PagesSiteMetadata {
    site {
      siteMetadata {
        description
      }
    }
  }
`
