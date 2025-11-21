import {
  Container,
  Content,
  Name,
  Title,
  Intro,
  ProfileImg,
} from "./Hero.styles";

export default function Hero() {
  return (
    <Container>
      <Content>
        <Name>Sara Enderborg</Name>
        <Title>Frontend Developer</Title>
        <Intro>
          I’m a Junior Frontend Developer focused on creating clear, intuitive
          digital experiences. My recent work has taught me how to turn
          complexity into something simple and human, sharpening my sense for
          structure and clarity. With a background in history and customer
          relations, I bring research, pattern-finding, and a people-first
          mindset into everything I build.
        </Intro>
      </Content>

      <ProfileImg src="/profile.jpg" alt="Profile portrait" />
    </Container>
  );
}
