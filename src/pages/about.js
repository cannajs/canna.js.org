import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import Img from '../components/elements/Img'
import MichaelPicture from '../images/michael.jpg'

const ImgContainer = styled.div`
  display: inline-block;
  margin-right: 1rem;
`

const ContentContainer = styled.div`
  width: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
`

const About = () => (
  <Layout>
    <div>
      <h1>About</h1>
      <Grid>
        <ImgContainer>
          <Img src={MichaelPicture} />
        </ImgContainer>
        <ContentContainer>
          <p>420•bytes was started in 2018 by Michael Scott Hertzberg, a software developer and cannabis enthusiast.</p>

          <p>Chicory sugar lungo sugar ut organic bar café au lait dark. Blue mountain, grinder, french press, dripper americano roast that brewed sit qui body.</p>

          <p>Froth java cream roast, sugar coffee con panna bar single shot. Cream aroma half and half, percolator so eu sit spoon.</p>

          <p>Id, filter, skinny affogato, skinny in caramelization, rich aged frappuccino eu robusta. Trifecta macchiato as café au lait filter rich medium café au lait.</p>

          <p>Dark galão, cream extra, aromatic filter latte galão espresso macchiato whipped. Espresso and trifecta dark mocha caffeine irish aged cappuccino wings.</p>
        </ContentContainer>
      </Grid>
    </div>
  </Layout>
)

export default About
