import { useState } from 'react'
import styled from 'styled-components'
import { Input } from './components/Input'
import { RepositoriesList } from './components/RepositoriesList'

const Layout = styled.div`
  width: 100vw;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`

function App() {
  const [searchQuery, setSearchQuery] = useState({
    name: 'react',
    page: 1,
  })

  let debounceTimeoutId

  const onSearch = (name) => {
    clearTimeout(debounceTimeoutId)

    debounceTimeoutId = setTimeout(() => {
      setSearchQuery({ name, page: 1 })
    }, 1000)
  }

  return (
    <Layout>
      <Container>
        <Input {...{ onSearch }} />
        <RepositoriesList {...{ searchQuery, setSearchQuery }} />
      </Container>
    </Layout>
  )
}

export default App
