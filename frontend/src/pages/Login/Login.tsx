import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ILogin } from '../../constants/forms'
import { routes } from '../../constants/routes'
import { fetchLogin } from '../../redux/slices/authSlice'
import { useAppDispatch } from '../../redux/store'

import './Login.scss'

const Login = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit = handleSubmit(async data => {
    const result = await dispatch(fetchLogin(data))
    if (!result) {
      return alert('Не удалось авторизоваться')
    }

    if (result.payload.token) {
      window.localStorage.setItem('token', result.payload.token)
    }
  })

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>Вход</h2>
      <div className='field'>
        <label>Email</label>
        <input
          {...register('email', { required: true })}
          type='email'
          placeholder='mail@mail.ru'
        />
      </div>
      <div className='field'>
        <label>Пароль</label>
        <input
          {...register('password', { required: true })}
          className='password'
          type='password'
        />
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
