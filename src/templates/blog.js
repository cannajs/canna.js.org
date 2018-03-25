import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'
import Tags from '../elements/Tags'
import Tag from '../elements/Tag'
import Paragraph from '../elements/Paragraph'
import Timestamp from '../elements/Timestamp'
import Category from '../elements/Category'

export default function Template ({
  data
}) {
  const post = data.markdownRemark
  const meta = post.frontmatter
  const tags = meta.tags
  const title = meta.title
  const category = meta.categories.join('')

  return (
    <div>
      <Category>
        <Link rel='category' to={`/category/${category}`} title={category}>
          {category}
        </Link>
      </Category>
      <h1>{title}</h1>
      <Timestamp>
        Posted by <strong>Editor</strong> on <strong><time dateTime={post.frontmatter.date}>{moment(post.frontmatter.date).format('MMMM Do YYYY • h:mm:ss a')}</time></strong>
      </Timestamp>
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Paragraph>
      <Tags>
        <strong>Find more content about</strong> {tags.map(tag => (
          <Tag key={tag}>
            <a href={`/tags/${tag}`} title={tag}>
              {tag}
            </a>
          </Tag>
        ))}
        &nbsp;&nbsp;☻
      </Tags>
    </div>
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
