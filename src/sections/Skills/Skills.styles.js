import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 10%;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2 || "3rem"};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
