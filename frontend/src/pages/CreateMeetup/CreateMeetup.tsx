import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { createMeetup } from '../../redux/slices/meetupsSlice'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import { getCurrentDate } from '../../utils/getCurrentDate'

import './CreateMeetup.scss'

const Login = () => {
  const dispatch = useAppDispatch()
  const user = useTypedSelector(state => state.auth.user)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<any>()

  const onSubmit = handleSubmit(async meetup => {
    const newMeetup = await dispatch(createMeetup(meetup))
  })
  return (
    <form className='form__create-meetup' onSubmit={onSubmit}>
      <div className='content'>
        <h2 className='form__title'>Создание митапа</h2>
        <div className='field'>
          <label>Название</label>
          <input {...register('title')} type='text' />
        </div>
        <div className='field'>
          <label>Дата</label>
          <input
            {...register('date')}
            type='date'
            defaultValue={getCurrentDate()}
          />
        </div>
        <div className='field'>
          <label>Место проведения</label>
          <input {...register('place')} type='text' />
        </div>
        <div className='field'>
          <label>Описание</label>
          <textarea {...register('description')} rows={6} />
        </div>
      </div>
      <div className='actions'>
        <button className='form__cancel'>
          <Link to={routes.Home}>Отмена</Link>
        </button>
        <button type='submit' className='form__submit'>
          Создать
        </button>
      </div>
    </form>
  )
}

export default Login
