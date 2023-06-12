import { configureStore } from '@reduxjs/toolkit'
import { repositoriesSlice } from './repositoriesSlice'

export const store = configureStore({
  reducer: {
    repositories: repositoriesSlice.reducer,
  },
})

export const GET_STATE = {
  REPOSITORIES: (state) => state.repositories,
}
