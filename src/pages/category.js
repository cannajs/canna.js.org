import React from 'react'
import kebabCase from 'lodash/kebabcase'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const CategoriesPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Categories</h1>
      <ul>
        {group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
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