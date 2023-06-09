import { configureStore } from '@reduxjs/toolkit'
import { repositoriesSlice } from './repositoriesSlice'

export const store = configureStore({
  reducer: {
    repositories: repositoriesSlice.reducer,
  },
})
