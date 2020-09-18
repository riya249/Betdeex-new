import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .view-txt{
    color:  ${({ theme }) => theme.text.color};
    font-weight: bold;
    text-align: right;
    font-size:21px;
    margin:20px;
  }

  body {
    background: ${({ theme }) => theme.body.background};
    color: ${({ theme }) => theme.text.color};
    transition: all 0.25s linear;
  }`
  
  ;