import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import Img from '../components/elements/Img'

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

const Sponsors = () => (
  <Layout>
    <React.Fragment>
      <h1>Sponsors</h1>
      <Grid>
        <ContentContainer>
          <p>Looking to sponsor? Send us an email at <a href="mailto:info@420bytes.com">info@420bytes.com</a></p>
        </ContentContainer>
      </Grid>
    </React.Fragment>
  </Layout>
)

export default Sponsors
