import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import Header from '../Header/Header'
import EditPage from '../Edit/EditPage'
import Login from '../Login/Login'
import '../../styles/main.css'

const App = () => {
  const { isLogin } = useSelector((s) => s.authReducer)
  return (
    isLogin
      ? (
        <main className="main">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="edit" element={<EditPage />} />
          </Routes>
        </main>
      )
      : <Login />
  )
}

export default App
