import styled from 'styled-components'

const StyledWhiteKey = styled.div`
  height: 100%;
  width: 4rem;
  border: black solid 0.2rem;
  border-radius: 1rem;
  ${({pressed}) =>
    pressed ? `background-color:lightblue;` : `background-color:white;`}
`
export default StyledWhiteKey
