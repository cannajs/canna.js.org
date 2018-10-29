import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import Img from '../components/elements/Img'
import HR from '../components/elements/HR'
import MichaelPicture from '../images/michael.jpg'

const ImgContainer = styled.div`
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

const Focus = styled.h3``

const About = () => (
  <Layout>
    <div>
      <h1>About</h1>
      <Grid>
        <ImgContainer>
          <Img src={MichaelPicture} />
        </ImgContainer>
        <ContentContainer>
          <Focus>420•bytes was started in 2018 by Michael Scott Hertzberg, a software developer and cannabis enthusiast.</Focus>
          <HR />
          <p>Showcasing articles and products for cannabis enthusiasts and medicinal users.</p>
          <HR />
          <p>420•bytes was built using GatsbyJS and is served via node.</p>
        </ContentContainer>
      </Grid>
    </div>
  </Layout>
)

export default About
