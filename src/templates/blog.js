import * as React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import Tags from '../elements/Tags'
import Tag from '../elements/Tag'
import Paragraph from '../elements/Paragraph'
import Timestamp from '../elements/Timestamp'
import Category from '../elements/Category'
import Layout from '../components/layout'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

export default function Template ({
  data
}) {
  const post = data.markdownRemark
  const meta = post.frontmatter
  const tags = meta.tags
  const title = meta.title
  const category = meta.categories.join('')

  return (
    <Layout>
      <Timestamp>
        <strong>
          <time dateTime={post.frontmatter.date}>
            {moment(post.frontmatter.date).format('MMMM Do YYYY • h:mm a')}
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
            <a href={`/tags/${tag}`} title={tag}>
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
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DDTHH:mm:ss.sssZ")
        path,
        tags,
        categories
      }
    }
  }
`
