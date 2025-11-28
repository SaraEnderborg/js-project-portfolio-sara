import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  font-size: clamp(32px, 4vw, 56px);
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 982px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  /* Linjer mellan kolumner med CSS istället */
  & > div:nth-child(1),
  & > div:nth-child(2),
  & > div:nth-child(3) {
    position: relative;
  }

  & > div:nth-child(1)::after,
  & > div:nth-child(2)::after,
  & > div:nth-child(3)::after {
    content: "";
    position: absolute;
    right: -16px;
    top: 0;
    width: 2px;
    height: 220px;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    & > div::after {
      display: none;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;
