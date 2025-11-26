import {
  Section,
  Wrapper,
  Image,
  Content,
  Title,
  Text,
  Icons,
} from "./Contact.styles";

export default function Contact() {
  return (
    <Section>
      <Wrapper>
        <Image>
          <img src="/profile.png" alt="Profile" />
        </Image>
        <Content>
          <Title>Let's talk</Title>

          <Text>Sara Enderborg</Text>
          <Text>+46(0) 737 06 45 72</Text>
          <Text>sara_enderborg@outlook.com</Text>

          <Icons>
            <a href="#">in</a>
            <a href="#">🐙</a>
            <a href="#">🖌</a>
          </Icons>
        </Content>
      </Wrapper>
    </Section>
  );
}
