import * as React from 'react'
import styled from 'styled-components'
import Header from '../layouts/header'
import Sidebar from '../layouts/sidebar'
import Footer from '../layouts/footer'
import media from '../utils/breakpoints'
import BackgroundImage from '../elements/BackgroundImage'
import Ad from '../elements/Ad'
import HR from '../elements/HR'

import introImg from '../static/images/cannabis.jpg'

const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
  height: inherit;
  max-height: inherit;
  align-content: flex-start;
  width: 100%;
  max-width: 1300px;
`

const Container = styled.section`
  display: grid;
  margin: 0 auto;
  padding: 1rem;
  min-width: 100%;
  grid-template-rows: auto;

${media.desktop`
  grid-template-columns: auto calc(300px - 1rem);
`}
${media.giant`
`}
${media.huge`
  padding: 1rem 0;
`}
`

const Primary = styled.div`
  padding-bottom: 1rem;
  ${media.desktop`padding: 0 1rem 0 0`}
`

const Site = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-width: 100%;
  position: relative;
  min-height: 100vh;
`

class Layout extends React.Component {
  render () {
    const { children, history, location, match } = this.props
    return (
      <Site id='___root'>
        <BackgroundImage src={introImg} />
        <Wrapper>
          <Header />
          <Container>
            <Primary>
              {children}
              <HR />
              <Ad margin={`0 auto`} padding={`0`} placement='skybar'>Advertisement</Ad>
            </Primary>
            <Sidebar />
          </Container>
        </Wrapper>
        <Footer />
      </Site>
    )
  }
}

export default Layout
