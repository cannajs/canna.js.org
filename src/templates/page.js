import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
// import Card from '../elements/Card'
import Posts from '../components/blog/posts'
import Layout from '../components/layouts'
import Pagination from '../components/elements/Pagination'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Container = styled.div`
  margin-bottom: 1rem;
`

export default function Page ({ pageContext, data }) {
  // const { description } = data.site.siteMetadata
  const { posts, page, pagesSum, prevPath, nextPath } = pageContext
  return (
    <Layout>
      <Posts posts={posts} />
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
