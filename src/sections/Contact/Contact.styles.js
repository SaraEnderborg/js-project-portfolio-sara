import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 2rem;
`;
export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Content = styled.div``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.size};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.body.size};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
`;

export const Icons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3rem;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
