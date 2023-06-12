import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { searchRepos } from '../api'

export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  async ({ name, page }) => {
    const response = await searchRepos({ name, page })
    return response.data
  }
)

const normalizeRepositories = (items) =>
  items.map(
    ({
      description,
      full_name,
      git_url,
      html_url,
      id,
      language,
      name,
      stargazers_count,
      url,
      watchers_count,
    }) => ({
      description,
      full_name,
      git_url,
      html_url,
      id,
      language,
      name,
      stargazers_count,
      url,
      watchers_count,
    })
  )

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    items: [],
    incomplete: false,
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.items = normalizeRepositories(action.payload.items)
      state.incomplete = action.payload.incomplete_results
      state.total = action.payload.total_count
    })
  },
})

export const { setSearchQuery } = repositoriesSlice.actions
