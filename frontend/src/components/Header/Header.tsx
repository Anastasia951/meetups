import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { selectIsAuth, useAuthSelector } from '../../redux/slices/authSlice'

import './Header.scss'

const Header = () => {
  const user = useAuthSelector(state => state.auth.user)

  console.log('isAuth', user)
  return (
    <header className='header'>
      <h1 className='header__title'>
        <Link to={routes.Home}>Meetups</Link>
      </h1>
      <nav>
        <ul className='header__list'>
          {user && user.auth.user.token ? (
            <>
              <li className='header__item'>
                <Link to={routes.Login}>Вход</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.Register}>Регистрация</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.CreateMeetup}>Создать митап</Link>
              </li>
            </>
          ) : (
            <>
              <li className='header__item'>
                <Link to={routes.Login}>Мои митапы</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.Register}>Организуемые митапы</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.Register}>Создать митап</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.Register}>Выйти</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
