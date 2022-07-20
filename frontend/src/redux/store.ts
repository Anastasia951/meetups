import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authSlice from './slices/authSlice'
import meetupsSlice from './slices/meetupsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    meetups: meetupsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
