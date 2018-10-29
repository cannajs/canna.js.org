import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../utils/breakpoints'
import theme from '../utils/ds'
import Copyright from '../elements/Copyright'
import Footer from '../elements/Footer'

const Grid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 50% 50%;
${media.desktop`
  grid-template-columns: 1fr 1fr 1fr;
  width: 1340px;
  margin: 3rem auto;
`}
`

const Column = styled.div`
  padding: ${props => props.padding ? props.padding : ''};
  margin: ${props => props.margin ? props.margin : '1rem'};
`

const Title = styled.h3`
  font-family: ${theme.get('fontFamily.footer.title')};
  color: ${theme.brand('contrastBorder')};
  margin: 1rem 0;

  a {
    color: ${theme.brand('contrastBorder')};
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
`

const Item = styled.li`
  font-family: ${theme.get('fontFamily.footer.body')};
  color: ${theme.brand('contrastText')};
  font-size: 18px;
  a {
    color: ${theme.brand('contrastText')};
  }
`

const Small = styled.span`
  margin: 1rem;
  font-size: 12px;
`

const Section = styled.div``

export const FooterLayout = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Footer>
      <Grid>
        <Column>
          <Section>
            <Title>420 • bytes</Title>
            <List>
              <Item>
                <Link to='/about'>About</Link>
              </Item>
              <Item>
                <Link to='/contact'>Contact</Link>
              </Item>
              <Item>
                <Link to='/feed'>Feed</Link>
              </Item>
              <Item>
                <Link to='/legal'>Legal</Link>
              </Item>
            </List>
          </Section>
        </Column>
        <Column>
          <Section>
            <Title>Interests</Title>
            <List>
              <Item>
                <Link to='/category/gear'>Gear</Link>
              </Item>
              <Item>
                <Link to='/category/strains'>Strains</Link>
              </Item>
              <Item>
                <Link to='/category/food'>Food</Link>
              </Item>
              <Item>
                <Link to='/category/tech'>Tech</Link>
              </Item>
              <Item>
                <Link to='/category/science'>Science</Link>
              </Item>
              <Item>
                <Link to='/category/law'>Law</Link>
              </Item>
            </List>
          </Section>
        </Column>
        <Column>
          <Section>
            <Title>Connect</Title>
            <List>
              <Item>
                <Link to='/'>Twitter</Link>
              </Item>
              <Item>
                <Link to='/'>Pinterest</Link>
              </Item>
              <Item>
                <Link to='/'>Instagram</Link>
              </Item>
              <Item>
                <Link to='/'>YouTube</Link>
              </Item>
              <Item>
                <Link to='/feed'>Feed</Link>
              </Item>
            </List>
          </Section>
        </Column>
      </Grid>
      <Copyright>
        <Small>&copy; {currentYear} 420bytes, LLC. Some rights reserved. ☻</Small>
      </Copyright>
    </Footer>
  )
}

export default FooterLayout
