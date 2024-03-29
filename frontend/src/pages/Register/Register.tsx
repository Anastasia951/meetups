import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { IRegister } from '../../constants/forms'
import { routes } from '../../constants/routes'
import { fetchRegister } from '../../redux/slices/authSlice'
import { useAppDispatch } from '../../redux/store'

const Register = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>()

  const onSubmit = handleSubmit(async data => {
    const result = await dispatch(fetchRegister(data))
    if (!result) {
      return alert('Не удалось зарегистрироваться')
    }

    if (result.payload.token) {
      window.localStorage.setItem('token', result.payload.token)
    }
  })
  return (
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>Регистрация</h2>
      <div className='field'>
        <label>Email</label>
        <input
          {...register('email', { required: true })}
          type='email'
          placeholder='mail@mail.ru'
        />
      </div>
      <div className='field'>
        <label>Имя</label>
        <input type='text' {...register('name', { required: true, min: 3 })} />
      </div>
      <div className='field'>
        <label>Пароль</label>
        <input
          {...register('password', { required: true })}
          className='password'
          type='password'
        />
      </div>
      <div className='field'>
        <label>Повтор пароля</label>
        <input
          {...register('repeatPassword', { required: true })}
          className='password'
          type='password'
        />
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
