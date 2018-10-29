import React from 'react'
import Post from './Post'

const Posts = ({ posts, withBorder }) => (
  <React.Fragment>
    {posts
      .filter(post => post.frontmatter.title.length > 0)
      .map((post, index) => <Post key={index} post={post} withBorder={withBorder} />)}
  </React.Fragment>
);

export default Posts
