import styled from "styled-components";

const StyledButton = styled.a`
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: 0.2s ease;
  cursor: pointer;

  /* Variant: Primary */
  ${({ $variant, theme }) =>
    $variant === "primary" &&
    `
    background: ${theme.colors.primary};
    color: white;
  `}

  /* Variant: Outline */
  ${({ $variant, theme }) =>
    $variant === "outline" &&
    `
    background: transparent;
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  `}

  &:hover {
    opacity: 0.8;
  }
`;

export default function Button({ href, children, variant = "primary" }) {
  return (
    <StyledButton
      href={href}
      $variant={variant}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </StyledButton>
  );
}
