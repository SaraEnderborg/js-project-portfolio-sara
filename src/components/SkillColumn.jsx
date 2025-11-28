import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #202020;
  margin: 0;
  font-size: clamp(18px, 2vw, 22px);
`;

const Item = styled.p`
  font-family: "Poppins", sans-serif;
  color: #202020;
  margin: 0;
  font-size: clamp(13px, 1.5vw, 15px);
  line-height: 1.6;
`;

export default function SkillColumn({ title, items }) {
  return (
    <Column>
      <Title>{title}</Title>
      {items.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </Column>
  );
}
