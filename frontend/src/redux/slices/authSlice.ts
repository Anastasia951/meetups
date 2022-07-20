import { createSlice } from '@reduxjs/toolkit'
enum Status {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
const initialState = {
  status: Status.Loading,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
