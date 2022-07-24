import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { instance } from '../../axios'
import { RootState } from '../store'

enum Status {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
const initialState = {
  status: Status.Loading,
  user: null,
}

export const fetchRegister = createAsyncThunk(
  'user/fetchRegister',
  async (params: any) => {
    const data = await instance.post('/register', params)
    return data.data
  }
)
export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (params: any) => {
    const data = await instance.post('/login', params)
    return data.data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRegister.pending, state => {
        state.status = Status.Loading
        state.user = null
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = Status.Loaded
        state.user = action.payload
      })
      .addCase(fetchRegister.rejected, state => {
        state.status = Status.Error
      })
      .addCase(fetchLogin.pending, state => {
        state.status = Status.Loading
        state.user = null
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = Status.Loaded
        state.user = action.payload
      })
      .addCase(fetchLogin.rejected, state => {
        state.status = Status.Error
      })
  },
})

export default authSlice.reducer

export const selectIsAuth = state => !!state.auth.data
export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector
