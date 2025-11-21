import Button from "./Button";
import { Card } from "./Card.styles";

export default function JourneyCard({ post, image }) {
  return (
    <Card>
      <img src={post.image} alt={post.title} />

      <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>{post.date}</p>

      <h3>{post.title}</h3>

      <p>{post.text}</p>

      <Button href={post.link} $variant="outline">
        Read Article
      </Button>
    </Card>
  );
}
