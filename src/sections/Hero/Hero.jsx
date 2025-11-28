import {
  Container,
  Content,
  Name,
  Title,
  Intro,
  ProfileImg,
  Socials,
} from "./Hero.styles";

import { Github } from "../../assets/icons/Github";
import { Linkedin } from "../../assets/icons/Linkedin";

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
        <Socials>
          <a
            href="https://github.com/dittkonto"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com/in/dittkonto"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </Socials>
      </Content>

      <ProfileImg src="/profile.png" alt="Profile portrait" />
    </Container>
  );
}
