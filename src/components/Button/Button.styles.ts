import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: fit-content;
  margin-top: 2.4rem;
`
export const StyledLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 3.1rem;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
`
