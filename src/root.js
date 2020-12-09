import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

import { SigninProvider } from 'contexts'

function Root () {
  return (
    <SigninProvider>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </SigninProvider>
  )
}

export default hot(module)(Root)
