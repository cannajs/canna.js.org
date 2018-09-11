import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import Img from '../components/elements/Img'
import MichaelPicture from '../images/michael.jpg'

const ImgContainer = styled.div`
  width: 50%;
  min-width: 50%;
  max-width: 50%;
  display: inline-block;
  margin-right: 1rem;
`

const ContentContainer = styled.div`
  width: auto;
`

const Grid = styled.div`
  display: flex;
  margin-top: 1rem;
`

const NotFound = () => (
  <Layout>
    <React.Fragment>
      <h1>404</h1>
      <Grid>
        <ContentContainer>
          <p>The requested resource isn't here anymore.</p>
        </ContentContainer>
      </Grid>
    </React.Fragment>
  </Layout>
)

export default NotFound
