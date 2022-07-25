import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { logout } from '../../redux/slices/authSlice'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import './Header.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const user = useTypedSelector(state => state.auth.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (user && user.token) {
      return navigate(routes.Home)
    }
  }, [user])

  const logoutHandler = () => {
    dispatch(logout())
    return navigate(routes.Home)
  }
  return (
    <header className='header'>
      <h1 className='header__title'>
        <Link to={routes.Home}>Meetups</Link>
      </h1>
      <nav>
        <ul className='header__list'>
          {user && user.token ? (
            <>
              <li className='header__item'>
                <Link to={routes.MyMeetups}>Мои митапы ({user.name})</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.Organized}>Организуемые митапы</Link>
              </li>
              <li className='header__item'>
                <Link to={routes.CreateMeetup}>Создать митап</Link>
              </li>
              <li onClick={logoutHandler} className='header__item'>
                Выйти
              </li>
            </>
          ) : (
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
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
