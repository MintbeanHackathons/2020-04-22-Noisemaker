import styled from 'styled-components'

const StyledBlackKey = styled.div`
  height: 60%;
  position: relative;
  left: -1.5rem;
  width: 3rem;
  border-radius: 1rem;
  ${({pressed}) =>
    pressed ? `background-color: grey;` : `background-color:black;`}
`
export default StyledBlackKey
