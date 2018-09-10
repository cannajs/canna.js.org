import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Prev = styled.div``
const Curr = styled.div`
  text-align: center;
`
const Next = styled.div``

const Pagination = ({ prevPath, nextPath, page, pagesSum, slug, path }) => (
  <Container>
    <Prev>
      {page < pagesSum && (
        <Link to={`/${path}/${slug}/page/${page + 1}/`}>
          <span aria-hidden='true'>←</span> Previous
        </Link>
      )}
    </Prev>
    <Curr>
      <span>{`Page ${page} of ${pagesSum}`}</span>
    </Curr>
    <Next>
      {page === 2 && (
        <Link to={`/${path}/${slug}/`}>
          Next <span aria-hidden='true'>→</span>
        </Link>
      )}
      {page > 2 && (
        <Link to={`/${path}/${slug}/page/${page - 1}/`}>
          Next <span aria-hidden='true'>→</span>
        </Link>
      )}
    </Next>
  </Container>
)

export default Pagination
