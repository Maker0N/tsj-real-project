import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import Main from '../Main'
import '../../styles/main.css'

const App = () => {
  const { isLogin } = useSelector((s) => s.authReducer)
  return (
    isLogin ? <Main /> : <Login />
  )
}

export default App
