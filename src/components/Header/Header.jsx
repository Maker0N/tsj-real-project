import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')).login
  return (
    <header className="header">
      <div>
        ТСЖ и ТСЖ
      </div>
      <Link to="/">Main</Link>
      <Link to="edit">Edit</Link>
      <div>
        Вы вошли под акаунтом:
        {' '}
        {currentUser}
      </div>
    </header>
  )
}

export default Header
