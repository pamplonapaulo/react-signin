import React, { createContext, useState } from 'react'
import t from 'prop-types'

const SigninContext = createContext()

function SigninProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    rememberDevice: true
  })

  return (
    <SigninContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </SigninContext.Provider>
  )
}

SigninProvider.propTypes = {
  children: t.node.isRequired
}

export { SigninProvider, SigninContext }
