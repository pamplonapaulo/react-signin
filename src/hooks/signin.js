import { useContext } from 'react'
import { SigninContext } from 'contexts'

function useSignin () {
  return useContext(SigninContext)
}

export default useSignin
