import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layouts'
import Card from '../components/elements/Card'
import Posts from '../components/blog/Posts'
import Pagination from '../components/elements/Pager'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Container = styled.div`
  margin-bottom: 1rem;
`

export default function Tags ({ pageContext, data }) {
  const { posts, tag, pagesSum, page } = pageContext
  // const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <H1>{tag}</H1>
      <Posts posts={posts} withBorder />
      <Pagination path='tag' slug={tag} page={page} pagesSum={pagesSum} />
    </Layout>
  )
}
