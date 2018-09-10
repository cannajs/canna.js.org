import * as React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import media from '../utils/breakpoints'
import BackgroundImage from '../elements/BackgroundImage'
import Ad from '../elements/Ad'
import HR from '../elements/HR'

import introImg from '../../images/cannabis.jpg'

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

export default function IndexLayout ({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => {
        let { description, title } = data.site.siteMetadata
        return (
          <React.Fragment>
            <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title}>
              <html lang='en' />
              <meta name='description' content={description} />
              <meta charSet='utf-8' />
              <meta name='viewport' content='width=device-width, initial-scale=1' />
              <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
              <meta name='HandheldFriendly' content='True' />
            </Helmet>
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
          </React.Fragment>
        )
      }}
    />
  )
}
