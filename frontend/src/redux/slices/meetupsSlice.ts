import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

enum Status {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
const initialState = {
  status: Status.Loading,
  meetups: [],
}

export const fetchAllMeetups = createAsyncThunk(
  'meetups/fetchAllMeetups',
  async () => {
    const meetups = await axios.get('http://localhost:5000/meetups')
    return meetups.data
  }
)

const meetupsSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllMeetups.pending, state => {
        state.status = Status.Loading
        state.meetups = []
      })
      .addCase(
        fetchAllMeetups.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = Status.Loaded
          state.meetups = action.payload
        }
      )
      .addCase(fetchAllMeetups.rejected, state => {
        state.status = Status.Error
        state.meetups = []
      })
  },
})

export default meetupsSlice.reducer
