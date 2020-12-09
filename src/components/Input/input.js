import React from 'react'
import t from 'prop-types'

import './styles.scss'

const Input = ({ type, name, isChecked, callbackParent, isValidated }) => (
  <div className='WrapperInput' datatype={type}>
    <label htmlFor={type} datatype={type}>{name}</label>
    <input
      id={type}
      name={type}
      type={type}
      defaultChecked={isChecked}
      onChange={(e) => callbackParent(e)}
      style={{ boxShadow: isValidated ? '1px 1px 1px rgba(0, 0, 0, 0.05)' : '0 0 5px red' }}
    />
  </div>
)

Input.propTypes = {
  type: t.string.isRequired,
  name: t.string.isRequired,
  isChecked: t.bool,
  callbackParent: t.func.isRequired,
  isValidated: t.bool.isRequired
}

export default Input
