/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Button from '../Button/Button'

const SignUp = ({ hiddenConfirm, logPass }) => {
  const [confirmPass, setConfirmPass] = useState('')

  function clickButton() {
    if (confirmPass === logPass.password && confirmPass !== '' && logPass.password !== '' && logPass.login !== '') {
      console.log('You are registered!')
      let authList = JSON.parse(localStorage.getItem('authList'))
      if (!authList) {
        localStorage.setItem('authList', JSON.stringify([logPass]))
      } else {
        authList = [...authList, logPass]
        localStorage.setItem('authList', JSON.stringify(authList))
      }
    } else {
      console.log('Passwords are different!')
    }
  }
  return (
    <div className={hiddenConfirm}>
      <form>
        <div>confirm password</div>
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPass(e.target.value)
          }}
        />
      </form>
      <div className="registration-button">
        <Button clickButton={clickButton} nameButton="Registation" />
      </div>
    </div>
  )
}

export default SignUp
