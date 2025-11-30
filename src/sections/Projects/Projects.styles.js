import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.h2.size};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  text-align: center;
  margin-bottom: 64px;
`;
