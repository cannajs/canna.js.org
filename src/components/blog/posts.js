import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => (
  <div>
    {posts
      .filter(post => post.frontmatter.title.length > 0)
      .map((post, index) => <Post key={index} post={post} />)}
  </div>
);

export default Posts
