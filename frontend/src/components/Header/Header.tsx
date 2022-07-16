import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'

import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <Link to={routes.Home}>Meetups</Link>
      </h1>
      <nav>
        <ul className='header__list'>
          <li className='header__item'>
            <Link to={routes.Login}>Вход</Link>
          </li>
          <li className='header__item'>
            <Link to={routes.Register}>Регистрация</Link>
          </li>
          <li className='header__item'>
            <Link to={routes.CreateMeetup}>Создать митап</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
