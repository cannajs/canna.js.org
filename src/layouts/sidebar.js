import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import media from '../utils/breakpoints'
import theme from '../utils/ds'
import Box from '../elements/Box'
import Ad from '../elements/Ad'
import Sidebar from '../elements/Sidebar'
import Timestamp from '../elements/Timestamp'
import ReadMore from '../elements/ReadMore'
import ScaledImg from '../elements/ScaledImg'

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  grid-template-columns: 200px auto;
${media.desktop`
  grid-template-columns: auto;
`}
`

const SidebarBox = Box.extend`
  border-top: 1px solid ${theme.brand('border')};
  padding-top: 1rem;
`

const Content = styled.div``

const Title = styled.h3`
  &:before {
    display: inline;
    content: '☻ ';
  }
`

export const SidebarLayout = () => {
  return (
    <Sidebar>
      <Ad placement='sidebar'>Advertisement</Ad>
      <div>
        <SidebarBox>
          <Title>Strain of the :20</Title>
          <Grid>
            <ScaledImg src='//picsum.photos/450/220' />
            <Content>
              <Timestamp>
                20 minutes ago
              </Timestamp>
              <p>Popularized by Jimi Hendrix’s 1967 classic, Purple Haze delivers a dreamy burst of euphoria that brings veteran consumers back to their psychedelic heyday.</p>
              <ReadMore>
                Read more about <Link to='/tag/purple-haze'>Purple Haze</Link>
              </ReadMore>
            </Content>
          </Grid>
        </SidebarBox>
        <SidebarBox>
          <Title>Latest Cannabis News</Title>
          <Grid>
            <ScaledImg src='//picsum.photos/450/220' />
            <Content>
              <Timestamp>
                2 hours ago
              </Timestamp>
              <p>something something something darkside. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              <ReadMore>
                Read more about <Link to='/tag/news'>Cannabis News</Link>
              </ReadMore>
            </Content>
          </Grid>
        </SidebarBox>
        <SidebarBox>
          <Title>B&BTV</Title>
          <Grid>
            <ScaledImg src='//picsum.photos/450/220' />
            <Content>
              <Timestamp>
                22 hours ago
              </Timestamp>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              <ReadMore>
                Read more about <Link to='/tag/strains'>strains</Link>
              </ReadMore>
            </Content>
          </Grid>
        </SidebarBox>
      </div>
    </Sidebar>
  )
}

export default SidebarLayout
