import React from 'react'

import { useSignin } from 'hooks'

import Headline from 'components/Headline'

const Confirmation = () => {
  const { userInfo } = useSignin()

  return (
    <>
      <Headline textTop='Thank you!' textBottom={`Email ${userInfo.email} saved.`}/>
    </>
  )
}

export default Confirmation
