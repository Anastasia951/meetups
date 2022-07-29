import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
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
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const isUserAuthenticated = (state: RootState): boolean =>
  Boolean(state.auth.user && state.auth.user.token)
export const getUserName = (state: RootState): string =>
  state.auth.user && state.auth.user.name
