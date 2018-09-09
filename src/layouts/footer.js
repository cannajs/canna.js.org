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
  grid-template-columns: 33.33% 33.33% 33.33%;
`}
`

const Column = styled.div`
  padding: ${props => props.padding ? props.padding : ''};
  margin: ${props => props.margin ? props.margin : '1rem 2rem 0'};
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
                <Link to='/'>About</Link>
              </Item>
              <Item>
                <Link to='/'>Contact</Link>
              </Item>
              <Item>
                <Link to='/'>Feed</Link>
              </Item>
              <Item>
                <Link to='/'>Sponsors</Link>
              </Item>
              <Item>
                <Link to='/'>Legal</Link>
              </Item>
            </List>
          </Section>
        </Column>
        <Column>
          <Section>
            <Title>Interests</Title>
            <List>
              <Item>
                <Link to='/'>Gear</Link>
              </Item>
              <Item>
                <Link to='/'>Strains</Link>
              </Item>
              <Item>
                <Link to='/'>Food</Link>
              </Item>
              <Item>
                <Link to='/'>Tech</Link>
              </Item>
              <Item>
                <Link to='/'>Science</Link>
              </Item>
              <Item>
                <Link to='/'>Law</Link>
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
