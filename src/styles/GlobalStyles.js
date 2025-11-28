import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0;
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.body.size};
    font-weight: ${({ theme }) => theme.typography.body.weight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
