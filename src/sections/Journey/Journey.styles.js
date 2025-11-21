import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 10%;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
