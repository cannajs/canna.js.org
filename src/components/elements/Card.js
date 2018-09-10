import * as React from 'react'
import { Link } from 'gatsby'
import media from '../utils/breakpoints'
import styled from 'styled-components'
import ReadMore from '../elements/ReadMore'
import Thumbnail from '../elements/Thumbnail'

const Grid = styled.div`
  display: grid;
${media.tablet`
  grid-auto-flow: column;
  grid-template-columns: calc(400px) auto;
  grid-gap: 1rem;
`}
`

const H1 = styled.h1`
  border-bottom: 1px solid;
  margin-bottom: 1rem;
`

const P = styled.div`
  margin-top: 1rem;
${media.tablet`
  margin: 0 0 1rem;
`}
`

const Card = ({ title, content, path, thumbnail }) => {
  return (
    <Grid>
      <Thumbnail src={thumbnail} />
      <div>
        {title && <Link to={path}><H1>{title}</H1></Link>}
        <P>{content}</P>
        <Link to={path}>
          <ReadMore>
            Continue reading
          </ReadMore>
        </Link>
      </div>
    </Grid>
  )
}

export default Card
