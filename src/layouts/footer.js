import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import theme from '../utils/ds'
import Footer from '../elements/Footer'

const Grid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
`

const Column = styled.div`
  padding: 4rem 2rem 0;
`

const Title = styled.h3`
  color: ${theme.brand('contrastHeading')};
  a {
    color: ${theme.brand('contrastHeading')};
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
`

const Item = styled.li`
  color: ${theme.brand('contrastLink')};
  a {
    color: ${theme.brand('contrastLink')};
  }
`

const Copyright = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 1rem;
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
            <Title>Bongs and Batteries</Title>
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
                <Link to='/'>Law</Link>
              </Item>
              <Item>
                <Link to='/'>Tech</Link>
              </Item>
              <Item>
                <Link to='/'>Science</Link>
              </Item>
            </List>
          </Section>
        </Column>
        <Column>
          <Section>
            <Title>Connect</Title>
            <List>
              <Item>
                <Link to='/'>Facebook</Link>
              </Item>
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
                <Link to='/'>Feed</Link>
              </Item>
            </List>
          </Section>
        </Column>
      </Grid>
      <Copyright>
        <Small>&copy; {currentYear} Bongs and Batteries. Some rights reserved. ☻</Small>
      </Copyright>
    </Footer>
  )
}

export default FooterLayout
