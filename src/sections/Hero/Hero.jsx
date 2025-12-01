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
            href="https://github.com/SaraEnderborg"
            aria-label="Github profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github aria-hidden="true" focusable="false" />
          </a>

          <a
            href="https://www.linkedin.com/in/saraenderborg-dev/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin aria-hidden="true" focusable="false" />
          </a>
        </Socials>
      </Content>

      <ProfileImg src="/profile.png" alt="Portrait of Sara Enderborg" />
    </Container>
  );
}
