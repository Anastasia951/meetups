import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'

import './Login.scss'

const Login = () => {
  return (
    <form className='form'>
      <h2 className='form__title'>Вход</h2>
      <div className='field'>
        <label>Email</label>
        <input type='email' placeholder='mail@mail.ru' />
      </div>
      <div className='field'>
        <label>Пароль</label>
        <input className='password' type='password' />
      </div>

      <button type='submit' className='form__submit'>
        Войти
      </button>
      <p>
        Нет аккаунта?{' '}
        <span>
          <Link to={routes.Register}>Зарегистрируйтесь</Link>
        </span>
      </p>
    </form>
  )
}

export default Login
