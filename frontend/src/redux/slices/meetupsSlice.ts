import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { instance } from '../../axios'

export enum Status {
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
    const meetups = await instance.get('/meetups')
    return meetups.data
  }
)

export const createMeetup = createAsyncThunk(
  'meetups/createMeetup',
  async (meetup: any) => {
    const newMeetup = await instance.post('/meetups', meetup)
    return newMeetup.data
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

      .addCase(createMeetup.pending, state => {
        state.status = Status.Loading
      })
      .addCase(createMeetup.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = Status.Loaded
        state.meetups.push(action.payload)
      })
      .addCase(createMeetup.rejected, state => {
        state.status = Status.Error
      })
  },
})

export default meetupsSlice.reducer
