import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Timestamp from '../components/elements/Timestamp'
import ReadMore from '../components/elements/ReadMore'
import Img from '../components/elements/Img'
import Title from '../components/elements/Title'
import Paragraph from '../components/elements/Paragraph'
import Focus from '../components/elements/Focus'
import Label from '../components/elements/Label'

const Content = styled.div``

const Headline = Title.extend`
  &:before {
    display: inline;
    content: '☻';
    letter-spacing: .5rem;
  }
`

const P = Paragraph.extend`
  margin-top: 1rem;
  font-size: 18px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  grid-template-columns: auto;
`

const StrainOfTheWeek = () => {
  return (
    <React.Fragment>
      <Headline>Strain of the Week</Headline>
      <Grid>
        <Content>
          <Img src='//picsum.photos/750/550' />
          <Label content={`sativa`}>Jack Herer</Label>
          <P>Created in the Netherlands in the mid-1990s, where it was later distributed by Dutch pharmacies as a recognized medical-grade strain.</P>
          <P>Since then, the spicy, pine-scented sativa has taken home numerous awards for its quality and potency.</P>
          <ReadMore>
            See more strains like <Link to='/category/strains'>Jack Herer</Link>
          </ReadMore>
        </Content>
      </Grid>
    </React.Fragment>
  )
}

export default StrainOfTheWeek

{ /* <SidebarBox>
  <Headline>Review: Strains</Headline>
  <Grid>
    <Content>
      <Img src='//picsum.photos/750/550' />
      <Label content={`sativa`}>Jack Herer</Label>
      <P>Created in the Netherlands in the mid-1990s, where it was later distributed by Dutch pharmacies as a recognized medical-grade strain.</P>
      <P>Since then, the spicy, pine-scented sativa has taken home numerous awards for its quality and potency.</P>
      <ReadMore>
        Read more about <Link to='/tag/jack-herer'>Jack Herer</Link>
      </ReadMore>
    </Content>
  </Grid>
</SidebarBox> */ }
{ /* <SidebarBox>
  <Headline>Learn: Glossary</Headline>
  <Grid>
    <Content>
      <Img src='//picsum.photos/750/545' />
      <Box>
        <Focus>ter·pe·noid (noun)</Focus>
        <Paragraph>
          Any of a large class of organic compounds including terpenes, diterpenes, and sesquiterpenes. They have unsaturated molecules composed of linked isoprene units, generally having the formula (C5H8)
        </Paragraph>
      </Box>
      <ReadMore>
        Improve your <Link to='/tag/vocabulary'>Vocabulary</Link>
      </ReadMore>
    </Content>
  </Grid>
</SidebarBox> */ }
{ /* <SidebarBox>
  <Headline>Social: Hash</Headline>
  <Grid>
    <Content>
      <Img src='//picsum.photos/750/556' />
      <Timestamp>
        20 minutes ago
      </Timestamp>
      <P>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</P>
      <ReadMore>
        Read more about <Link to='/tag/strains'>strains</Link>
      </ReadMore>
    </Content>
  </Grid>
</SidebarBox> */ }
{ /* <SidebarBox>
  <Headline>Listen: High Beats</Headline>
  <Grid>
    <Content>
      <iframe
        src={`//open.spotify.com/embed/track/2c8sgbZoEanC3QyFNZxUcA`}
        width={`300`}
        height={`380`}
        frameBorder={`0`}
        allowtransparency={`true`}
        allow={`encrypted-media`}
      />
      <ReadMore>
        Read more about <Link to='/tag/strains'>strains</Link>
      </ReadMore>
    </Content>
  </Grid>
</SidebarBox> */ }
