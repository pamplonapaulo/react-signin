import React from 'react'

import Signin from 'components/Signin'
import Headline from 'components/Headline'

const Home = () => (
  <>
    <Headline textTop='Operations studio' textBottom='Please enter your email below' />
    <Signin />
  </>
)

export default Home
