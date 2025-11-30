import journeyData from "../../data/journey.json";
import Card from "../../components/Card";
import { Section, Title } from "./Journey.styles";
import { Carousel } from "../../components/Carousel";

export default function Journey() {
  return (
    <Section>
      <Title>My Journey</Title>

      <Carousel
        data={journeyData.posts}
        renderItem={(post) => <Card {...post} buttonText="Read Article" />}
      />
    </Section>
  );
}
