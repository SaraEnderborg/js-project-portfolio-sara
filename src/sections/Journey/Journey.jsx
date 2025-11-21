import journeyData from "../../data/journey.json";
import JourneyCard from "../../components/JourneyCard";
import { Section, Title, Grid } from "./Journey.styles";

export default function Journey() {
  return (
    <Section>
      <Title>My Journey</Title>

      <Grid>
        {journeyData.posts.map((post, index) => (
          <JourneyCard key={index} post={post} />
        ))}
      </Grid>
    </Section>
  );
}
