import * as React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import Tags from '../components/elements/Tags'
import Tag from '../components/elements/Tag'
import Paragraph from '../components/elements/Paragraph'
import Timestamp from '../components/elements/Timestamp'
import Category from '../components/elements/Category'
import Layout from '../components/layouts'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

export default function Template ({ data }) {
  const { mainPost: post } = data
  const { nextPost: next } = data
  const { siteUrl } = data.site.siteMetadata

  // const isProduction = process.env.NODE_ENV === 'production'
  // const fullUrl = `${siteUrl}${post.frontmatter.path}`

  const meta = post.frontmatter
  const tags = meta.tags.split(',')
  const date = meta.date
  const title = meta.title
  const category = meta.categories

  return (
    <Layout>
      <Timestamp>
        <strong>
          <time dateTime={date}>
            {moment(date).format('MMMM Do YYYY • h:mm a')}
          </time>
        </strong>
      </Timestamp>
      <H1>{title}</H1>
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Paragraph>
      <Tags>
        <strong>Read more about</strong> {tags.map(tag => (
          <Tag key={tag}>
            <a href={`/tag/${tag}`} title={tag}>
              {tag}
            </a>
          </Tag>
        ))}
        &nbsp;&nbsp;☻
      </Tags>
      <Category>
        Filed to &nbsp;
        <Link rel='category' to={`/category/${category}`} title={category}>
          {category}
        </Link>
      </Category>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($mainPostPath: String!, $nextPostPath: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    mainPost: markdownRemark(frontmatter: { path: { eq: $mainPostPath } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        categories
        title
        draft
      }
    }
    nextPost: markdownRemark(frontmatter: { path: { eq: $nextPostPath } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        categories
        title
        draft
      }
    }
  }
`
