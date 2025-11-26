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
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Text = styled.p`
  margin: 0.3rem 0;
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
