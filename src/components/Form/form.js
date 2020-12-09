import React, { useState, useEffect } from 'react'
import Input from 'components/Input'
import Button from 'components/Button'

import { useSignin } from 'hooks'

import { isEmailValid } from 'utils/validation'

import './styles.scss'

const Form = () => {
  const { userInfo, setUserInfo } = useSignin()
  const [email, setEmail] = useState(userInfo.email)
  const [willRemember, setWillRemember] = useState(userInfo.rememberDevice)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (isEmailValid(email) || email === '') {
      setAlert(false)
    } else {
      setAlert(true)
    }
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (alert === false && email !== '') {
      setUserInfo({
        email: email,
        rememberDevice: willRemember
      })
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'checkbox') setWillRemember(!willRemember)
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type='email'
          name='Email Address'
          value={email}
          callbackParent={handleChange}
          isValidated={!alert}
        />
        <Input
          type='checkbox'
          name='Remember this device'
          isChecked={willRemember}
          callbackParent={handleChange}
          isValidated={true}
        />
        <Button type='submit' />
      </form>
    </>
  )
}

export default Form
