import * as React from 'react'
import kebabCase from 'lodash/kebabcase'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const UL = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
`
const LI = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const CategoryHeader = H1.extend`
  border-bottom: 1px solid;
`

const CategoriesPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Helmet title={title} />
    <div>
      <CategoryHeader>Categories</CategoryHeader>
      <UL>
        {group.map(category => (
          <LI key={category.fieldValue}>
            <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue}
            </Link>
          </LI>
        ))}
      </UL>
    </div>
  </Layout>
)

export default CategoriesPage

export const pageQuery = graphql`
query CategoriesQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___categories) {
      fieldValue
      totalCount
    }
  }
}
`
