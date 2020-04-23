import React from 'react'
import {FlexContainer, Header} from '../Styles'
import {SynthBoard} from '../components'

const HomePage = function (props) {
  return (
    <FlexContainer>
      <Header>Hello MintBean, my name is ToneWizard</Header>
      <SynthBoard />
      <Header>Play a tune I might know</Header>
    </FlexContainer>
  )
}
export default HomePage
