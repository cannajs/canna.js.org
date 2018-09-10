import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'gatsby'
import Category from '../elements/Category'
import Timestamp from '../elements/Timestamp'
import Card from '../elements/Card'

const Posts = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 4rem;
`

const H1 = styled.h1``

const Label = styled.span``

const Post = ({ post }) => {
  const meta = post.frontmatter
  const title = meta.title
  const category = meta.categories
  const thumbnail = meta.thumbnail
  return (
    <Posts key={post.id}>
      <Category>
        <Label>Filed to</Label>&nbsp;<Link rel='category' to={`/category/${category}`} title={category}>{category}</Link>
      </Category>
      <Link to={post.frontmatter.path}>
        <H1>{title}</H1>
      </Link>
      <Timestamp>
        <strong><time dateTime={post.frontmatter.date}>{moment(post.frontmatter.date).format('MMMM Do YYYY • h:mm a')}</time></strong>
      </Timestamp>
      <Card content={post.excerpt} thumbnail={thumbnail} path={post.frontmatter.path} />
    </Posts>
  )
};

export default Post
