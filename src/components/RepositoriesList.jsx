import { RepositoryCard } from './RepositoryCard'

export const RepositoriesList = ({ list = [] }) => {
  return (
    <div>
      {list.map((repo) => (
        <RepositoryCard {...repo} />
      ))}
    </div>
  )
}
