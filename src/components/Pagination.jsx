import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setSearchQuery } from '../store/repositoriesSlice'
import { fetchRepositories } from '../store/repositoriesSlice'

const Container = styled.div`
  margin-block: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  border: none;
  background: none;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  margin: 0 20px;
  ::after {
    content: '';
    display: ${(props) => (props.current ? 'block' : 'none')};
    width: 100%;
    height: 3px;
    background: #65b79a;
  }
`

export const Pagination = () => {
  const dispatch = useDispatch()
  const {
    total,
    items,
    searchQuery: { name, page: currentPage },
  } = useSelector((state) => state.repositories)
  const itemsPerPage = items.length

  const totalPages = Math.ceil(total / itemsPerPage)
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const handlePageChange = (pageNumber) => {
    dispatch(setSearchQuery({ page: pageNumber }))
    dispatch(fetchRepositories({ name, page: pageNumber }))
  }

  const handlePrev = () => {
    dispatch(setSearchQuery({ page: currentPage - 1 }))
    dispatch(fetchRepositories({ name, page: currentPage - 1 }))
  }
  const handleNext = () => {
    dispatch(setSearchQuery({ page: currentPage + 1 }))
    dispatch(fetchRepositories({ name, page: currentPage + 1 }))
  }

  const renderPageButtons = () => {
    const buttons = []
    const maxButtonsToShow = 5

    let startPage = Math.max(currentPage - 2, 1)
    let endPage = Math.min(startPage + maxButtonsToShow - 1, totalPages)

    if (endPage - startPage < maxButtonsToShow - 1) {
      startPage = Math.max(endPage - maxButtonsToShow + 1, 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          current={i === currentPage}
        >
          {i}
        </Button>
      )
    }

    return buttons
  }

  return (
    <Container>
      <Button disabled={isFirstPage} onClick={handlePrev}>
        Previous
      </Button>
      <div>{renderPageButtons()}</div>
      <Button disabled={isLastPage} onClick={handleNext}>
        Next
      </Button>
    </Container>
  )
}
