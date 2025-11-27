import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: 0.2s ease;
  cursor: pointer;

  ${({ $variant, theme }) =>
    `background: ${theme.colors[$variant].bg};
    color: ${theme.colors[$variant].text};
    border: 2px solid ${theme.colors[$variant].text};
  `}

  &:hover {
    opacity: 0.8;
  }
`;

export default function Button({ href, children, variant = "primary" }) {
  if (href) {
    return (
      <StyledButton
        href={href}
        as="a"
        $variant={variant}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledButton>
    );
  }

  return <StyledButton $variant={variant}>{children}</StyledButton>;
}
