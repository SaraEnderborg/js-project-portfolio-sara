import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.typography.button.size};
  font-weight: ${({ theme }) => theme.typography.button.weight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};

  height: ${({ theme }) => theme.buttons.height};
  border-radius: ${({ theme }) => theme.buttons.radius};
  padding: 0 ${({ theme }) => theme.buttons.paddingX};
  gap: ${({ theme }) => theme.buttons.gap};

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
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Button({
  href,
  children,
  variant = "primary",
  ariaLabel,
  title,
}) {
  const label =
    ariaLabel || (typeof children === "string" ? children : "Open link");
  return (
    <StyledButton
      href={href}
      target="_blank"
      rel="noreferrer"
      $variant={variant}
      aria-label={label}
      title={title || label}
    >
      {children}
    </StyledButton>
  );
}
