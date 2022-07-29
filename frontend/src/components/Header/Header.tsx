import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { logout } from '../../redux/slices/authSlice'
import {
  getUserName,
  isUserAuthenticated,
  useAppDispatch,
  useTypedSelector,
} from '../../redux/store'
import './Header.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isAuth = useTypedSelector(isUserAuthenticated)
  const userName = useTypedSelector(getUserName)

  useEffect(() => {
    if (isAuth) {
      return navigate(routes.Home)
    }
  }, [isAuth])

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
          {isAuth ? (
            <>
              <li className='header__item'>
                <Link to={routes.MyMeetups}>Мои митапы ({userName})</Link>
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
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default React.memo(Header)
