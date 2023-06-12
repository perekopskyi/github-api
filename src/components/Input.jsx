import styled from 'styled-components'

const Container = styled.div`
  padding-top: 32px;
  width: 100%;
`

const StyledInput = styled.input`
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 24px rgba(51, 51, 51, 0.24);
  border-radius: 4px;
  border-radius: 4px;
  border: none;
  display: block;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  margin: 0 auto;
`

export const Input = ({ onSearch }) => (
  <Container>
    <StyledInput
      type="text"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
    />
  </Container>
)
