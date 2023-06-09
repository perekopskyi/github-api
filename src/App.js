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
  return (
    <Layout>
      <Container>
        <Input />
        <RepositoriesList />
      </Container>
    </Layout>
  )
}

export default App
