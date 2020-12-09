import React from 'react'
import t from 'prop-types'

import './styles.scss'

const Button = ({ type }) => (
  <>
    <button type={type}>Sign In</button>
  </>
)

Button.propTypes = {
  type: t.string.isRequired
}

export default Button
