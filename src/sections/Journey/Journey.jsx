import journeyData from "../../data/journey.json";
import Card from "../../components/Card";
import { Section, Title, Grid } from "./Journey.styles";

export default function Journey() {
  return (
    <Section>
      <Title>My Journey</Title>

      <Grid>
        {journeyData.posts.map((post, index) => (
          <Card key={index} {...post} buttonText="Read Article" />
        ))}
      </Grid>
    </Section>
  );
}
