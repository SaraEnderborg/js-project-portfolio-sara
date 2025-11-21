import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 10%;
`;

export const Content = styled.div`
  max-width: 500px;
`;

export const Name = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Title = styled.p`
  font-size: 3.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Intro = styled.p`
  margin-top: 1rem;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.lightText};
`;
export const ProfileImg = styled.img`
  width: 220px;
  border-radius: 50%;
  object-fit: cover;
`;
