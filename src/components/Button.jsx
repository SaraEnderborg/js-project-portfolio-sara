import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.buttons.gap};

  height: ${({ theme }) => theme.buttons.height};
  padding: 0 ${({ theme }) => theme.buttons.paddingX};
  border-radius: ${({ theme }) => theme.buttons.radius};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.button.size};
  font-weight: ${({ theme }) => theme.typography.button.weight};
  text-decoration: none;

  background-color: ${({ theme, $variant }) =>
    theme.colors.button[$variant].bg};
  color: ${({ theme, $variant }) => theme.colors.button[$variant].text};

  border: ${({ theme, $variant }) =>
    $variant === "secondary"
      ? `2px solid ${theme.colors.button.secondary.border}`
      : "none"};

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
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
