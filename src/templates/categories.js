import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Card from '../components/elements/Card'
import Layout from '../components/layouts'
import Posts from '../components/blog/Posts'
import Pagination from '../components/elements/Pager'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Container = styled.div`
  margin-bottom: 1rem;
`

const Categories = ({ pageContext, data }) => {
  const { posts, category, pagesSum, page } = pageContext
  // const categoryHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} in "${category}"`
  return (
    <Layout>
      <H1>{category}</H1>
      <Posts posts={posts} withBorder />
      <Pagination path='category' slug={category} page={page} pagesSum={pagesSum} />
    </Layout>
  )
}

export default Categories
