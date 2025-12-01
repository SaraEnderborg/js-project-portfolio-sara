import {
  Section,
  Wrapper,
  Image,
  Content,
  Title,
  Text,
  Icons,
} from "./Contact.styles";

import { Github } from "../../assets/icons/Github.jsx";
import { Linkedin } from "../../assets/icons/Linkedin.jsx";

export default function Contact() {
  return (
    <Section>
      <Wrapper>
        <Image>
          <img src="/profile.png" alt="Portrait of Sara Enderborg" />
        </Image>
        <Content>
          <Title>Let's talk</Title>

          <Text>Sara Enderborg</Text>
          <Text>+46(0) 737 06 45 72</Text>
          <Text>sara_enderborg@outlook.com</Text>

          <Icons>
            <a
              href="https://github.com/SaraEnderborg"
              aria-label="Github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/saraenderborg-dev/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </Icons>
        </Content>
      </Wrapper>
    </Section>
  );
}
