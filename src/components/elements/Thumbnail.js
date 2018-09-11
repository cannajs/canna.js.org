import styled from 'styled-components'

const Thumbnail = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: inline-block;
  width: 100%;
  padding-bottom: 56.2%;
  position: relative;

  ${props => props.isVideo && `
    &:after {
      content: "|>";
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: inherit;
      height: 100%;
    }
  `}
`

export default Thumbnail
