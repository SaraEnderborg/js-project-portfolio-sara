import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.buttons.gap};
  height: ${({ theme }) => theme.buttons.height};
  padding: 0 ${({ theme }) => theme.buttons.paddingX};
  border-radius: ${({ theme }) => theme.buttons.radius};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.button.size};
  font-weight: ${({ theme }) => theme.button.weight};

  ${({ theme, $variant }) => `
    background: ${theme.colors.button[$variant].bg};
    color: ${theme.colors.button[$variant].text};
    border: ${
      $variant === "secondary"
        ? `2px solid ${theme.colors.button.secondary.border}`
        : "none"
    };
  `}

  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export default function Button({ href, children, variant = "primary" }) {
  return (
    <StyledButton
      href={href}
      target="_blank"
      rel="noreferrer"
      $variant={variant}
    >
      {children}
    </StyledButton>
  );
}
