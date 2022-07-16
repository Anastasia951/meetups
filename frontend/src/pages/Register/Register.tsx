import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'

const Register = () => {
  return (
    <form className='form'>
      <h2 className='form__title'>Регистрация</h2>
      <div className='field'>
        <label>Email</label>
        <input type='email' placeholder='mail@mail.ru' />
      </div>
      <div className='field'>
        <label>Имя</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Пароль</label>
        <input className='password' type='password' />
      </div>
      <div className='field'>
        <label>Повтор пароля</label>
        <input className='password' type='password' />
      </div>

      <button type='submit' className='form__submit'>
        Зарегистрироваться
      </button>

      <p>
        Уже есть аккаунт?{' '}
        <span>
          <Link to={routes.Login}>Войдите</Link>
        </span>
      </p>
    </form>
  )
}

export default Register
