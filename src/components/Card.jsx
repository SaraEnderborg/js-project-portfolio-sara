import Button from "./Button";
import { Card as StyledCard } from "./Card.styles";

export default function Card({
  image,
  title,
  description,
  date,
  text,
  demo,
  code,
  link,
  buttonText = "Read more",
}) {
  return (
    <StyledCard>
      <img src={image} alt={title} />

      {date && <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>{date}</p>}
      <h3>{title}</h3>
      <p>{description || text}</p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {demo && <Button href={demo}>Live demo</Button>}

        {code && (
          <Button href={code} $variant="outline">
            View Code
          </Button>
        )}

        {link && (
          <Button href={link} $variant="outline">
            {buttonText}
          </Button>
        )}
      </div>
    </StyledCard>
  );
}
