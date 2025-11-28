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
  font-weight: 700;
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

  /* DESKTOP — vertikala linjer */
  & > div {
    position: relative;
  }

  & > div:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -16px;
    top: 0;
    width: 2px;
    height: 180px;
    background: #fd6f00;
  }

  /* TABLET & MOBILE */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 56px;

    /* Ta bort desktop-linjer */
    & > div::after {
      display: none;
    }

    /* Lägg in Figma-style SVG-linjer--fixa sen */
    & > div:not(:last-child)::before {
      content: "";
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      width: 160px;
      height: 2px;
      background: #fd6f00;
      border-radius: 2px;
    }
  }

  @media (max-width: 480px) {
    gap: 40px;

    & > div:not(:last-child)::before {
      width: 120px;
    }
  }
`;
