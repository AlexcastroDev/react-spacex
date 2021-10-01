import styled from 'styled-components'
import { ReactComponent as Logo } from '@root/assets/logo.svg'

interface IItem {
  active?: boolean
}

export const StyledLogo = styled(Logo)`
  max-width: 27.2rem;
  max-height: 3.4rem;
  fill: ${({ theme }) => theme.colors.primary};
`

export const Menu = styled.ul`
  max-height: 3.4rem;
  margin-left: 9.5rem;
  display: flex;
  display: flex;
  align-items: center;
`


export const Item = styled.li<IItem>`
  height: 3.4 rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  &:nth-child(n+2) {
    margin-left: 3.2rem
  }
  cursor: pointer;
  transition: opacity .6s linear;
  border-bottom: 0.1rem solid ${({ theme, active }) => active ? theme.colors.primary : 'transparent'}
`