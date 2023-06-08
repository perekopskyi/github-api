import styled from 'styled-components'

const Container = styled.div`
  padding-block: 32px;
  margin-inline: auto;
`

const StyledInput = styled.input`
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 24px rgba(51, 51, 51, 0.24);
  border-radius: 4px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  padding: 16px;
  width: 100%;
`

export const Input = () => {
  return (
    <Container>
      <StyledInput type="text" placeholder="Search" />
    </Container>
  )
}
