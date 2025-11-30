import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 520px;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  p {
    margin-bottom: 16px;
    line-height: 1.5;
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
