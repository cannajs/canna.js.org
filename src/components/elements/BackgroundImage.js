import styled from 'styled-components'

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .1;
  margin: 0 auto;
  -webkit-mask-image: -webkit-linear-gradient(
    left,
    transparent 0%,
    #000 20%,
    #000 50%,
    #000 80%,
    transparent 100%
  );
  mask-image: linear-gradient(
    left,
    transparent 0%,
    #000 20%,
    #000 50%,
    #000 80%,
    transparent 100%
  );
`

export default BackgroundImage
