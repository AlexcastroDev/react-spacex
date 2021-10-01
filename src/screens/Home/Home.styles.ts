import styled from 'styled-components';
import { Button } from "@root/components/Button";

export const ContentContainer = styled.div``

export const ImageSection = styled.div`
  height: 100vh;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 12.2rem;
`

export const Section = styled.section`
  height: 100vh;
  width: max-content;
`

export const StyledText = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.primary};
`
export const StyledButton = styled(Button)``
