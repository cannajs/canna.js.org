import styled from 'styled-components'

const ScaledImg = styled.div`
  background: url(${props => props.src});
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    padding-bottom: calc(100% / 16 * 9);
  }
`

export default ScaledImg
