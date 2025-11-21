import ProjectCard from "../../components/ProjectCard";
import projectsData from "../../data/projects.json";
import { Section, Title, Grid } from "./Projects.styles";

export default function Projects() {
  return (
    <Section>
      <Title>Projects</Title>

      <Grid>
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            description={project.description || "No description available yet"}
            image={project.image}
            demo={project.netlify}
            code={project.github}
          />
        ))}
      </Grid>
    </Section>
  );
}
