import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 10%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;
