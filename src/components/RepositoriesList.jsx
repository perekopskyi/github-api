import styled from 'styled-components'
import { RepositoryCard } from './RepositoryCard'

const List = styled.div`
  width: 100%;
`

export const RepositoriesList = ({ list = ['sd'] }) => {
  return (
    <List>
      {list.map((repo, index) => (
        <RepositoryCard key={index} {...repo} />
      ))}
    </List>
  )
}
