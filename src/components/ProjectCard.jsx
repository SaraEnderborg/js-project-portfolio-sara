import Button from "./Button";
import { Card } from "./ProjectCard.styles";

export default function ProjectCard({ title, description, image, demo, code }) {
  return (
    <Card>
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{description}</p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Button href={demo} variant="primary">
          Live demo
        </Button>
        <Button href={code} variant="outline">
          View Code
        </Button>
      </div>
    </Card>
  );
}
