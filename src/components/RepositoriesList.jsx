import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RepositoryCard } from './RepositoryCard'
import { Pagination } from './Pagination'
import { fetchRepositories } from '../store/repositoriesSlice'

const List = styled.div`
  max-width: 100%;
  height: 80vh;
  overflow-y: scroll;
`

export const RepositoriesList = () => {
  const dispatch = useDispatch()
  const {
    items,
    searchQuery: { name },
  } = useSelector((state) => state.repositories)

  useEffect(() => {
    dispatch(fetchRepositories({ name }))
  }, [])

  return (
    <>
      {items.length === 0 ? (
        <p>По Вашому запиту не знайдено жодного репозиторія</p>
      ) : (
        <>
          <List>
            {items.map((repo) => (
              <RepositoryCard key={repo.id} {...repo} />
            ))}
          </List>
          <Pagination />
        </>
      )}
    </>
  )
}
