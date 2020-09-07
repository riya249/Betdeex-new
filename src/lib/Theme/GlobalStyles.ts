import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body.background};
    color: ${({ theme }) => theme.text.color};
    transition: all 0.25s linear;
  }`;