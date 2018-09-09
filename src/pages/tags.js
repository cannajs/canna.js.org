import * as React from 'react'
import kebabCase from 'lodash/kebabcase'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const UL = styled.div``
const LI = styled.div``

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const TagsHeader = H1.extend`
  border-bottom: 1px solid;
`

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } }
}) => (
  <React.Fragment>
    <Helmet title={title} />
    <Layout>
      <TagsHeader>Tags</TagsHeader>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  </React.Fragment>
)

export default TagsPage

export const pageQuery = graphql`
query TagsQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`
