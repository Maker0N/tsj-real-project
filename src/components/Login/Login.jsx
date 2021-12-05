import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import SignUp from '../SignUp/SignUp'
import { isLoginFunc } from '../../redux/authReducer'

const Login = () => {
  const dispatch = useDispatch()
  const [logPass, setLogPass] = useState({
    login: '',
    password: '',
  })

  const [hiddenConfirm, setHiddenConfirm] = useState('form-confirm-password-hidden')

  const onOffFunc = () => {
    const on = 'form-confirm-password'
    const off = 'form-confirm-password-hidden'
    if (hiddenConfirm === on) {
      setHiddenConfirm(off)
    }
    if (hiddenConfirm === off) {
      setHiddenConfirm(on)
    }
  }

  const clearInput = () => {
    setLogPass({
      login: '',
      password: '',
    })
  }

  const clickButton = () => {
    const authList = JSON.parse(localStorage.getItem('authList'))
    if (authList) {
      const user = authList.filter((it) => it.login === logPass.login)
      if (user.length && logPass && user[0].password === logPass.password) {
        localStorage.setItem('currentUser', JSON.stringify(logPass))
        dispatch(isLoginFunc(true))
        console.log('You are authorized!')
        setTimeout(() => {
          dispatch(isLoginFunc(false))
          console.log('Authorization timed out')
        }, 600000)
      }
    }
    clearInput()
  }

  return (
    <main className="main-login">
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
          className="sign-up"
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault()
            onOffFunc()
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onOffFunc()
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
