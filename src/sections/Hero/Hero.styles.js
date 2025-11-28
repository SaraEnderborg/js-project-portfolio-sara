import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 128px 128px 64px 128px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 64px 24px;
    text-align: center;
  }
`;
export const Content = styled.div`
  max-width: 580px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Name = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.size};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  line-height: 1;
  margin-bottom: 16px;

  font-size: clamp(
    ${({ theme }) => theme.typography.h1.mobile},
    8vw,
    ${({ theme }) => theme.typography.h1.desktop}
  );
`;

export const Intro = styled.p`
  margin-top: 16px;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.lightText};

  font-size: ${({ theme }) => theme.typography.body.desktop};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.body.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobile};
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;

  a {
    display: inline-flex;
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;
export const ProfileImg = styled.img`
  width: 480px;
  max-width: 100%;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 240px;
    margin-top: 32px;
  }
`;
