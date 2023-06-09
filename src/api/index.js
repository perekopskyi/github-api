import { Octokit } from 'octokit'

const TOKEN = process.env.REACT_APP_GH_TOKEN

export const octokit = new Octokit({ auth: TOKEN })

export const searchRepos = ({ name, page = 1 }) =>
  octokit.request(`GET /search/repositories`, {
    q: name,
    page,
  })
