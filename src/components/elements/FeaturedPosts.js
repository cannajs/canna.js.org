import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin-bottom: 1rem;

  img {
    width: 100%;
    margin: 0;
  }
`

const getFeaturedPosts = (posts) => {
  return posts.filter(post => post.frontmatter.featured)
}

const FeaturedPosts = ({ posts }) => {
  const featuredPosts = getFeaturedPosts(posts)
  return (
    <Container>
      {featuredPosts.map((post, index) => (
        <div key={post.id}>
          <Link to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Link>
        </div>
      ))}
    </Container>
  )
}

export default FeaturedPosts
