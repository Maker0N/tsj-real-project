import React, { useState } from 'react'
import Button from '../Button/Button'
import SignUp from '../SignUp/SignUp'

const Login = () => {
  const [logPass, setLogPass] = useState({
    login: '',
    password: '',
  })

  const [hiddenConfirm, setHiddenConfirm] = useState('form-confirm-password-hidden')

  const clearInput = () => {
    setLogPass({
      login: '',
      password: '',
    })
  }

  const clickButton = () => {
    const authList = JSON.parse(localStorage.getItem('authList'))
    const user = authList.filter((it) => it.login === logPass.login)
    if (user[0].password === logPass.password) {
      localStorage.setItem('currentUser', JSON.stringify(logPass))
      console.log('You are authorized!')
    }
    clearInput()
  }

  return (
    <main>
      <form className="form-login">
        <div className="login-input">
          <div>
            login
          </div>
          <input
            type="text"
            placeholder="login"
            value={logPass.login}
            onChange={(e) => {
              setLogPass({ ...logPass, login: e.target.value })
            }}
          />
        </div>
        <div className="login-input">
          <div>
            password
          </div>
          <input
            type="password"
            placeholder="password"
            value={logPass.password}
            onChange={(e) => {
              setLogPass({ ...logPass, password: e.target.value })
            }}
          />
        </div>
      </form>
      <div className="sign-wrapper">
        <Button clickButton={clickButton} nameButton="SignIn" />
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault()
            setHiddenConfirm('form-confirm-password')
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log(logPass)
            }
          }}
        >
          SignUp
        </div>
      </div>
      <SignUp hiddenConfirm={hiddenConfirm} logPass={logPass} />
    </main>
  )
}

export default Login
