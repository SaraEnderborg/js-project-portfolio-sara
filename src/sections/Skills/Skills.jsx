import SkillColumn from "../../components/SkillColumn";
import { skills } from "../../data/skills";
import { Section, Title, Grid } from "./Skills.styles";

export default function Skills() {
  return (
    <Section>
      <Title>Skills</Title>

      <Grid>
        <SkillColumn title="Code" items={skills.code} />
        <SkillColumn title="Toolbox" items={skills.toolbox} />
        <SkillColumn title="Upcoming" items={skills.upcoming} />
        <SkillColumn title="More" items={skills.more} />
      </Grid>
    </Section>
  );
}
