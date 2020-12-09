import React, { lazy, Suspense, useEffect } from 'react'
import t from 'prop-types'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import './App.scss'

import Logo from 'components/Logo'

import { HOME, CONFIRMATION } from 'routes'

import { useSignin } from 'hooks'

const Home = lazy(() => import('pages/Home'))
const Confirmation = lazy(() => import('pages/Confirmation'))

function App ({ location }) {
  const { userInfo } = useSignin()
  const history = useHistory()

  useEffect(() => {
    if (userInfo.email !== '') history.push(CONFIRMATION)
  }, [userInfo, history])

  if (location.pathname === '/') {
    return <Redirect to={HOME} />
  }

  return (
    <div className="Container">
      <Logo />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={CONFIRMATION} component={Confirmation} />
        </Switch>
      </Suspense>
    </div>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
