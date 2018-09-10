import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Prev = styled.div``
const Curr = styled.div``
const Next = styled.div``

const Pagination = ({ prevPath, nextPath, page, pagesSum }) => (
  <Container>
    <Prev>
      {nextPath ? (
        <Link to={nextPath}>
          <span aria-hidden='true'>←</span> Older
        </Link>
      ) : (
        <div>The end</div>
      )}
    </Prev>
    <Curr>
      {`Page ${page} of ${pagesSum}`}
    </Curr>
    <Next>
      {prevPath ? (
        <Link to={prevPath}>
          Newer <span aria-hidden='true'>→</span>
        </Link>
      ) : (
        <div>You're up to date!</div>
      )}
    </Next>
  </Container>
)

export default Pagination
