import styled from "styled-components";

export const Column = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 24px;
  border-radius: 12px;

  width: 100%;
  min-height: 285px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
