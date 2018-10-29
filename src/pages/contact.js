import * as React from 'react'
import styled from 'styled-components'
import Downshift from 'downshift'
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
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
`

const Contact = () => (
  <Layout>
    <React.Fragment>
      <h1>Contact</h1>
      <Grid>
        <ContentContainer>
          420•bytes 💚 Washington, D.C. where cannabis use and possession is legal under Initiative 71.
        </ContentContainer>
        <ContentContainer>
          Contact us by email at <a href="mailto:info@420bytes.com">info@420bytes.com</a>
        </ContentContainer>
      </Grid>
    </React.Fragment>
  </Layout>
)

export default Contact
