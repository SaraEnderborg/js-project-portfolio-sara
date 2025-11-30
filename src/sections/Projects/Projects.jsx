import Card from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import projectsData from "../../data/projects.json";
import { Section, Title } from "./Projects.styles";

export default function Projects() {
  return (
    <Section>
      <Title>Featured Projects</Title>

      <Carousel
        data={projectsData.projects}
        renderItem={(project) => (
          <Card
            title={project.name}
            description={project.description || "No description yet"}
            image={project.image}
            demo={project.netlify}
            code={project.github}
          />
        )}
      />
    </Section>
  );
}
