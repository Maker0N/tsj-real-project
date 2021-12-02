import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import Header from '../Header/Header'
import EditPage from '../Edit/EditPage'
import '../../styles/main.css'

const App = () => (
  <main className="main">
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="edit" element={<EditPage />} />
    </Routes>
  </main>
)

export default App
